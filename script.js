document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо відправленню форми

    // Отримуємо значення полів
    const fullName = document.getElementById('fullName');
    const faculty = document.getElementById('faculty');
    const birthDate = document.getElementById('birthDate');
    const address = document.getElementById('address');
    const email = document.getElementById('email');

    // Регулярні вирази
    const fullNamePattern = /^[А-ЯІЇЄҐ][а-яіїєґ']{1,}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const facultyPattern = /^[А-ЯІЇЄҐ]{4}$/;
    const birthDatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressPattern = /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ']{1,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/;

    let isValid = true;

    // Функція для перевірки поля
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

    // Перевіряємо кожне поле
    validateField(fullName, fullNamePattern);
    validateField(faculty, facultyPattern);
    validateField(birthDate, birthDatePattern);
    validateField(address, addressPattern);
    validateField(email, emailPattern);

    if (isValid) {
        // Якщо всі поля валідні, виводимо інформацію в окремому вікні
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
