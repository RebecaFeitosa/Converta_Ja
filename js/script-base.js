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
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
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



  /*  CONVERSOR DE BASE */


let valorDigitado = document.querySelector("#decimal");

let numeroSelecionado = document.getElementsByName("basesNum");

let aviso = document.querySelector("#aviso");


let btnConverter = document.querySelector("#btnConverter");
let btnLimpar = document.querySelector("#btnLimpar");


let decimal = 0;
let basesNum = "";
let baseConvert = 0.00;


function mensagemFormatada(baseConvert) {
  isNaN(decimal) ? decimal = 0 : "";
  console.log("Base Convertida " + baseConvert);
  aviso.textContent = decimal + " convertido  em " + baseConvert;
}

function bloquearBotao() {
  if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null || decimal == null) {
    btnConverter.setAttribute("disabled", "disabled");
    btnConverter.style.background = "#ccc";
    btnConverter.style.cursor = "not-allowed";
  }
}

function ativarBotao() {
  if (valorDigitado.value > 0) {
    btnConverter.removeAttribute("disabled");
    btnConverter.style.background = "#32CD32";
    btnConverter.style.cursor = "pointer";
  } else {
    console.log("Não ativou");
  }
}


btnConverter.addEventListener('click', function () {

  decimal = parseInt(valorDigitado.value);

  console.log('Escolhe a moeda estrangeira');
  for (let i = 0; i < numeroSelecionado.length; i++) {
    if (numeroSelecionado[i].checked) {
      basesNum = numeroSelecionado[i].value;
      console.log(basesNum);
    }
  }

  switch (basesNum) {

    case "binario":
      baseConvert = decimal.toString(2);
      mensagemFormatada("binario: " + baseConvert);
      break;

    case "octal":
      baseConvert = decimal.toString(8);
      mensagemFormatada("Octal: " + baseConvert);
      break;

    case "hexadecimal":
      baseConvert = decimal.toString(16); //Hexadecimal	0	1	2	3	4	5	6	7	8	9	A	B	C	D	E	F	
      mensagemFormatada("Hexadecimal: " + baseConvert.toUpperCase());
      break;


    default:
      aviso.textContent = "Escolha uma base númerica para conversão!";

      isNaN(baseConvert) ? baseConvert = 0 : "";
  }

})

btnLimpar.addEventListener("click", function () {
  valorDigitado.focus();
  valorDigitado.value = "";
  aviso.textContent = "Digite o valor, escolha uma base e ConvertaJá";
  numeroSelecionado[0].checked = false;
  numeroSelecionado[1].checked = false;
  numeroSelecionado[2].checked = false;
})