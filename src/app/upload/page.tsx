"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './upload.css';

const Upload = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [categories, setCategories] = useState<Array<{ id: string, name: string }>>([]); // Массив для категорий
  const [error, setError] = useState<string>('');
  const router = useRouter();

  // Загружаем категории при монтировании компонента
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://site/src/api/categories.php');
        const data = await response.json();

        if (Array.isArray(data)) {
          setCategories(data); // Если ответ в виде массива категорий
        } else {
          setError('Не удалось загрузить категории');
        }
      } catch (err) {
        setError('Ошибка при загрузке категорий');
      }
    };

    fetchCategories();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка, что все поля заполнены
    if (!name || !category || !fileName) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

    // Очистить ошибку, если все поля заполнены
    setError('');

    // Логика отправки данных на сервер
    const formData = new FormData();
    formData.append('name', name); // Включаем название файла
    formData.append('category', category);

    // Получаем файл из input
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput && fileInput.files) {
      formData.append('file', fileInput.files[0]);
    }

    try {
      const response = await fetch('http://site/src/api/upload.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        // Успешная отправка данных
        // Перенаправление на страницу профиля
        router.push('/profile');
      } else {
        // Ошибка при отправке
        setError('Не удалось загрузить файл.');
      }
    } catch (err) {
      setError('Ошибка сервера. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <div className='max-w-[1160px] flex flex-col mt-0 ml-auto mb-0 mr-auto min-h-screen'>
      <div className='flex-grow max-w-[400px] w-full mx-auto text-white flex justify-center items-center'>
        <form
          className='relative border border-solid px-6 py-4 rounded-[10px] max-w-[400px] w-full flex flex-col justify-center items-center gap-8'
          onSubmit={handleSubmit}
        >
          <p className='text-[20px] font-[600]'>Добавление файла</p>

          {/* Сообщение об ошибке */}
          {error && <p className="text-red-500">{error}</p>}

          <div className='flex flex-col gap-2 w-full'>
            {/* Поле для ввода названия */}
            <input
              className='bg-transparent w-full ram px-2'
              type="text"
              name="name"
              placeholder='Название'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* Выбор категории */}
            <select
              className='w-full bg-transparent py-1 px-1 ram focus:outline-none'
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className='bg-[#1f1f1f] text-white' value="">Выберите категорию</option>
              {categories.map((cat) => (
                <option key={cat.id} className='bg-[#1f1f1f] text-white' value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div
            className="bg-[#1f1f1f] rounded-[5px] p-6 w-full text-center cursor-pointer"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            {fileName ? (
              <p className="text-white font-[300] opacity-[0.7] text-[16px]">{fileName}</p>
            ) : (
              <p className="text-white font-[300] opacity-[0.7] text-[16px]">Перетащите файл сюда или нажмите для выбора</p>
            )}
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className='bg-[#ffffff] w-full rounded-[5px] py-2 text-[16px] text-[#000000] font-[700] transition-all duration-300'
          >
            Загрузить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
