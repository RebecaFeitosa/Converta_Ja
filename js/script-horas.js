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


// SCRIPT CONVERSOR DE HORAS

let valorDigitado = document.querySelector("#valorEmTempo")


let Horas_Minutos = document.getElementsByName("tempoSelecionado")

let aviso = document.querySelector("#aviso");


let btnConverter = document.querySelector("#btnConverter")
let btnLimpar = document.querySelector("#btnLimpar")


let TempoSelecionado = ""
let Converte = ""
let valorEmTempo = 0.00


function mensagemFormatada(Converte) {
  isNaN(valorEmTempo) ? valorEmTempo = 0 : ""
  console.log("Moeda Convertida " + Converte)
  aviso.textContent = "O valor digitado foi " + valorEmTempo + " " + TempoSelecionado + " e convertido vira: " + Converte + " "
}

/* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */
function bloquearBotao() {
  if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
    btnConverter.setAttribute("disabled", "disabled")
    btnConverter.style.background = "#ccc"
    btnConverter.style.cursor = "not-allowed"
  }
}

// REATIVAR BOTAO
function ativarBotao() {
  if (valorDigitado.value > 0) {
    btnConverter.removeAttribute("disabled")
    btnConverter.style.background = "#32CD32"
    btnConverter.style.cursor = "pointer"
  } else {
    console.log("Não ativou")
  }
}
