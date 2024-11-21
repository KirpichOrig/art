<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Подключаемся к базе данных
$host = 'localhost';
$dbname = 'art';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}

// Запрос к базе данных для получения всех файлов с дополнительной информацией
$query = "
    SELECT 
        mf.id, 
        mf.name AS file_name, 
        mf.file_path, 
        c.name AS category_name, 
        u.name AS uploader_name, 
        u.email AS uploader_email 
    FROM media_files mf
    LEFT JOIN categories c ON mf.category_id = c.id
    LEFT JOIN users u ON mf.user_id = u.id
";
$stmt = $pdo->query($query);

// Извлекаем все файлы
$files = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Возвращаем данные в формате JSON
header('Content-Type: application/json');
echo json_encode($files);
?>
