
const botaoContato = document.getElementById('botao-ola');
const botaoPlay = document.getElementById('botao-play');
const botaoLinkedin = document.getElementById('btn-linkedin');
const botaoGitHub = document.getElementById('btn-github');
const botaoInstagram = document.getElementById('btn-instagram');

function hoverBtn(){
    botaoContato.classList.add('btn-hover');
    botaoPlay.classList.add('btn-hover');
    botaoLinkedin.classList.add('btn-hover');
    botaoGitHub.classList.add('btn-hover');
    botaoInstagram.classList.add('btn-hover');
}

function outBtn(){
    botaoContato.classList.remove('btn-hover');
    botaoPlay.classList.remove('btn-hover');
    botaoLinkedin.classList.remove('btn-hover');
    botaoGitHub.classList.remove('btn-hover');
    botaoInstagram.classList.remove('btn-hover');
    
    botaoContato.classList.add('btn-out');
    botaoPlay.classList.add('btn-out');
    botaoLinkedin.classList.add('btn-out');
    botaoGitHub.classList.add('btn-out');
    botaoInstagram.classList.add('btn-out');
}

const elementosScroll = document.querySelectorAll('.hidden');
const scrollLerMais = document.querySelectorAll('.hidden-ler');
const scrollInverso = document.querySelectorAll('.hidden-ler-inverso');
const scrollHidden2 = document.querySelectorAll('.hidden-2');

const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
});

elementosScroll.forEach((elemento) => myObserver.observe(elemento));
scrollLerMais.forEach((ler) => myObserver.observe(ler));
scrollInverso.forEach((inverso) => myObserver.observe(inverso));
scrollHidden2.forEach((hidden2) => myObserver.observe(hidden2));

const observerMenu = new IntersectionObserver((entriesMenu) => {
    entriesMenu.forEach((entryMenu) => {
        if (entryMenu.isIntersecting){
            entryMenu.target.classList.add('show-mobile')
        } else {
            entryMenu.target.classList.remove('show-mobile')
        }
    })
});

const menuElementos = document.querySelectorAll('.hidden-menu');
menuElementos.forEach((elementoMenu) => observerMenu.observe(elementoMenu));

const menuMobile = document.getElementById('menu-mobile');
const imgAbrirMenu = document.getElementById('simbolo-menu-mobile');
const imgFecharMenu = document.getElementById('simbolo-fechar-menu');
const menu = document.getElementById('menu-cabecalho');

document.addEventListener('scroll', function () {
    if (window.scrollY > 50) { 
        menu.classList.add('scroll');
    } else {
        menu.classList.remove('scroll');
    }

    if (window.matchMedia("(max-width: 920px)").matches){
        menuMobile.style.display = 'none';
        imgAbrirMenu.style.display = 'block';
        imgFecharMenu.style.display = 'none';
    }
});

function toggleMenu() {
    if (window.matchMedia("(max-width: 920px)").matches) {
        imgAbrirMenu.style.display = 'block';

    } else {
        menu.style.display = "flex";
        imgAbrirMenu.style.display = 'none';
        menuMobile.style.display = 'none';
        imgFecharMenu.style.display = 'none';

    }
}

window.addEventListener('resize', toggleMenu);
toggleMenu();

function abrirMenuMobile() {
    imgAbrirMenu.style.display = 'none';
    menuMobile.style.display = 'block';
    imgFecharMenu.style.display = 'block';
}

function fecharMenuMobile() {
    imgFecharMenu.style.display = 'none';
    menuMobile.style.display = 'none';
    imgAbrirMenu.style.display = 'block';
}

function redirecionamento(){
    menuMobile.style.display = 'none';
    imgAbrirMenu.style.display = 'block';
    imgFecharMenu.style.display = 'none';
}