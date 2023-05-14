document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk submit secara default

    // Reset pesan error
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }

    // Validasi Nama
    var nameInput = document.getElementById('name');
    var nameError = document.querySelector('.name .error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Nama harus diisi';
    }

    // Validasi Email
    var emailInput = document.getElementById('email');
    var emailError = document.querySelector('.email .error');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email harus diisi';
    } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Email tidak valid';
    }

    // Validasi Subject
    var subjectInput = document.getElementById('subject');
    var subjectError = document.querySelector('.subject .error');
    if (subjectInput.value.trim() === '') {
        subjectError.textContent = 'Subject harus diisi';
    }

    // Validasi Gender
    var genderInputs = document.getElementsByName('gender');
    var genderError = document.querySelector('.gender .error');
    var selectedGender = false;
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selectedGender = true;
            break;
        }
    }
    if (!selectedGender) {
        genderError.textContent = 'Jenis Kelamin harus dipilih';
    }

    // Cek apakah semua field telah diisi dengan benar
    var isValid = true;
    if (
        nameInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        !emailPattern.test(emailInput.value.trim()) ||
        subjectInput.value.trim() === '' ||
        !selectedGender
    ) {
        isValid = false;
    }

    // Jika tidak ada error, tampilkan pesan sukses
    if (isValid) {
        var successMessage = document.createElement('span');
        successMessage.textContent = 'Form berhasil disubmit';
        successMessage.classList.add('success');
        document.getElementById('form').appendChild(successMessage);
    }
});

