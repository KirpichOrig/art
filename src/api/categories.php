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
    
    // Запрос для получения всех категорий
    $stmt = $conn->prepare("SELECT * FROM categories");
    $stmt->execute();
    
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Возвращаем данные в формате JSON
    echo json_encode($categories);
} catch(PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}