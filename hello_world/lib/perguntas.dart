class Pergunta {
  final String textoDaPergunta;
  final List<String> alternativas;
  final indiceAlternativaCorreta;

  int indiceAlternativaErrada = -1;

  Pergunta(
      this.textoDaPergunta, this.alternativas, this.indiceAlternativaCorreta);
}

List<Pergunta> listaDePerguntas = [
  Pergunta(
    "Qual o seu Nome?",
    [
      "Ivan",
      "André",
      "Mauro",
    ],
    0,
  ),
  Pergunta(
    "Qual a sua idade?",
    [
      "22",
      "32",
      "35",
    ],
    1,
  ),
];
