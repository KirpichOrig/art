<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Подключаемся к базе данных
$host = 'localhost';
$dbname = 'art';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}

// Получаем user_id из запроса (например, из headers или тела запроса)
$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

if ($user_id) {
    // Запрос к базе данных для получения файлов для определенного пользователя
    $query = "SELECT id, name, file_path FROM media_files WHERE user_id = :user_id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':user_id', $user_id, PDO::PARAM_INT);
    $stmt->execute();
} else {
    // Если user_id не передан, можно вернуть все файлы или пустой результат
    $query = "SELECT id, name, file_path FROM media_files";
    $stmt = $pdo->query($query);
}

$files = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Возвращаем данные в формате JSON
header('Content-Type: application/json');
echo json_encode($files);
?>
