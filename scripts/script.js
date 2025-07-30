const menuToggle = document.querySelector('.menu-toggle'); // procure no site o elemento com a classe menu-toggle, encontra o botao hamburguer
const menuList = document.querySelector('.header__list'); // procure no site o elemento com a classe header__list, Encontra a lista de links do menu
const menuClose = document.querySelector('.menu-close'); // procure no site o elemento com a classe menu-close, Encontra o botão X para fechar

const section = document.querySelector('.section');

console.log('SECTION', section); //mostra a seção no console, É como um teste para ver se o JavaScript encontrou os elementos corretos.

// Função do Menu Mobile
menuToggle.addEventListener('click', function() { // Quando alguém clicar no botão hambúrguer, execute esta função"
  menuList.classList.toggle('open');
  menuToggle.classList.add('hide');
  menuClose.classList.add('show');
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
});

//hamburguer
menuClose.addEventListener('click', function() {
  menuList.classList.remove('open'); //mostra o menu
  menuToggle.classList.remove('hide'); //esconde o hamburguer
  menuClose.classList.remove('show'); //mostra o x
  menuToggle.setAttribute('aria-expanded', false);
});

// para tabs
document.querySelectorAll('.features-container-list a').forEach(link => {
  link.addEventListener('click', function(e) {
    //remove destaque de todas as abas
      document.querySelectorAll('.features-container-list li').forEach(li => li.classList.remove('active'));
      //destaca a aba clicada
      this.parentElement.classList.add('active');
      //mostra o conteudo da aba clicada
      const tab = this.getAttribute('data-tab');
      //esconde todos os conteudos
      document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
      //mostra o conteudo da aba clicada
      document.querySelector(`#${tab}`).style.display = 'block';
  });

});