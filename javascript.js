// Função para verificar se o formulário de cadastro deve ser exibido ou ocultado
function verificarExibicaoFormularioCadastro() {
    var formularioLogin = document.getElementById("form_body");
    var formularioCadastro = document.getElementById("form_cadastro");

    // Verificar se há um valor de cookie ou armazenamento local para controlar a exibição
    var exibirCadastro = localStorage.getItem("exibirCadastro");

    if (exibirCadastro === "true") {
      formularioLogin.style.display = "none";
      formularioCadastro.style.display = "block";
    } else {
      formularioLogin.style.display = "block";
      formularioCadastro.style.display = "none";
    }
  }

  // Função para mostrar o formulário de login
  function mostrarFormularioLogin() {
    var formularioLogin = document.getElementById("form_body");
    var formularioCadastro = document.getElementById("form_cadastro");

    formularioLogin.style.display = "block";
    formularioCadastro.style.display = "none";

    // Atualizar o valor de cookie ou armazenamento local
    localStorage.setItem("exibirCadastro", "false");
  }

  // Função para mostrar o formulário de cadastro
  function mostrarFormularioCadastro() {
    var formularioLogin = document.getElementById("form_body");
    var formularioCadastro = document.getElementById("form_cadastro");

    formularioLogin.style.display = "none";
    formularioCadastro.style.display = "block";

    // Atualizar o valor de cookie ou armazenamento local
    localStorage.setItem("exibirCadastro", "true");
  }

  // Adicionar um evento de carregamento da página para verificar e exibir o formulário apropriado
  window.addEventListener("load", function () {
    verificarExibicaoFormularioCadastro();
  });