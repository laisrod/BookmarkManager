
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.header__list');
const menuClose = document.querySelector('.menu-close');

const section = document.querySelector('.section');

console.log('SECTION', section);

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