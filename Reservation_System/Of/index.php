<?php include 'config/db.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Reservas</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script src="../assets/js/script.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

</head>
<body>
    <h1>Reserva tu Patio</h1>
    <form id="reservation-form">
        <label for="patio-select">Selecciona un patio:</label>
        <select id="patio-select" required>
            <option value="">Seleccionar...</option>
            <?php
            $stmt = $conn->query("SELECT * FROM patios");
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo "<option value='{$row['id']}'>{$row['nombre']}</option>";
            }
            ?>
        </select>

        <div id="availability-container"></div>

        <label for="user_name">Nombre:</label>
        <input type="text" id="user_name" name="user_name" required>

        <label for="user_email">Correo:</label>
        <input type="email" id="user_email" name="user_email" required>

        <label for="user_phone">Teléfono:</label>
        <input type="tel" id="user_phone" name="user_phone" required>

        <button type="submit" title="Reservar este patio">
            <i class="fas fa-calendar-check"></i> Reservar
        </button>
        <button type="button" title="Cancelar esta reserva">
            <i class="fas fa-times-circle"></i> Cancelar
        </button>
    </form>
    <div id="message"></div>
</body>
</html>
