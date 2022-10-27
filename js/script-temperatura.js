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
  /* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */

  function bloquearBotao() {
  if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null || numDigitado.value == 0) {
    btnConverter.setAttribute("disabled", "disabled");
    btnConverter.style.background = "#ccc";
    btnConverter.style.cursor = "not-allowed";
    console.log("botao bloqueado")
    aviso.textContent = "Escolha uma conversão!";
  }
}
// REATIVAR BOTAO
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

  numDigitado = parseFloat(valorDigitado.value);


  for (let i = 0; i < Horas_Minutos.length; i++) {
    if (Horas_Minutos[i].checked) {
      selectTemp = Horas_Minutos[i].value;
      console.log(selectTemp); //
    }
  }

  switch (selectTemp) {

    case "Fahrenheit":
      Converte = (numDigitado - 32) / 1.8;
      mensagemFormatada(parseFloat(Converte.toFixed(2)) + "°C");
      break;

    case "Celsius":
      Converte = (numDigitado * 9 / 5) + 32;  // tranforma Celsius em Fahrenheit  ex: (20 °C × 9/5) + 32 = 68 °F
      mensagemFormatada(parseFloat(Converte.toFixed(2)) + "°F");
      break;


    default:
      aviso.textContent = "Escolha uma conversão!";

      isNaN(Converte) ? Converte = 0 : "";
  }
});

btnLimpar.addEventListener("click", function () {
  valorDigitado.focus()
  valorDigitado.value = "";
  aviso.textContent = "Digite o valor, escolha a temperatura e ConvertaJá";
  Horas_Minutos[0].checked = false;
  Horas_Minutos[1].checked = false;

});
