function atividade5() {
  let livros = ["Harry Potter", "Senhor dos Anéis", "Nárnia"];

  let posicao = livros.indexOf("Senhor dos Anéis");

  console.log(         	
    posicao !== -1
      ? `O livro está na posição ${posicao}`
      : `Livro não encontrado.`,
  );
}
