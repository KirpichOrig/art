<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

try {
    $db = new PDO("mysql:host=localhost;dbname=art", "root", "");
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['id']) || !isset($data['name'])) {
        echo json_encode(["error" => "Данные некорректны"]);
        exit;
    }

    $stmt = $db->prepare("UPDATE categories SET name = :name WHERE id = :id");
    $stmt->bindParam(':name', $data['name'], PDO::PARAM_STR);
    $stmt->bindParam(':id', $data['id'], PDO::PARAM_INT);
    $stmt->execute();

    echo json_encode(["success" => true, "message" => "Категория обновлена"]);
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
