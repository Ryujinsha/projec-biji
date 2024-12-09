let slideIndex = 0;

        function showSlides() {
            const slides = document.getElementsByClassName("slide");
            const sliderContainer = document.querySelector(".slider-container");
            const offset = -slideIndex * 100;
            sliderContainer.style.transform = `translateX(${offset}%)`;

            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            setTimeout(showSlides, 3000);
        }

        function plusSlides(n) {
            slideIndex += n;
            const slides = document.getElementsByClassName("slide");
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
            showSlidesManually();
        }

        function showSlidesManually() {
            const slides = document.getElementsByClassName("slide");
            const sliderContainer = document.querySelector(".slider-container");
            const offset = -slideIndex * 100;
            sliderContainer.style.transform = `translateX(${offset}%)`;
        }

        showSlides();