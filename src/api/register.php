<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Соединение с базой данных
$host = 'localhost'; // или другой хост
$dbname = 'art';   // название вашей базы данных
$username = 'root';   // имя пользователя
$password = '';       // пароль (если он есть)

try {
    // Создаем PDO-соединение с базой данных
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Устанавливаем атрибут для обработки ошибок
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['message' => 'Ошибка подключения к базе данных: ' . $e->getMessage()]);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];  // Добавляем имя пользователя
$email = $data['email'];  // Используем email вместо login
$password = $data['password'];
$repeatPassword = $data['repeatPassword'];

if (empty($name) || empty($email) || empty($password)) {
    echo json_encode(['message' => 'Все поля обязательны для заполнения']);
    exit();
}

if($password != $repeatPassword){
    echo json_encode(['message' => 'Пароли не совпадают']);
    exit();
}

// Проверяем, существует ли уже такой email
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bindParam(1, $email);
$stmt->execute();

if ($stmt->rowCount() > 0) {
    echo json_encode(['message' => 'Email уже существует']);
    exit();
}

// Генерация значения по умолчанию для поля role
$role = 'user';  // Задаём роль по умолчанию

// Хэшируем пароль
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Вставляем нового пользователя в таблицу
$stmt = $conn->prepare("INSERT INTO users (name, email, password_hash, role, created_at) VALUES (?, ?, ?, ?, NOW())");
$stmt->bindParam(1, $name);
$stmt->bindParam(2, $email);
$stmt->bindParam(3, $hashed_password);
$stmt->bindParam(4, $role);

if ($stmt->execute()) {
    echo json_encode(['message' => 'Регистрация успешна']);
} else {
    echo json_encode(['message' => 'Ошибка регистрации']);
}
?>
