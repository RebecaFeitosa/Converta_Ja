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
  
  
  
  /* SCRIPT CONVERSOR DE TEMPERATURA */
  
  let valorDigitado = document.querySelector("#numDigitado");
  let Horas_Minutos = document.getElementsByName("selectTemp");
  let aviso = document.querySelector("#aviso");
  
  
  let btnConverter = document.querySelector("#btnConverter");
  let btnLimpar = document.querySelector("#btnLimpar");
  
  
  let selectTemp = "";
  let Converte = "";
  let numDigitado = 0.00;
  
  
  
  function mensagemFormatada(Converte) {
    isNaN(numDigitado) ? numDigitado = 0 : "";
    console.log(" A temperatura convertida é " + Converte);
    aviso.textContent = "O valor digitado " + numDigitado + " " + selectTemp + " convertido vira: " + Converte;
  }
  