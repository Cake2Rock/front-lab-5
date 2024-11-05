document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName');
    const faculty = document.getElementById('faculty');
    const birthDate = document.getElementById('birthDate');
    const address = document.getElementById('address');
    const email = document.getElementById('email');

    const fullNamePattern = /^[А-ЯІЇЄҐ][а-яіїєґ']{1,}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const facultyPattern = /^[А-ЯІЇЄҐ]{4}$/;
    const birthDatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressPattern = /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ']{1,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;

    let isValid = true;

    function validateField(field, pattern) {
        if (pattern.test(field.value.trim())) {
            field.classList.remove('invalid');
            field.classList.add('valid');
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            isValid = false;
        }
    }

    validateField(fullName, fullNamePattern);
    validateField(faculty, facultyPattern);
    validateField(birthDate, birthDatePattern);
    validateField(address, addressPattern);
    validateField(email, emailPattern);

    if (isValid) {
        const userInfo = `
            ПІБ: ${fullName.value}
            Факультет: ${faculty.value}
            Дата народження: ${birthDate.value}
            Адреса: ${address.value}
            E-mail: ${email.value}
        `;
        alert(userInfo);
    } else {
        alert('Будь ласка, виправте помилки у формі.');
    }
});

const variantNumber = 5;

const table = document.getElementById('myTable');
let cellNumber = 1;

for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = cellNumber;
        cell.id = 'cell-' + cellNumber;

        if (cellNumber === variantNumber) {
            cell.addEventListener('mouseover', function() {
                const randomColor = getRandomColor();
                cell.style.backgroundColor = randomColor;
            });

            cell.addEventListener('click', function() {
                const selectedColor = document.getElementById('colorPicker').value;
                cell.style.backgroundColor = selectedColor;
            });

            cell.addEventListener('dblclick', function() {
                changeOtherCellsColor(cell);
            });
        }

        row.appendChild(cell);
        cellNumber++;
    }
    table.appendChild(row);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let k = 0; k < 6; k++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeOtherCellsColor(selectedCell) {
    const allCells = document.querySelectorAll('#myTable td');
    const selectedCellId = selectedCell.id;

    allCells.forEach(function(cell) {
        if (cell.id !== selectedCellId) {
            cell.style.backgroundColor = getRandomColor();
        }
    });
}
