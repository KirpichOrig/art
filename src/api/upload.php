<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
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

// Проверяем, был ли загружен файл
if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    // Указываем директорию для загрузки
    $uploadDir = 'uploads/';
    // $uploadDir = 'D:/OSPanel/domains/site/public/images/catalog/';

    // Проверяем существование папки
    if (!is_dir($uploadDir)) {
        echo json_encode(["error" => "Папка для загрузки не существует."]);
        exit();
    }

    // Чистим имя файла (удаляем нежелательные символы)
    $fileName = preg_replace('/[^a-zA-Z0-9\-\_\.]/', '_', $_FILES['file']['name']);
    $filePath = $uploadDir . $fileName;

    // Проверяем размер файла
    if ($_FILES['file']['size'] > 10 * 1024 * 1024) { // 10 MB ограничение
        echo json_encode(["error" => "Файл слишком большой. Максимальный размер 10 MB."]);
        exit();
    }

    // Получаем данные из POST-запроса
    $categoryId = $_POST['category'];  // Значение будет числовым, например, 1, 2 или 3
    $fileNameInput = $_POST['name'];  // Название, введенное пользователем

    // Проверяем существование категории
    $stmt = $conn->prepare("SELECT id FROM categories WHERE id = ?");
    $stmt->execute([$categoryId]);
    $category = $stmt->fetch(PDO::FETCH_ASSOC);

    $userId = $_POST['userId'];

    // Проверяем, существует ли переданный userId
    if (!$userId) {
        echo json_encode(["error" => "Не указан ID пользователя."]);
        exit();
    }

    if (!$category) {
        echo json_encode(["error" => "Категория с таким ID не существует."]);
        exit();
    }

    // Перемещаем файл в папку
    if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
        // Файл загружен успешно, теперь добавляем информацию в базу данных
        try {
            $stmt = $conn->prepare("INSERT INTO media_files (name, user_id, category_id, file_path, type, created_at) 
                        VALUES (?, ?, ?, ?, ?, NOW())");
            $stmt->execute([
                $fileNameInput,    // Используем название из формы
                $userId,           // user_id
                $categoryId,       // category_id
                $filePath,         // file_path
                $_FILES['file']['type'] // type
            ]);

            echo json_encode(["success" => "Файл успешно загружен."]);
        } catch (PDOException $e) {
            echo json_encode(["error" => "Ошибка при записи в базу данных: " . $e->getMessage()]);
        }
    } else {
        echo json_encode(["error" => "Ошибка при загрузке файла."]);
    }
} else {
    echo json_encode(["error" => "Файл не был загружен или произошла ошибка."]);
}