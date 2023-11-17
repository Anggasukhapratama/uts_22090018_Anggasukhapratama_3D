// Bagian pertama menangani interaksi dengan menu navigasi pada layar berukuran kecil, 
// dan bagian kedua mengandung fungsi submitForm() yang mencetak nilai dari beberapa elemen formulir ke konsol.


document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.createElement('div');
    closeBtn.id = 'close-btn';
    closeBtn.classList.add('fas', 'fa-times');
    const navbar = document.querySelector('.header .navbar');
    let isMenuOpen = false;

    menuBtn.insertAdjacentElement('afterend', closeBtn);
    menuBtn.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            if (isMenuOpen) {
                navbar.classList.remove('active');
                menuBtn.style.display = 'block';
                closeBtn.style.display = 'none';
            } else {
                navbar.classList.add('active');
                menuBtn.style.display = 'none';
                closeBtn.style.display = 'block';
            }
            isMenuOpen = !isMenuOpen;
        }
    });

    closeBtn.addEventListener('click', function() {
        navbar.classList.remove('active');
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'block';
        isMenuOpen = !isMenuOpen;
    });
});



// bagian ke 2
// dan bagian kedua mengandung fungsi submitForm() yang mencetak nilai dari beberapa elemen formulir ke konsol.
function submitForm() {

    var name = document.getElementById('nameInput').value;
    var number = document.getElementById('numberInput').value;
    var email = document.getElementById('emailInput').value;
    var date = document.getElementById('dateInput').value;

 
    console.log("Name: " + name);
    console.log("Number: " + number);
    console.log("Email: " + email);
    console.log("Date: " + date);
  }
