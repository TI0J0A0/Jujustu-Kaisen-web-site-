document.addEventListener('DOMContentLoaded', function () {
    // Inicializa as animações AOS (Animate On Scroll)
    AOS.init();
  
    // Adiciona evento de rolagem suave para os links internos
    addSmoothScrolling();
  
    // Adiciona efeito parallax aos elementos com a classe 'parallax'
    addParallaxEffect();
  });
  
  function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          scrollToTarget(targetElement);
        }
      });
    });
  }
  
  function scrollToTarget(targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Ajuste conforme necessário
      behavior: 'smooth'
    });
  }
  
  function addParallaxEffect() {
    document.addEventListener('scroll', function () {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const distance = window.scrollY;
        element.style.transform = `translateY(${distance * 0.5}px)`; // Ajuste conforme necessário
      });
    });
  }
  