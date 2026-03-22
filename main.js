const projetos = [
  {
    nome: "caminhoes",
    descricao: "Descrição do projeto 10000",
    link: "#"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do projeto 2",
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