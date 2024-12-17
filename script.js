function ubahWarna() {

    const colors = {
        'rgb(255, 0, 0)': 'red',
        'rgb(0, 255, 0)': 'green',
        'rgb(0, 0, 255)': 'blue',
        'rgb(255, 255, 0)': 'yellow',
         'rgb(0, 0, 0)': 'black',
          'rgb(255, 255, 255)': 'white'

    };

    var home = document.getElementById("navigation");
    var gaya = window.getComputedStyle(home)

    var namaWarna = colors[gaya.color]

    if(namaWarna == "black"){
        home.style.color = "white"
    } else if (namaWarna == "white"){
        home.style.color = "black";
    }

    console.log(namaWarna)

    var tulisan = document.getElementById("tulisan");
    tulisan.classList.toggle("diklik")
   
}

const navLinks = document.querySelectorAll('.nav-link');

// Tambahkan event listener untuk setiap tautan
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Hapus class 'active' dari semua tautan
    navLinks.forEach(item => item.classList.remove('active'));
    

    // Tambahkan class 'active' ke tautan yang diklik
    this.classList.add('active');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const kotak = document.querySelectorAll('.kotak');
const img = document.querySelectorAll('.tengah');
const konten = document.querySelectorAll('.content');
const tulisan = document.querySelectorAll('.tulisan');
const kontak = document.querySelectorAll('.full');
kotak.forEach((el) => observer.observe(el))
img.forEach((el) => observer.observe(el))
konten.forEach((el) => observer.observe(el))
tulisan.forEach((el) => observer.observe(el))
kontak.forEach((el) => observer.observe(el))
