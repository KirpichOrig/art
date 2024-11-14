"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './header.css';

const Header: React.FC = () => {
  const pathname = usePathname();

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
        <a href="#">день</a>
        <a href="/start#miniWorks">работы учеников</a>
        <a href="/start#cours">услуги</a>
        <div className="header-nav-authorization">
          <Link href="/registration">
            <p>регистрация</p>
          </Link>
          <p>/</p>
          <Link href="/auth">
            <p>вход</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
