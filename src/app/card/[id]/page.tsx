"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Masonry from 'react-masonry-css';
import './product.css';

const ProductPage = () => {
    const [files, setFiles] = useState<any[]>([]);  // Храним файлы

    // Получаем файлы с сервера
    useEffect(() => {
        const fetchFiles = async () => {
            const response = await fetch('http://site/src/api/files.php');
            const data = await response.json();
            setFiles(data);  // Обновляем состояние с файлами
        };

        fetchFiles();
    }, []);

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

    const [file, setFile] = useState<any | null>(null); // Состояние для выбранного файла
    const { id } = useParams(); // Получаем параметр id из URL
    const { push } = useRouter();

    useEffect(() => {
        const fetchFile = async () => {
            const response = await fetch(`http://site/src/api/file.php?id=${id}`);
            const data = await response.json();
            setFile(data); // Обновляем состояние с данными о файле
        };

        fetchFile();
    }, [id]);

    return (
        <div className="relative">
            {/* header */}
            <div className="absolute left-[72px]">
                <div className="fixed z-20 bg-black w-full h-[80px] flex items-center gap-[10px] pl-[10px] pr-[82px] sm:gap-[20px] sm:pl-[20px] sm:pr-[92px]">
                    <div className="bg-[#1d1d1d] w-full rounded-[12px] flex items-center px-5 gap-1">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="bg-transparent w-full h-[48px] focus:outline-none text-white"
                        />
                        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                    </div>
                    <div className="h-[44px] w-[46px]">
                        <Link
                            href="/profile"
                            className="bg-[#1d1d1d] flex items-center justify-center rounded-[1000px] text-black font-[600] text-[24px] h-[44px] w-[46px]"
                        >
                            A
                        </Link>
                    </div>
                </div>
            </div>

            {/* menu */}
            <div className="h-screen w-[72px] fixed ram">
                <div className="w-[72px] py-8 fixed flex flex-col items-center gap-16">
                    <Link href="/start">
                        <i className="fa-solid fa-house text-[#474747] text-[22px]"></i>
                    </Link>
                    <Link href="/upload">
                        <i className="fa-regular fa-square-plus text-[#474747] text-[26px]"></i>
                    </Link>
                    <Link href="/catalog">
                        <i className="fa-regular fa-bell text-[#474747] text-[26px]"></i>
                    </Link>
                </div>
            </div>

            {/* content */}
            <div className="absolute left-[92px] top-[80px] px-4 py-4">
                <div className="mr-[-15px] w-full flex flex-col justify-center items-center">
                    {/* карточка одного изображения */}
                    <div className="w-full flex justify-center">
                        {/* img */}
                        {file ? (
                            <div className="ram-img rounded-[10px]">
                                <div className="relative">
                                    <Image
                                        src={`http://site/src/api/${file.file_path}`}
                                        className="h-full w-auto object-contain rounded-t-[10px]"
                                        style={{ maxHeight: '500px' }}
                                        width={400}
                                        height={1}
                                        alt={file.file_name}
                                    />
                                    <div className="absolute top-0 left-0 flex px-2 py-2 flex-col gap-2">
                                        <p className="rounded-[5px] px-3 py-[1px] bg-[#0000003f] text-white text-[16px] w-fit">
                                            {file.file_name} {/* Название файла */}
                                        </p>
                                        <p className="rounded-[5px] px-3 py-[1px] bg-[#0000003f] text-white text-[16px] w-fit">
                                            {file.category_name} {/* Категория */}
                                        </p>
                                    </div>
                                </div>
                                <div className="py-3 px-3 flex flex-col">
                                    {/* Профиль/кнопка */}
                                    <div className="flex justify-between items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-[26px] w-[28px]">
                                                <div className="bg-[#1d1d1d] flex items-center justify-center rounded-[1000px] text-black font-[600] text-[16px] h-[26px] w-[28px]">
                                                    A
                                                </div>
                                            </div>
                                            <p className="text-white text-[16px]">{file.uploader_name}</p> {/* Имя автора */}
                                        </div>
                                        <Link href={`mailto:${file.uploader_email}`} className="text-white">
                                            {file.uploader_email} {/* Почта автора */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-white">Загрузка...</p>
                        )}
                    </div>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid mt-10"
                        columnClassName="my-masonry-grid_column"
                    >
                        {files.map((file) => (
                            <div key={file.id} className="rounded-[10px] overflow-hidden shadow-lg">
                                <Link href={`/card/${file.id}`}>
                                    <Image
                                        src={`http://site/src/api/${file.file_path}`}
                                        alt={file.name}
                                        width={300}
                                        height={400}
                                        className="rounded-[10px]"
                                    />
                                </Link>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

