// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// TOGGLE GALLERY

const buttons = document.querySelectorAll(".doc-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const gallery =
        button.nextElementSibling;

        gallery.classList.toggle("active");

        gallery.scrollIntoView({

    behavior: "smooth",

    block: "start"
});

        // UBAH TEXT BUTTON
        if(gallery.classList.contains("active")){

            button.innerText =
            "Tutup Dokumentasi";

        } else {

            button.innerText =
            "Melihat Dokumentasi Proyek";
        }

    });

});