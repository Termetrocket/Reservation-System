<?php include '../config/db.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Reservas</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <script src="../assets/js/script.js" defer></script>
</head>
<body>
    <h1>Reserva tu Patio</h1>
    <form id="reservationForm">
        <label for="patio">Selecciona un Patio:</label>
        <select id="patio" name="patio" required>
            <option value="">Seleccionar...</option>
            <?php
            $patios = $conn->query("SELECT * FROM patios")->fetchAll();
            foreach ($patios as $patio) {
                echo "<option value='{$patio['id']}'>{$patio['nombre']}</option>";
            }
            ?>
        </select>

        <h2>Selecciona un Día</h2>
        <div id="days-container" class="grid-container"></div>

        <div id="time-container" style="display:none;">
            <h2>Selecciona una Hora</h2>
            <div id="times"></div>
        </div>

        <input type="text" name="user_name" placeholder="Nombre" required>
        <input type="email" name="user_email" placeholder="Correo" required>
        <input type="tel" name="user_phone" placeholder="Teléfono" required>
        <input type="submit" value="Reservar">
    </form>

    <div id="message"></div>
</body>
</html>
