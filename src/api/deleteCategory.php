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
    $categoryId = $data['id'];
    
    // Удаляем категорию по id
    $stmt = $conn->prepare("DELETE FROM categories WHERE id = :id");
    $stmt->bindParam(':id', $categoryId);
    $stmt->execute();
    
    echo json_encode(["success" => true]);
} catch(PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
