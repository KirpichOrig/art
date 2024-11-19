<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
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
    echo "Connection failed: " . $e->getMessage();
    exit();
}

// Получаем данные с фронтенда
$data = json_decode(file_get_contents("php://input"));

// Проверка email и пароля
if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(["error" => "Недостаточно данных"]);
    exit();
}

$email = $data->email;
$password = $data->password;

// Проверка пользователя в базе данных
$query = "SELECT * FROM users WHERE email = :email LIMIT 1";
$stmt = $conn->prepare($query);
$stmt->bindParam(':email', $email);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password_hash'])) {
    // Пользователь найден и пароль правильный
    echo json_encode([
        "success" => true,
        "user" => [
            "id" => $user['id'],
            "name" => $user['name'],
            "email" => $user['email'],
            "role" => $user['role']
        ]
    ]);
} else {
    // Неверный email или пароль
    echo json_encode(["error" => "Неверный email или пароль"]);
}
?>
