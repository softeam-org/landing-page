interface Testimonial {
  quote: string;
  name: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      // eslint-disable-next-line max-len
      "A abertura da SofTeam para o terceiro setor com um preço bem acessível é muito importante para que as associações consigam mostrar seu trabalho.  Ter um site dá robustez e segurança a quem não conhece a associação. \nE por fim, nesse mundo tão contaminado pela super valorização do dinheiro é um alento ver jovens já se posicionando com um olhar mais sistêmico e preocupado com sua contribuição para um mundo melhor.",
    name: "Sandra Kiener - Instituto Comunitário de Sergipe",
  },
  {
    quote:
      // eslint-disable-next-line max-len
      "Uma revista científica é avaliada também pela sua estruturação e esta tem o apoio técnico da Softeam -- este quesito, somado aos demais científicos, permitiu com que a revista BGE esteja atualmente sendo indexada pelo Ibict – Instituto Brasileiro de Informação em Ciência e Tecnologia",
    name: "Celso Morato - Revista Biologia Geral e Experimental",
  },
];
