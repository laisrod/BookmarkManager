const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.header__list');
const menuClose = document.querySelector('.menu-close');

function animateHeroSection() {
  const textSection = document.querySelector('.section__text.col-lg-6.pe-lg-5.text-start');
  const imageSection = document.querySelector('.section__image.col-lg-6.position-relative.d-flex.justify-content-end.align-items-end');
  const sectionContainer = document.querySelector('#section-1');
  
  sectionContainer.style.overflow = 'hidden';
  textSection.style.transform = 'translateX(-100vw)';
  textSection.style.opacity = '0';
  textSection.style.transition = 'none';
  
  imageSection.style.transform = 'translateX(100vw)';
  imageSection.style.opacity = '0';
  imageSection.style.transition = 'none';
  
  setTimeout(() => {
    textSection.style.transition = 'all 1s ease-out';
    imageSection.style.transition = 'all 1s ease-out';
    
    setTimeout(() => {
      textSection.style.transform = 'translateX(0)';
      textSection.style.opacity = '1';
    }, 200);
    
    setTimeout(() => {
      imageSection.style.transform = 'translateX(0)';
      imageSection.style.opacity = '1';
    }, 400);
    
  }, 50);
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateHeroSection();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.0
  });
  
  const heroSection = document.querySelector('#section-1');
  if (heroSection) {
    observer.observe(heroSection);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
});

menuToggle.addEventListener('click', function() {
  menuList.classList.toggle('open');
  menuToggle.classList.add('hide');
  menuClose.classList.add('show');
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
});

menuClose.addEventListener('click', function() {
  menuList.classList.remove('open');
  menuToggle.classList.remove('hide');
  menuClose.classList.remove('show');
  menuToggle.setAttribute('aria-expanded', false);
});

document.querySelectorAll('.features-container-list a').forEach(link => {
  link.addEventListener('click', function(e) {
      document.querySelectorAll('.features-container-list li').forEach(li => li.classList.remove('active'));
      this.parentElement.classList.add('active');
      const tab = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
      document.querySelector(`#${tab}`).style.display = 'block';
  });
});

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}