// script.js — cadastro + armazenamento local

const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const cep = document.getElementById("cep");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");
const resultado = document.getElementById("resultado");
let cepValido = false;

// Carrega do localStorage (ou cria array vazio)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Funções de validação
function validarNome(valor) {
  return valor.trim().length > 2;
}

function validarEmail(valor) {
  return valor.includes("@") && valor.includes(".");
}

function validarIdade(valor) {
  return Number.isInteger(valor) && valor >= 18 && valor <= 120;
}

async function buscarCep(valor) {

    const cep = await fetch(`https://viacep.com.br/ws/${valor}/json/`);
    const objCep = await cep.json();
    return objCep

}

function validarCep(valor, input) {
  if (valor.length === 8) {
    buscarCep(valor).then((resultado) => {
      if (resultado.erro) {
        marcarCampo(input, false);
        cepValido = false;
        estado.value = '';
        cidade.value = '';
        bairro.value = '';
      } else {
        marcarCampo(input, true);
        cepValido = true;
        estado.value = resultado.uf;
        cidade.value = resultado.localidade;
        bairro.value = resultado.bairro;
      }
      
    });
  } else {
    marcarCampo(input, false);
    cepValido = false;
  }
}

// Funções auxiliares
function mostrarResultado(html, tipo = "info") {
  resultado.innerHTML = `<div class="alert alert-${tipo} mt-3">${html}</div>`;
}

function marcarCampo(inputEl, valido) {
  inputEl.classList.remove("is-valid", "is-invalid");
  if (valido) inputEl.classList.add("is-valid");
  else inputEl.classList.add("is-invalid");
}

// Função para adicionar usuário e salvar no localStorage
function adicionarUsuario(n, e, i, cep, est, cid, bai) {
  usuarios.push({ nome: n, email: e, idade: i, cep: cep, estado: est, cidade: cid, bairro: bai });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Validação em tempo real
if (nome && email && idade) {
  nome.addEventListener("input", () => marcarCampo(nome, validarNome(nome.value)));
  email.addEventListener("input", () => marcarCampo(email, validarEmail(email.value)));
  idade.addEventListener("input", () => marcarCampo(idade, validarIdade(Number(idade.value))));
  cep.addEventListener("input", () => validarCep(cep.value, cep));
}


// Cadastro
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeValido = validarNome(nome.value);
    const emailValido = validarEmail(email.value);
    const idadeValida = validarIdade(Number(idade.value));

    marcarCampo(nome, nomeValido);
    marcarCampo(email, emailValido);
    marcarCampo(idade, idadeValida);
    marcarCampo(cep, cepValido);

    if (nomeValido && emailValido && idadeValida && cepValido) {
      adicionarUsuario(nome.value, email.value, Number(idade.value), cep.value.replace(/\D/g, ""), estado.value, cidade.value, bairro.value);
      mostrarResultado("Usuário cadastrado com sucesso!", "success");
      form.reset();
      [nome, email, idade, cep].forEach(i => i.classList.remove("is-valid", "is-invalid"));
      cepValido = false;
    } else {
      mostrarResultado("Há erros no formulário. Verifique os campos.", "danger");
    }
  });
}



