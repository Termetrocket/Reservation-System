<?php
include '../config/db.php';

$patio_id = $_GET['patio_id'];
$date = $_GET['date'];

$stmt = $conn->prepare("SELECT start_time, end_time FROM available_times WHERE patio_id = ? AND date = ?");
$stmt->execute([$patio_id, $date]);
$times = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($times);
?>
