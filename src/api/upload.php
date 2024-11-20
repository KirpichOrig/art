<?php
// Подключение к базе данных
$conn = new PDO("mysql:host=localhost;dbname=art", "root", "");

// Проверка, был ли загружен файл
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['media_file'])) {
    $file = $_FILES['media_file'];
    $fileName = basename($file['name']);
    $fileType = pathinfo($fileName, PATHINFO_EXTENSION);
    $fileTmpName = $file['tmp_name'];

    // Проверяем, поддерживаем ли этот тип файла
    $allowedTypes = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'webm'];
    if (in_array($fileType, $allowedTypes)) {
        // Генерация уникального имени для файла
        $filePath = 'uploads/' . uniqid() . '.' . $fileType;

        // Перемещение файла в папку uploads
        if (move_uploaded_file($fileTmpName, $filePath)) {
            // Запись информации о файле в базу данных
            $stmt = $conn->prepare("INSERT INTO media (file_name, file_type, file_path) VALUES (?, ?, ?)");
            $stmt->execute([$fileName, $fileType, $filePath]);

            echo "Файл успешно загружен!";
        } else {
            echo "Ошибка при загрузке файла.";
        }
    } else {
        echo "Неподдерживаемый тип файла.";
    }
}
?>
