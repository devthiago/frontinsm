import _ from 'lodash';

const createSpeaker = (name, obj) => {
  let key = name.toLowerCase().replace(" ", "_");
  let spkObj = {
    bio: {
      key: key + "_bio",
      name
    },
    talk: {
      key: key + "_talk",
      duration: 45,
      title: 'Em definição',
      description: '',
      responsible: name
    }
  };

  return _.merge(spkObj, obj);
};

export const IcaroHeimig = createSpeaker("Ícaro Heimig", {
  bio: {
    photo: "https://avatars3.githubusercontent.com/u/3057676?v=3&s=460",
    company: "Ruá Sistemas",
    description: "23 anos, desenvolvedor, estudante de Análise de Sistemas, ciclista nas horas vagas, amante de Pokémons e de passar horas criando web crawlers",
    twitter: "https://twitter.com/icaromh",
    facebook: "https://fb.com/icaromh",
    github: "https://github.com/icaromh"
  },
  talk: {
    title: 'O Phantasmagórico mundo da automação',
    description: 'Automação de testes, automação de navegação, automação de? tudo. Hoje vivemos em um tempo em que queremos que tudo seja automático onde a informação venha até nós e não o contrário. Nessa palestra vai ser mostrado como automatizar a navegação por sites e sistemas que exijam logon, tirar prints de tela e, por quê não testar e ver se está tudo no lugar?'
  }
});

export const GutoFoletto = createSpeaker("Guto Foletto", {
  bio: {
    photo: "https://pbs.twimg.com/profile_images/733442318406156288/btqDkiXL_400x400.jpg",
    company: "UFSM",
    description: "Web developer apaixonado por design e e​studante do Mestrado em Ciência da Computação na ​UFSM. É graduado em Sistemas para Internet com sanduíche em Interactive Media Design na University of East London",
    twitter: "https://twitter.com/gutofoletto",
    linkedin: "https://br.linkedin.com/in/gutofoletto​"
  },
  talk: {
    title: 'Interfaces Naturais na Web',
    description: 'Não há dúvidas de que interfaces naturais definirão como interagimos com máquinas e computadores no futuro. No entanto, algumas dessas tecnologias já fazem parte do nosso presente. Nesta palestra vamos abordar conceitos, utopias, boas práticas e um qual seria um possível futuro para o uso de interfaces naturais. Por fim, vamos conversar sobre o dispositivo Leap Motion e como é possível utilizá-lo no browser através da sua API em JavaScript.'
  }
});

export const MatheusAzzi = createSpeaker("Matheus Azzi", {
  bio: {
    photo: "https://avatars2.githubusercontent.com/u/1292945?v=3&s=460",
    company: "Codeminer 42",
    description: "Front-end developer há mais de 6 anos e graduando em Ciência da Computação, trabalhando com novas tecnologias, desenvolvendo web semântica e otimizada. Atualmente trabalha na Codeminer 42 prestando consultoria para pequenas e grandes empresas",
    github: "https://github.com/matheusazzi",
    website: "http://matheusazzi.com"
  },
  talk: {
    title: 'Teste seu JavaScript',
    description: 'As aplicações web estão cada vez mais dinâmicas. Fazendo com que trabalhamos mais no client-side, deixando nosso código Javascript com bastante responsabilidade. Hoje é comum termos aplicações utilizando Frameworks MV* no front-end, já imaginou aquela app gigante em React sem nenhum teste cobrindo suas funcionalidades? Vamos abordar técnicas de desenvolvimento ágil como TDD e BDD que já são muito comuns no server-side e como aplicar isso ao desenvolvimento Front-End'
  }
});

export const AlmirFilho = createSpeaker("Almir Filho", {
  bio: {
    photo: "https://avatars3.githubusercontent.com/u/532254?v=3&s=460",
    company: "Globo.com",
    description: "Desenvolvedor web na Globo.com, co-criador do projeto Setup e do blog Loop Infinito. Mestre em Ciência da Computação com mais de 10 anos de experiência em web, é especialista em front-end e extremamente interessado em produtividade e café.",
    twitter: "https://twitter.com/almirfilho",
    github: "https://github.com/almirfilho"
  },
  talk: {
    title: 'The Creative Developer',
    description: 'Desenvolvedores, designers. Mitos, dogmas. Preconceitos, limitações. Dedicação, fome. Paixão, medo. Esta não é uma palestra técnica. Esta é uma conversa para nos libertar desta cultura débil em que estamos imersos. Muita gente vai ficar #chateada. '
  }
});

export const MauricioKlein = createSpeaker("Mauricio Klein", {
  bio: {
    photo: "http://mauricioklein.com/assets/images/avatar.jpg",
    company: "Codeminer 42",
    description: "Desenvolvedor com mais de 7 anos de experiência no mercado, atuando em startups, pequenas, médias e grandes empresas. Experiência em Java, Ruby, Javascript, dentre outras. Atuou por um curto período como tester de performance. Atualmente trabalha na Codeminer42, no projeto Pagseguro Sandbox",
    github: "https://github.com/mauricioklein",
    linkedin: "https://br.linkedin.com/in/mauricioklein",
    website: "http://mauricioklein.com/"
  },
  talk: {
    title: 'Em definição',
    description: ''
  }
});

export const MauricioDick = createSpeaker("Mauricio Dick", {
  bio: {
    photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p320x320/11038721_10152578428451315_1134532993199233267_n.jpg?oh=63a973a978ceb2b930d79cf37afce2be&oe=57E50A3C&__gda__=1473608260_9240e2a692c3e6aafc905df097442b75",
    company: "UFSC",
    description: "Doutorando do Programa de Pós-Graduação em Design da UFSC. Foco de estudo na área do design digital: design de publicações digitais, estudo da ergonomia, usabilidade, UX, design de interfaces, entre outros. É mestre em Hipermídia aplicada ao Design",
    facebook: "https://www.facebook.com/mauricio.dick"
  },
  talk: {
    title: 'Em definição',
    description: ''
  }
});

export const JaydsonGomes = createSpeaker("Jaydson Gomes", {
  bio: {
    photo: "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/12670369_10208252912576288_425537566886470411_n.jpg?oh=052ed1d100c3981191b0af5e475d348f&oe=57B2161F",
    company: "Nasc",
    description: "Mais de 12 anos de experiência em desenvolvimento Web. É desenvolvedor de software especializado em JavaScript, linguagem que é uma de suas paixões. É sócio fundador da Nasc, é curador e idealizador da ​BrazilJS Conf, uma das maiores conferências do mundo sobre a linguagem JavaScript. É também criador do ​projeto JSRocks",
    twitter: "https://twitter.com/jaydson",
    github: "https://github.com/jaydson",
    website: "http://jaydson.org/"
  },
  talk: {
    title: 'As 12 regras do cérebro aplicadas ao desenvolvimento de software',
    description: ''
  }
});

export const GuilhermeSerrano = createSpeaker("Guilherme Serrano", {
  bio: {
    photo: "https://pbs.twimg.com/profile_images/737999836616773632/JfNqdQUT_400x400.jpg",
    company: "Eu Compraria",
    description: "Há 12 anos trabalhando com desenvolvimento web, é apaixonado por web livre e compartilhamento de conhecimentos. Graduado em desenho industrial e pós graduado em gestão empreendedora, é sócio Eu Compraria e da GS Solutions",
    twitter: "https://twitter.com/gserrano",
    facebook: "https://www.facebook.com/masqueloucura",
    linkedin: "https://www.linkedin.com/in/gbserrano"
  },
  talk: {
    title: 'Este título é um teste A/B',
    description: 'Você sabe o que quer do seu usuário. Mas você sabe o que melhorar para atingir estes objetivos? Aprenda como construir uma interface "data-driven" e como implementar testes A/B relevantes em projetos web.'
  }
});
