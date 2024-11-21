<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Подключение к базе данных
$dsn = "mysql:host=localhost;dbname=art";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Ошибка подключения к базе данных"]);
    exit;
}

if (isset($_GET['id'])) {
    $fileId = $_GET['id'];

    // Удаляем файл из базы данных
    $sql = "DELETE FROM files WHERE id = :fileId";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':fileId', $fileId, PDO::PARAM_INT);

    if ($stmt->execute()) {
        // Удаляем файл с сервера
        $filePath = $_GET['file_path'];
        if (file_exists($filePath)) {
            unlink($filePath); // Удаляем файл
        }
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Ошибка при удалении файла']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'ID файла не указан']);
}