const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const nextMonthBtn = document.getElementById('next-month');
const prevMonthBtn = document.getElementById('prev-month');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function renderCalendar(month, year) {
    calendarBody.innerHTML = '';
    monthYear.textContent = `${getMonthName(month)} ${year}`;

    const firstDay = (new Date(year, month).getDay() + 6) % 7; // Lunes es el primer día
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Establecemos el rango de fechas permitidas para la reserva
    const minReserveDay = new Date();
    minReserveDay.setHours(0, 0, 0, 0); // Hora del día actual
    const maxReserveDay = new Date(currentYear, currentMonth + 1, 0); // Último día del mes siguiente

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                cell.classList.add('inactive');
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cellDate = new Date(year, month, date);
                
                // Verificamos si la fecha es válida para reserva
                if (cellDate < minReserveDay || cellDate > maxReserveDay) {
                    cell.classList.add('inactive');
                } else {
                    cell.classList.add('active');
                    cell.addEventListener('click', () => {
                        alert(`Reserva para el ${date}/${month + 1}/${year}`);
                    });
                }
                cell.textContent = date;
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }

    // Actualizar el estado de los botones de navegación
    updateButtonStates();
}

function updateButtonStates() {
    const isCurrentMonth = (currentMonth === today.getMonth() && currentYear === today.getFullYear());
    const isNextMonth = (currentMonth === today.getMonth() + 1 && currentYear === today.getFullYear());

    prevMonthBtn.disabled = isCurrentMonth; // Desactiva el botón si está en el mes actual
    nextMonthBtn.disabled = isNextMonth; // Desactiva el botón si está en el siguiente mes
}

function getMonthName(month) {
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return monthNames[month];
}

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateButtonStates(); // Actualiza el estado de los botones de navegación
    renderCalendar(currentMonth, currentYear);
});

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    
    updateButtonStates(); // Actualiza el estado de los botones de navegación
    renderCalendar(currentMonth, currentYear);
});

function initCalendar() {
    prevMonthBtn.disabled = true; // Desactiva el botón al iniciar
    if (currentMonth - today.getMonth() === 1 && currentYear === today.getFullYear()) {
        nextMonthBtn.disabled = true; // Desactiva el botón de avanzar si está en el siguiente mes
    }
    renderCalendar(currentMonth, currentYear);
}

initCalendar();
