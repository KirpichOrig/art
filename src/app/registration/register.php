<?php
// Подключение к базе данных
$host = 'localhost'; 
$dbname = 'art';
$username = 'root';
$password = '';

try {
    // Создаем подключение
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Включаем обработку ошибок
} catch (PDOException $e) {
    echo json_encode(["message" => "Ошибка подключения: " . $e->getMessage()]);
    exit;
}

// Проверка на запрос POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Получаем данные из POST запроса
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Проверка на наличие пользователя с таким email
    $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $userExists = $stmt->fetchColumn();
    if ($userExists) {
        echo json_encode(["message" => "Пользователь с таким email уже существует."]);
        exit;
    }

    // Хэшируем пароль
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Вставка нового пользователя в базу данных
    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$name, $email, $hashed_password]);

    // Ответ клиенту
    echo json_encode(["message" => "Пользователь успешно зарегистрирован"]);
} else {
    echo json_encode(["message" => "Неверный запрос"]);
}
?>
