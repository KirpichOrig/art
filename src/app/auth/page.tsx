"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import './style.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { push } = useRouter(); // Деструктуризация useRouter для получения метода push

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Отправка данных на сервер
    const response = await fetch('http://site/src/api/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Успешный вход, сохраняем информацию в localStorage
      localStorage.setItem('user', JSON.stringify(data.user));

      // Перенаправление с использованием метода push
      push('/start'); // Направляем пользователя на страницу '/start'
    } else {
      // Ошибка авторизации
      setError(data.error || 'Неизвестная ошибка');
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="relative max-h-[600px] max-w-[427px] rounded-l-[20px]">
        <Image className="h-full w-full rounded-l-[20px]"
          src="/images/auth/1.png"
          width={427}
          height={600}
          alt=""
        />
        <Link href="/start">
          <p className="text-white opacity-[0.6] text-[14px] text-end pr-4 py-1">на главную страницу</p>
        </Link>
        <div className="max-h-[600px] max-w-[427px] h-full w-full bg-black absolute top-0 left-0 opacity-[0.2]"></div>
      </div>
      <div className="max-h-[600px] max-w-[427px] h-full w-full">
        <Link href="/registration">
          <p className="text-white text-[14px] pl-4 py-1 bg-transparent flex items-center gap-1">
            <span className="opacity-[0.6]">у меня нет аккаунта</span>
            <Image className="h-[15px] w-[15px] bg-transparent"
              src="/images/auth/right.png"
              width={15}
              height={15}
              alt=""
            />
          </p>
        </Link>
        <div className="max-h-[600px] max-w-[427px] h-full w-full bg-[#181818] rounded-r-[20px] flex flex-col justify-between">
          <form onSubmit={handleLogin} className="bg-transparent py-[20px] px-[45px] flex flex-col gap-[24px]">
            <p className="bg-transparent text-[32px] font-[700] text-white">Вход в аккаунт</p>
            <div className="bg-transparent flex flex-col gap-[12px]">
              <input
                type="email"
                className="bg-transparent input px-[10px] py-[6px] focus:outline-none text-white"
                placeholder="почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="bg-transparent input px-[10px] py-[6px] focus:outline-none text-white"
                placeholder="пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="py-[4px] border border-white border-solid text-white opacity-[0.9] rounded-[4px]">войти</button>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="bg-transparent flex gap-4 items-center">
              <div className="bg-transparent h-[1px] w-full bg-white"></div>
              <p className="bg-transparent text-white text-[16px] font-[400]">или</p>
              <div className="bg-transparent w-full h-[1px] bg-white"></div>
            </div>
            <div className="bg-transparent flex gap-10 justify-center">
              <div className="max-h-[45px] max-w-[100px] bg-transparent">
                <Image className="bg-transparent"
                  src="/images/auth/google.png"
                  width={100}
                  height={45}
                  alt=""
                />
              </div>
              <div className="max-h-[45px] max-w-[100px] bg-transparent">
                <Image className="bg-transparent"
                  src="/images/auth/vk.png"
                  width={100}
                  height={45}
                  alt=""
                />
              </div>
            </div>
          </form>
          <p className="bg-transparent px-[45px] pb-[20px] text-[12px] text-gray-100">Рады снова видеть вас у нас на сайте :3</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
