"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Masonry from 'react-masonry-css';
import './profile.css';

const quotes = [
    {
        text: "Я мечтаю писать свои сны и потом снова мечтать, глядя на свои картины.",
        author: "Винсент Ван Гог"
    },
    {
        text: "Простота — высшая степень утончённости.",
        author: "Леонардо да Винчи"
    },
    {
        text: "Каждый ребёнок — художник. Проблема в том, чтобы остаться художником, выйдя из детского возраста.",
        author: "Пабло Пикассо"
    },
    {
        text: "Я видел ангела в куске мрамора и резал, пока не освободил его.",
        author: "Микеланджело"
    },
    {
        text: "Творить — значит дарить своему внутреннему свету пространство для сияния.",
        author: "Анри Матисс"
    },
    {
        text: "Настоящий художник делает так, чтобы незаметное стало видимым.",
        author: "Рембрандт"
    },
    {
        text: "Цвет есть место, где наш мозг и Вселенная встречаются.",
        author: "Пол Сезанн"
    },
    {
        text: "Разница между мной и сумасшедшим в том, что я не сумасшедший.",
        author: "Сальвадор Дали"
    },
    {
        text: "Мне легче сказать всё через краски.",
        author: "Джорджия О’Киф"
    },
    {
        text: "Я хочу писать, как поёт птица.",
        author: "Клод Моне"
    }
];

const images = [
    { src: '/images/banner/1.png', alt: 'Image 1', width: 300, height: 400 },
    { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
    { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
    { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
    { src: '/images/banner/2.png', alt: 'Image 1', width: 300, height: 400 },
    { src: '/images/catalog/2.jpg', alt: 'Image 1', width: 300, height: 400 },
    { src: '/images/catalog/1.gif', alt: 'Image 1', width: 300, height: 400 },
];

const Profile = () => {
    const breakpointColumnsObj = {
        default: 10,
        2730: 9,
        2420: 8,
        2180: 7,
        1860: 6,
        1600: 5,
        1100: 4,
        900: 3,
        768: 2,
        500: 1,
    };
    
    const [user, setUser] = useState<{ name: string } | null>(null); // Состояние для пользователя
    const [randomQuote, setRandomQuote] = useState<{ text: string; author: string } | null>(null); // Состояние для случайной цитаты
    const [activeTab, setActiveTab] = useState<'quotes' | 'works' | 'courses'>('quotes'); // Состояние для активной вкладки
    const { push } = useRouter();

    // Загрузка данных пользователя из localStorage при монтировании компонента
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Если данные есть, устанавливаем их в состояние
        } else {
            push('/auth'); // Если данных нет, перенаправляем на страницу авторизации
        }

        // Выбираем случайную цитату
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuote(quotes[randomIndex]);
    }, [push]);

    // Обработчик выхода из профиля
    const handleLogout = () => {
        localStorage.removeItem('user'); // Удаляем данные пользователя из localStorage
        push('/auth'); // Перенаправляем на страницу авторизации
    };

    if (!user || !randomQuote) {
        return <div>Загрузка...</div>; // Если данные пользователя ещё не загружены или цитата ещё не выбрана
    }

    // Функция для переключения вкладок
    const renderTabContent = () => {
        switch (activeTab) {
            case 'quotes':
                return (
                    <div className="flex flex-col items-center justify-center gap-0 mt-12 p-6 rounded-xl shadow-lg">
                        <p className="text-white text-xl font-semibold italic text-center max-w-3xl">
                            "{randomQuote.text}"
                            <br />
                            <span className="font-normal mt-2 block">— {randomQuote.author}</span>
                        </p>
                    </div>
                );
            case 'works':
                return (
                    <div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid px-4"
                            columnClassName="my-masonry-grid_column"
                        >
                            {images.map((image, index) => (
                                <div key={index} className="rounded-[10px] overflow-hidden shadow-lg">
                                    <Link href="/product">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            className="rounded-[10px]"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </Masonry>
                        <div className="flex flex-col items-center justify-center gap-4 mt-10">
                            <p className="text-white">Тут пусто :(</p>
                            <Link
                                href="upload"
                                className="text-white px-4 py-2 rounded-[10px] border border-solid hover:opacity-[0.7] duration-300"
                            >
                                Добавить работу
                            </Link>
                        </div>
                    </div>
                );
            case 'courses':
                return (
                    <div className="flex flex-col items-center justify-center gap-4 mt-10">
                        <p className="text-white">Тут пусто :(</p>
                        <Link
                            href="/start#cours"
                            className="text-white px-4 py-2 rounded-[10px] border border-solid hover:opacity-[0.7] duration-300"
                        >
                            Записаться на курс
                        </Link>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-[1600px] mx-auto px-20 py-5 flex flex-col justify-center gap-5">
            {/* banner */}
            <div className="w-full h-[300px] overflow-hidden relative rounded-[10px]">
                <Image
                    src="/images/profile/box.gif"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Profile Banner"
                />
                <div className="absolute top-5 left-5 text-white flex gap-3">
                    <p className="px-4 py-2 rounded-[10px] bg-[#0000002e]">{user.name}</p> {/* Выводим имя пользователя */}
                    <button
                        className="px-4 py-2 rounded-[10px] bg-[#0000002e] cursor-pointer hover:opacity-[0.8] duration-300"
                        onClick={handleLogout}
                    >
                        Выход
                    </button>
                    <Link className="px-4 py-2 rounded-[10px] bg-[#0000002e] hover:opacity-[0.8] duration-300" href="/start">На главную</Link>
                </div>
            </div>
            {/* кнопки вкладок */}
            <div className="flex gap-3">
                <button
                    onClick={() => setActiveTab('quotes')}
                    className={`px-4 py-2 rounded-[10px] ${activeTab === 'quotes' ? 'bg-white text-black' : 'bg-transparent text-white border border-solid'} hover:opacity-[0.7] duration-3 00`}
                >
                    Цитаты
                </button>
                <button
                    onClick={() => setActiveTab('works')}
                    className={`px-4 py-2 rounded-[10px] ${activeTab === 'works' ? 'bg-white text-black' : 'bg-transparent text-white border border-solid'} hover:opacity-[0.7] duration-300`}
                >
                    Мои работы
                </button>
                <button
                    onClick={() => setActiveTab('courses')}
                    className={`px-4 py-2 rounded-[10px] ${activeTab === 'courses' ? 'bg-white text-black' : 'bg-transparent text-white border border-solid'} hover:opacity-[0.7] duration-300`}
                >
                    Активные курсы
                </button>
            </div>
            {/* контент вкладок */}
            <div className="mt-10">{renderTabContent()}</div>
        </div>
    );
};

export default Profile;

