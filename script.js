// Smooth scrolling untuk navigasi dengan efek lebih menarik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            duration: 1000 // Menambahkan durasi untuk efek lebih menarik
        });
    });
});

// Animasi hover untuk elemen yang bisa diklik dengan efek lebih menarik
document.querySelectorAll('.clickable').forEach(element => {
    element.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)'; // Meningkatkan skala untuk efek lebih menarik
        this.style.transition = 'transform 0.5s ease'; // Menambahkan durasi untuk efek lebih menarik
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)'; // Menambahkan bayangan untuk efek lebih menarik
    });

    element.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none'; // Menghapus bayangan saat tidak dalam kondisi hover
    });
});

// Form submission handler dengan efek lebih menarik
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const suggestion = document.getElementById('suggestion').value;
    
    // Validasi form sederhana dengan efek lebih menarik
    if (name.trim() === '' || suggestion.trim() === '') {
        alert('Mohon isi semua field yang diperlukan');
        return;
    }
    
    // Simulasi pengiriman data dengan efek lebih menarik
    alert(`Terima kasih ${name} atas saran dan masukannya!`);
    this.reset();
    // Menambahkan efek loading sementara untuk simulasi pengiriman data
    const loading = document.createElement('div');
    loading.innerHTML = 'Mengirimkan...';
    loading.style.position = 'fixed';
    loading.style.top = '50%';
    loading.style.left = '50%';
    loading.style.transform = 'translate(-50%, -50%)';
    loading.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    loading.style.color = 'white';
    loading.style.padding = '20px';
    loading.style.borderRadius = '20px';
    loading.style.zIndex = '1000';
    document.body.appendChild(loading);
    setTimeout(() => {
        document.body.removeChild(loading);
    }, 1000); // Menghapus efek loading setelah 1 detik
});

// Animasi scroll reveal untuk section dengan efek lebih menarik
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            // Menambahkan efek fade-in untuk section
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
});

// Inisialisasi style untuk animasi section dengan efek lebih menarik
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    // Menambahkan efek fade-in untuk section saat pertama kali ditampilkan
    setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 1000); // Menunda efek fade-in untuk 1 detik
});
