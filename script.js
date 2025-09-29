        // Sakura petals animation
        function createSakura() {
            const container = document.getElementById('sakura-container');
            const petalCount = 30;
            
            for (let i = 0; i < petalCount; i++) {
                const petal = document.createElement('div');
                petal.classList.add('sakura');
                
                // Random position and animation properties
                const left = Math.random() * 100;
                const animationDuration = 5 + Math.random() * 10;
                const animationDelay = Math.random() * 5;
                const size = 10 + Math.random() * 10;
                
                petal.style.left = `${left}%`;
                petal.style.animationDuration = `${animationDuration}s`;
                petal.style.animationDelay = `${animationDelay}s`;
                petal.style.width = `${size}px`;
                petal.style.height = `${size}px`;
                
                container.appendChild(petal);
            }
        }
        
        // Scroll reveal animation
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }
        
        // Header scroll effect
        function handleScroll() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            revealOnScroll();
        }
        
        // Testimonial slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.testimonial');
        const slider = document.getElementById('testimonialSlider');
        
        function showSlide(index) {
            if (index < 0) {
                currentSlide = slides.length - 1;
            } else if (index >= slides.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }
            
            const translateValue = -currentSlide * 100;
            slider.style.transform = `translateX(${translateValue}%)`;
        }
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            createSakura();
            revealOnScroll();
            
            // Set up testimonial slider controls
            document.getElementById('prevBtn').addEventListener('click', () => {
                showSlide(currentSlide - 1);
            });
            
            document.getElementById('nextBtn').addEventListener('click', () => {
                showSlide(currentSlide + 1);
            });
            
            // Auto-advance slider
            setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        });
        
        // Event listeners
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('DOMContentLoaded', () => {
  // Control de pestañas
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Quitar active de todos
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Activar el clickeado y su contenido
      tab.classList.add('active');
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Función para actualizar cuenta regresiva en promociones
  const offerCards = document.querySelectorAll('.offer-card');

  function updateCountdown() {
    const now = new Date().getTime();

    offerCards.forEach(card => {
      const endTimeStr = card.getAttribute('data-endtime');
      const countdownEl = card.querySelector('.countdown');
      const endTime = new Date(endTimeStr).getTime();

      const distance = endTime - now;

      if (distance < 0) {
        countdownEl.textContent = "¡Oferta finalizada!";
        card.classList.add('expired');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.textContent = `Oferta termina en: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
