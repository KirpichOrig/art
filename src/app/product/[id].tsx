import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query; // Получаем id из URL
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        if (id) {
            // Получаем данные о карточке с сервера
            const fetchProduct = async () => {
                const response = await fetch(`http://site/src/api/product.php?id=${id}`);
                const data = await response.json();
                setProduct(data);
            };
            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <img src={`http://site/src/api/${product.file_path}`} alt={product.name} />
            <p>{product.description}</p>
            {/* Добавьте другие элементы для отображения информации о карточке */}
        </div>
    );
};

export default ProductPage;
