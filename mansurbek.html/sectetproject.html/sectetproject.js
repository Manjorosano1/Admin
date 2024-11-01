// O'quvchini qo'shish va ro'yxatini saqlash
document.getElementById('studentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const year = document.getElementById('year').value;
    const phone = document.getElementById('phone').value;

    const student = {
        name,
        surname,
        age,
        year,
        phone,
        keldi: false,
        kelmadi: false
    };

    const savedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    savedStudents.push(student);
    localStorage.setItem('students', JSON.stringify(savedStudents));

    this.reset();
    updateStudentTable(); // O'quvchilar jadvalini yangilash
});

function updateStudentTable() {
    const savedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = ''; // Jadvalni tozalash

    savedStudents.forEach((student, index) => {
        const row = document.createElement('tr');
        row.className = student.keldi ? 'present' : student.kelmadi ? 'absent' : ''; // Qator rangini o'rnatish
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.age}</td>
            <td>${student.year}</td>
            <td>${student.phone}</td>
            <td><button class="button-85" onclick="markPresent(${index})">Keldi</button></td>
            <td><button class="button-85" onclick="markAbsent(${index})">Kelmadi</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function markPresent(index) {
    const savedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    savedStudents[index].keldi = true;
    savedStudents[index].kelmadi = false; 
    localStorage.setItem('students', JSON.stringify(savedStudents));
    updateStudentTable(); 
}

function markAbsent(index) {
    const savedStudents = JSON.parse(localStorage.getItem('students') || '[]');
    savedStudents[index].kelmadi = true;
    savedStudents[index].keldi = false; 
    localStorage.setItem('students', JSON.stringify(savedStudents));
    updateStudentTable(); 
}

document.addEventListener('DOMContentLoaded', updateStudentTable);
