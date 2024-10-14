document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('days-container');
    const timeContainer = document.getElementById('time-container');
    const timesDiv = document.getElementById('times');
    const reservationForm = document.getElementById('reservationForm');
    const patioSelect = document.getElementById('patio');

    // Generar los días del mes
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total de días en el mes
    for (let i = 1; i <= daysInMonth; i++) {
        const dayBox = document.createElement('div');
        dayBox.classList.add('day-box');
        dayBox.textContent = i;
        dayBox.dataset.date = `${year}-${month + 1}-${i < 10 ? '0' + i : i}`;
        
        dayBox.addEventListener('click', () => {
            document.querySelectorAll('.day-box').forEach(box => box.classList.remove('selected'));
            dayBox.classList.add('selected');
            loadAvailableTimes(dayBox.dataset.date); // Cargar horas disponibles para el día seleccionado
        });
        
        daysContainer.appendChild(dayBox);
    }

    // Cargar horas disponibles para el día seleccionado
    function loadAvailableTimes(selectedDay) {
        timeContainer.style.display = 'block';
        timesDiv.innerHTML = ''; // Limpiar horas anteriores

        // Simulación de horas disponibles (puedes reemplazar esto con tu lógica para obtener horas disponibles)
        const availableTimes = ['10:00', '11:00', '12:00', '13:00', '14:00'];
        availableTimes.forEach(time => {
            const timeButton = document.createElement('button');
            timeButton.textContent = time;
            timeButton.addEventListener('click', () => {
                // Manejar la selección de hora
                timesDiv.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
                timeButton.classList.add('selected');
            });
            timesDiv.appendChild(timeButton);
        });
    }

    // Manejar el envío del formulario
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        alert('Reserva realizada!');
    });
    tippy('[title]', {
        placement: 'top',
        arrow: true,
    });
});
