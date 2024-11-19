"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.css';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);

  // Проверка авторизации при загрузке компонента
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Устанавливаем информацию о пользователе
    }
  }, []);

  // Обработчик клика на логотип
  const handleLogoClick = (e: React.MouseEvent) => {
    // Если находимся на /start, перенаправляем на главную страницу
    if (pathname === '/start') {
      window.location.href = '/';
    } else {
      // Если находимся на другой странице, перенаправляем на /start
      window.location.href = '/start';
    }
    // Останавливаем стандартное поведение ссылки
    e.preventDefault();
  };

  return (
    <header className="header section">
      <div className="logo">
        <Link href="/" onClick={handleLogoClick}>
          <Image src="/images/logo/logo-b.png" alt="Логотип" width={133} height={50} />
        </Link>
      </div>
      <nav className="header-nav">
        <a href="#">инфо</a>
        <Link href="/catalog">каталог</Link>
        <a href="/start#cours">услуги</a>
        <a href="/start#miniWorks">работы учеников  </a>
        <div className="header-nav-authorization">
          {user ? (
            // Если пользователь авторизован, показываем ссылку на профиль
            <Link href="/profile">
              <p>профиль</p>
            </Link>
          ) : (
            <>
              <Link href="/registration">
                <p>регистрация</p>
              </Link>
              <p>/</p>
              <Link href="/auth">
                <p>вход</p>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;