import { StaticImageData } from "next/image";

import image1 from "@/public/ps.jpeg";
import image2 from "@/public/ps.jpeg";
import image3 from "@/public/ps.jpeg";

export interface Service {
  id: number;
  serviceTitle: string;
  serviceSubtitle: string;
  serviceDescription: string;
  serviceCardImage: StaticImageData;
  servicePopupImage: StaticImageData;
}

export const servicesList: Service[] = [
  {
    id: 0,
    serviceTitle: "Landing Pages",
    serviceSubtitle: "A imagem da sua empresa na internet",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Transforme cliques em clientes com uma landing page profissional! Uma página focada, estratégica e feita sob medida para converter visitantes em resultados reais — seja captando leads, vendendo produtos ou promovendo serviços. Mais que um cartão de visitas online, é sua vitrine no mundo digital.",
    serviceCardImage: image1,
    servicePopupImage: image1,
  },
  {
    id: 1,
    serviceTitle: "Websites",
    serviceSubtitle: "Sua empresa na palma da mão",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Tem uma ideia de site? A gente transforma em realidade! Você traz a visão, nós cuidamos do design, desenvolvimento e funcionalidade para entregar uma solução completa, sob medida e pronta para impressionar. Do esboço à entrega, seu projeto nas mãos certas.",
    serviceCardImage: image2,
    servicePopupImage: image2,
  },
  {
    id: 2,
    serviceTitle: "Sistemas",
    serviceSubtitle: "Automação e otimização de processos",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Automatize tarefas, reduza custos e ganhe eficiência com um sistema feito sob medida para o seu negócio. Desenvolvemos soluções completas para diferentes áreas, como sistemas de gerenciamento de estoque, caixas para estabelecimentos comerciais, plataformas de atendimento, ERPs personalizados, sistemas de controle financeiro e muito mais. Tenha um software que realmente atende às suas necessidades e impulsiona sua produtividade.",
    serviceCardImage: image3,
    servicePopupImage: image3,
  },
  {
    id: 3,
    serviceTitle: "Consultorias",
    serviceSubtitle: "Soluções eficientes para seus problemas",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Está com um desafio no seu negócio? A gente resolve. Você traz a situação, nós analisamos o cenário, identificamos os pontos críticos e desenvolvemos a solução ideal para sua necessidade. Com nossa consultoria em computação, cada obstáculo vira uma oportunidade de crescer com estratégia e tecnologia.",
    serviceCardImage: image3,
    servicePopupImage: image3,
  },
  {
    id: 4,
    serviceTitle: "Cursos",
    serviceSubtitle: "Aprenda com quem sabe",
    serviceDescription:
      // eslint-disable-next-line max-len
      "Levamos o conhecimento até você! Com nossos cursos de computação, ensinamos de forma acessível, prática e personalizada. A gente vai até sua escola, instituição ou grupo e leva tecnologia, aprendizado e novas possibilidades direto pra sua realidade.",
    serviceCardImage: image3,
    servicePopupImage: image3,
  },
];
