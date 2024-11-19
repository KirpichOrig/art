'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style.css';

const Auth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Отменяем стандартное поведение формы

    // Проверка на пустые поля
    if (!name || !email || !password || !repeatPassword) {
      alert('Все поля обязательны для заполнения');
      return;
    }

    // Проверка на совпадение паролей
    if (password !== repeatPassword) {
      alert('Пароли не совпадают');
      return;
    }

    // Отправка данных на сервер
    try {
      const response = await fetch('http://site/src/api/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          repeatPassword,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Регистрация успешна');
      } else {
        alert(result.message || 'Ошибка регистрации');
      }
    } catch (error) {
      alert('Ошибка при отправке данных');
    }
  };

  return (
    <div className='h-[100vh] flex justify-center items-center'>
      {/* img */}
      <div className='relative max-h-[600px] max-w-[427px] rounded-l-[20px]'>
        <Image className='h-full w-full rounded-l-[20px]'
          src="/images/auth/1.png"
          width={427}
          height={600}
          alt={''}
        /> 
        <Link href="/start">
          <p className='text-white opacity-[0.6] text-[14px] text-end pr-4 py-1'>на главную страницу</p>
        </Link>
        <div className='max-h-[600px] max-w-[427px] h-full w-full bg-black absolute top-0 left-0 opacity-[0.2]'></div>
      </div>
      {/* блок с формой */}
      <div className='max-h-[600px] max-w-[427px] h-full w-full'>
        <Link href="/auth">
          <p className='text-white text-[14px] pl-4 py-1 bg-transparent flex items-center gap-1'>
            <span className='opacity-[0.6]'>у меня уже есть аккаунт</span>
            <Image className='h-[15px] w-[15px] bg-transparent'
              src="/images/auth/right.png"
              width={15}
              height={15}
              alt={''}
            /> 
          </p>
        </Link>
        <div className='max-h-[600px] max-w-[427px] h-full w-full bg-[#181818] rounded-r-[20px] flex flex-col justify-between'>
          {/* форма регистрации */}
          <form className='bg-transparent py-[20px] px-[45px] flex flex-col gap-[24px]' onSubmit={handleSubmit}>
            <p className='bg-transparent text-[32px] font-[700] text-white'>Регистрация</p>
            <div className='bg-transparent flex flex-col gap-[12px]'>
              <input
                type="text"
                className='bg-transparent input px-[10px] py-[6px] focus:outline-none text-white'
                placeholder='имя'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className='bg-transparent input px-[10px] py-[6px] focus:outline-none text-white'
                placeholder='почта'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className='bg-transparent input px-[10px] py-[6px] focus:outline-none text-white'
                placeholder='пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className='bg-transparent input px-[10px] py-[6px] focus:outline-none text-white'
                placeholder='повторите пароль'
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
            <button type="submit" className='py-[4px] border border-white border-solid text-white opacity-[0.9] rounded-[4px]'>
              зарегистрироваться
            </button>
            <div className='bg-transparent flex gap-4 items-center'>
              <div className='bg-transparent h-[1px] w-full bg-white'></div>
              <p className='bg-transparent text-white text-[16px] font-[400]'>или</p>
              <div className='bg-transparent w-full h-[1px] bg-white'></div>
            </div>
            <div className='bg-transparent flex gap-10 justify-center'>
              <div className='max-h-[45px] max-w-[100px] bg-transparent'>
                <Image className='bg-transparent'
                  src="/images/auth/google.png"
                  width={100}
                  height={45}
                  alt={''}
                /> 
              </div>
              <div className='max-h-[45px] max-w-[100px] bg-transparent'>
                <Image className='bg-transparent'
                  src="/images/auth/vk.png"
                  width={100}
                  height={45}
                  alt={''}
                /> 
              </div>
            </div>
          </form>
          {/* согласие */}
          <p className='bg-transparent px-[45px] pb-[20px] text-[12px] text-gray-100'>регистрируясь на сайте вы соглашаетесь с <br/><span className='underline bg-transparent'>пользовательским соглашением</span></p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
