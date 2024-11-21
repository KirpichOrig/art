<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
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
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}

// Проверяем, передан ли параметр id
if (!isset($_GET['id']) || empty($_GET['id'])) {
    echo json_encode(['error' => 'File ID is required']);
    exit;
}

$id = intval($_GET['id']);

// Запрос к базе данных для получения данных о конкретном файле
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
    WHERE mf.id = :id
";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':id', $id, PDO::PARAM_INT);
$stmt->execute();

$file = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$file) {
    echo json_encode(['error' => 'File not found']);
    exit;
}

// Возвращаем данные в формате JSON
echo json_encode($file);
?>
