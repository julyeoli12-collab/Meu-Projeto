const projetos = [
  {
    nome: "Flow Carga",
    descricao: "Esse sistema permitir que o usuário compartilhe sua localização em tempo real com contatos selecionados, em situações de segurança, trajeto rotineiro ou emergência",
    link: "#"
  },
  {
    nome: "Comecio livre",
    descricao: "Descrição do projeto Um sistema voltado para que revendedoras multimarcas em produtos para a beleza em geral coloquem seus produtos exportos na intenet assim criando um ecosistema de venda totalmente online",
    link: "#"
  },
  {
    nome: "Projeto 3",
    descricao: "Descrição do projeto 3",
    link: "#"
  }
];

const container = document.getElementById("lista_projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}">Ver projeto</a>
  `;

  container.appendChild(card);
});

const data = new Date();
const dataFormatada = data.toLocaleDateString('pt-BR');

document.getElementById("data-atual").textContent = "© 2026 - Meu Portfólio " + dataFormatada;