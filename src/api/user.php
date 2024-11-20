<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Подключение к базе данных
$host = 'localhost';
$db = 'art';
$user = 'root';
$pass = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
    exit();
}

// Проверка метода запроса
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

// Получение userId из запроса
if (!isset($_GET['userId'])) {
    echo json_encode(["error" => "User ID is required"]);
    exit();
}

$userId = $_GET['userId'];

try {
    // Выполняем запрос к базе данных
    $stmt = $conn->prepare("SELECT name FROM users WHERE id = :id");
    $stmt->bindParam(':id', $userId, PDO::PARAM_INT);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        echo json_encode(["error" => "User not found"]);
        exit();
    }

    // Возвращаем данные пользователя
    echo json_encode($user);
} catch (PDOException $e) {
    echo json_encode(["error" => "Server error: " . $e->getMessage()]);
    exit();
}
?>
