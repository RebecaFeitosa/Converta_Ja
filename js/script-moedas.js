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

let moedaEstrangeira = "";
let moedaConvertida = 0.00;

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida) {
  isNaN(valorReal) ? valorReal = 0 : "";
  console.log("Moeda Convertida " + moedaConvertida);
  aviso.textContent = "O valor " + (valorReal).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida;
}

/* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */
function bloquearBotao() {
  if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null || valorReal == null) {
    btnConverter.setAttribute("disabled", "disabled");
    btnConverter.style.background = "#ccc";
    btnConverter.style.cursor = "not-allowed";
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

  valorReal = parseFloat(valorDigitado.value);

  console.log('Escolhe a moeda estrangeira');
  for (let i = 0; i < moedaSelecionada.length; i++) {
    if (moedaSelecionada[i].checked) {
      moedaEstrangeira = moedaSelecionada[i].value;
      console.log(moedaEstrangeira);
    }
  }

  switch (moedaEstrangeira) {

    case "Dólar":
      moedaConvertida = valorReal / valorDolar;
      mensagemFormatada(moedaConvertida.toLocaleString("en-US", { style: "currency", currency: "USD" }));
      break

    case "Euro":
      moedaConvertida = valorReal / valorEuro;
      mensagemFormatada(moedaConvertida.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
      break
      case "Libra":
        moedaConvertida = valorReal / valorLibra;
        mensagemFormatada(moedaConvertida.toLocaleString("en-GB", { style: "currency", currency: "GBP" }));
        break
  
      case "Yuan":
        moedaConvertida = valorReal / valorYuan;
        mensagemFormatada(parseFloat(moedaConvertida).toLocaleString("zh-CN", { style: "currency", currency: "CNY" }));
        break
  
      default:
        aviso.textContent = "Escolha uma moeda para conversão!";
  
        isNaN(moedaConvertida) ? moedaConvertida = 0 : "";
    }
  
  })
  
  btnLimpar.addEventListener("click", function () {
    valorDigitado.focus();
    valorDigitado.value = "";
    aviso.textContent = "Digite o valor, escolha a moeda e ConvertaJá";
    moedaSelecionada[0].checked = false;
    moedaSelecionada[1].checked = false;
    moedaSelecionada[2].checked = false;
    moedaSelecionada[3].checked = false;
  })
  
  
