const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

    let scroll = window.scrollY;

    let scale = Math.max(.72,1-scroll/1800);

    heroImage.style.transform = `
        translateY(${-scroll*.25}px)
        scale(${scale})
    `;

});

const section = document.querySelector(".cards-section");

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            section.classList.add("show");

            cards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                },index*180);

            });

        }

    });

},{threshold:.25});

observer.observe(section);