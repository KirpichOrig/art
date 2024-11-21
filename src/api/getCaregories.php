<?php
header('Access-Control-Allow-Origin: *');
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

$query = "SELECT * FROM categories";
$stmt = $conn->query($query);
$categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($categories);
?>
