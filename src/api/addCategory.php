<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "art";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Получаем данные из запроса
    $data = json_decode(file_get_contents("php://input"), true);
    $categoryName = $data['name'];
    
    // Проверяем, что категория не пуста
    if (empty($categoryName)) {
        echo json_encode(["success" => false, "error" => "Category name is required."]);
        exit;
    }
    
    // Добавляем новую категорию
    $stmt = $conn->prepare("INSERT INTO categories (name) VALUES (:name)");
    $stmt->bindParam(':name', $categoryName);
    $stmt->execute();
    
    echo json_encode(["success" => true]);
} catch(PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>

