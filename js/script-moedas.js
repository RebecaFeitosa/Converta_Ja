/* MENU E SIDEBAR */

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
    
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();







/* SCRIPT CONVERSOR MOEDAS */




let valorDigitado = document.querySelector("#valorReal");


let moedaSelecionada = document.getElementsByName("moedaEstrangeira");

let aviso = document.querySelector("#aviso");

// selecionar os botoes
let btnConverter = document.querySelector("#btnConverter");
let btnLimpar = document.querySelector("#btnLimpar");

let valorDolar = 5.18;      // dia 21/09/2022
let valorEuro = 5.12;     // dia 21/09/2022
let valorLibra = 5.87;     // dia 21/09/2022
let valorYuan = 1.36;     // dia 21/09/2022
let valorReal = 0;