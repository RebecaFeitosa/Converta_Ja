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
  
  
  /* SCRIPT CONVERSOR IMC */
  
  let valorDigitado = document.querySelector("#altura");
  let valorDigitado1 = document.querySelector("#peso");
  let aviso = document.querySelector("#aviso");
  
  
  
  let btnConverter = document.querySelector("#btnConverter");
  let btnLimpar = document.querySelector("#btnLimpar");
  
  /* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */
  function bloquearBotao() {
    if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null || valorDigitado1.value == 0 || valorDigitado1 == '' || valorDigitado1 == null) {
      btnConverter.setAttribute("disabled", "disabled");
      btnConverter.style.background = "#ccc";
      btnConverter.style.cursor = "not-allowed";
    }
  }
  
  // REATIVAR BOTAO
  function ativarBotao() {
    if (valorDigitado.value > 0 || valorDigitado1.value > 0) {
      btnConverter.removeAttribute("disabled");
      btnConverter.style.background = "#32CD32";
      btnConverter.style.cursor = "pointer";
    }
    else {
      console.log("Não ativou");
    }
  }
  
  // funcao limpar
  btnLimpar.addEventListener("click", function () {
    valorDigitado.focus();
    valorDigitado1.focus();
    valorDigitado.value = "";
    valorDigitado1.value = "";
    aviso.textContent = "Digite seu peso e altura e descubra seu IMC";
    console.log(valorDigitado);
  })
  
  
  //capiturar o evento de submit do formulario.
  const form = document.querySelector("#formulario");
  form.addEventListener("submit", function (event) {
  
    event.preventDefault(); // parar enfio do formulario
    const inputPeso = event.target.querySelector("#peso");
    const inputAltura = event.target.querySelector("#altura");
  
    const peso = Number(inputPeso.value); //pegando o valor do input
    const altura = Number(inputAltura.value);
  
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
  
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  
    setresult(msg, true);
  
  });
  
  function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade de grau 1', 'Obesidade de grau 2', 'Obesidade de grau 3']; // array
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  
  }
  
  function getImc(peso, altura) { // funcao para conversao, forumula
    const imc = peso / altura **2;
    return imc.toFixed(2); //casas decimais
  }
  
  function criarP() { //  funcao  para  criar um paragrafo 
    const p = document.createElement('p'); // criando um elemento 
    return p;
  }
  
  function setresult(msg) {
    const result = document.querySelector("#aviso");
    result.innerHTML = ''; // limpar o html, deixa a div em braco
  
    const p = criarP();
  
    p.innerHTML = msg;
    result.appendChild(p);
  }