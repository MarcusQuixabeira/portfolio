// In the future we can easily change these functions to feed from an real API using some available composables like useFetch

const mainContent = {
  data: {
    ptBr: {
      header: {
        imageUrl: '/images/mquixaba.jpeg',
        imageAlt: 'Marcus Quixabeira querendo fazer um código legal mais uma vez',
        name: 'Marcus Vinícius Quixabeira Bezerra dos Santos',
        title: 'Desenvolvedor Fullstack Sênior e Amante de Javascript'
      },
      aboutMe: {
        title: 'SOBRE MIM',
        text: `
          Olá, eu me chamo Marcus, sou graduado em análise e desenvolvimento de sistemas e em biologia.
          Sou casado, pai de uma garotinha e tenho como hobbies jogar videogames e jogos de mesa.
          Tenho muito interesse sobre novas tecnologias e sou muito curioso sobre assuntos da natureza.
          Atuo profissionalmente como desenvolvedor de softwares em plataforma web desde o ano de 2007.
          Deste então já tive a oportunidade de trabalhar com um vasto número de tecnologias e também
          em várias funções dentro da área de desenvolvimento.`,
        text2: `
          Minha primeira stack era baseada em Java EE, 
          usando pojos, servlets, jsp, css, html, javascript, struts, tomcat, hibernate. Mais tarde, por volta 
          de 2012, comecei a estudar Ruby on Rails e logo em seguida comecei a trabalhar com este framework. 
          Em 2013 tive minhas primeiras experiências desenhando e implementando arquiteturas desacopladas e
          pude criar e evoluir APIs Rest e também clientes web progressivos bem como aplicativos móveis híbridos
          usando alguns frameworks javascript como Ionic (Angular) e Quasar (Vue.js). Em 2017 iniciei minha primeira
          experiência internacional, trabalhando remotamente com uma stack baseada em Python com os frameworks 
          Pyramid, Flask e Vue.js. Apesar do ambiente desafiador, que exigia integração com uma enorme quantidade 
          de dados, manutenção de código legado, e alto acoplamento, eu integrei uma equipe brilhante e muito diligente, 
          e juntos criamos e evoluímos soluções críticas para o negócio. Em meados de 2022, decidi aceitar uma 
          nova oportunidade internacional. Eu desejava trabalhar mais intensivamente com Javascript, e após 
          aceitar essa oferta, trabalhei com Javascript no back-end (Node, Express) e também no front-end 
          (Vue.js, Nuxt.js), ajudando a criar e evoluir APIs de alta demanda, microservicos e sistemas web ricos 
          que impactaram milhões de usuários em todo o mundo. Se você deseja me conhecer um pouco mais, dê uma 
          olhada no restante da página e sinta-se à vontade para entrar em contato comigo através de algum dos 
          links sociais nessa página. Ficarei feliz em lhe conhecer.
        `,
      },
      lastExperiences: [
        {
          cover: 'A',
          remote: true,
          jobTitle: 'Engenheiro de Software Supervisor',
          company: 'Anchor Loans',
          startDate: new Date('2023-04-01'),
          endDate: new Date('2025-05-01'),
          jobDescription:`
            Gerenciou times em áreas do negócio específicas, treinando desenvolvedores em
            suas carreiras e também em boas praticas de desenvolvimento. Ajudou a desenhar
            e implementar soluções escaláveis, manuteníveis, disponíveis e confiáveis, usando
            Python, Vuejs e Mongodb com principais tecnologias, na plataforna AWS. Ajudou a planejar
            e executar integrações entre aplicações internas e serviços de terceiros tais como
            Docusign, Salesforce, Twilio, Sendgrid, Experian e muitos outros. Comunicou em varios
            níveis, preenchendo lacunas, reduzindo ruídos, ao mediar a linha de negócios e time de
            engenharia. Atuou também no recrutamentoo e mentoria de novos talentos.
          `
        },
        {
          cover: 'R',
          remote: true,
          jobTitle: 'Engenheiro de Software Sênior Fullstack',
          company: 'Rapchat Inc',
          startDate: new Date('2022-07-01'),
          endDate: new Date('2023-01-27'),
          jobDescription: `
            Desenvolveu e evoluiu APIs de alta performance para suportar clientes
            móveis e web, usando principalmente Express, Mongoose e Mongodb. Planejou e implementou
            microserviços usando Javascript ou Python na Google Cloud Platform. Desenvolveu
            e integrou aplicações web publicas e privadas para suportar o negócio usando NUXT.JS
            como principal framework web.
          `
        },
        {
          cover: 'A',
          remote: true,
          jobTitle: 'Engenheiro de Software Supervisor',
          company: 'Anchor Loans',
          startDate: new Date('2022-04-01'),
          endDate: new Date('2022-06-31'),
          jobDescription:`
            Gerenciou times em áreas do negócio específicas, treinando desenvolvedores em
            suas carreiras e também em boas praticas de desenvolvimento. Atuou também recrutando
            novos talentos. 
          `
        },
        {
          cover: 'A',
          remote: true,
          jobTitle: 'Engenheiro de Software Sênior',
          company: 'Anchor Loans',
          startDate: new Date('2017-10-01'),
          endDate: new Date('2022-03-27'),
          jobDescription: `
            Desenvolveu e evoluiu aplicações web privadas e publicas usando Python, Pyramid, Flask,
            Vue.js, GraphQL, Mongodb e outras tecnologias. Redesenhou e Rescreveu algumas
            aplicações web legadas melhorando usabilidade, performance e manutenibilidade.
          `
        },
        {
          cover: 'C',
          remote: true,
          jobTitle: 'Líder Técnico e Agilista',
          company: 'Caverna Labs',
          startDate: new Date('2018-12-01'),
          endDate: new Date('2022-08-01'),
          jobDescription: `
            Mediou a linha de negócios e o time de engenharia afim de criar e evoluir
            aplicações da forma mais acertiva possível. Gerenciou o time de engenharia,
            orientando e ajudando os desenvolvedores com as melhores praticas de design,
            desenvolviemnto e metodologias ágeis. Atuou também recrutando novos talentos.
          `
        },
        {
          cover: 'C',
          remote: false,
          jobTitle: 'Engenheiro de Software FullStack',
          company: 'Caverna Labs',
          startDate: new Date('2014-01-01'),
          endDate: new Date('2017-09-01'),
          jobDescription: `
            Desenvolveu e evoluiu diversas aplicações web usando principalmente Ruby on Rails
            para diversas startups em vários ramos como o automotivo, comércio eletrônico e mobilidade.
            Desenvolveu aplicações web progressivas e aplicações móveis hibridas usando  Ruby on Rails
            Ionic (Angular) e Quasar (Vue.js).
          `
        },
      ],
      softSkills: {
        title: 'HABILIDADES INTERPESSOAIS',
        skills: [
          'Trabalho em Equipe',
          'Autodidata',
          'Feedback',
          'Excelente comunicação',
          'Desenvoltura',
          'Empatia',
          'Proatividade',
          'Adaptabilidade',
          'Pensamento Crítico',
        ] 
      },
      hardSkills: [
        [
          {
            cover: 'J',
            name: 'Javascript',
            subs: ['Node', 'Npm', 'Gulp', 'Typescript'],
            years: 15
          },
          {
            cover: 'V',
            name: 'Vue.js',
            subs: ['Vue 2', 'Vue 3', 'Vue-cli', 'Webpack', 'Vuex', 'Vuetify', 'BootstrapVue', 'Quasar'],
            years: 8
          },
        ],
        [
          {
            cover: 'P',
            name: 'Python',
            subs: ['Jinja', 'Pymongo', 'Graphene', 'Alembic', 'Marshmallow', 'Pyramid', 'Flask', 'MongoEngine'],
            years: 6
          },
          {
            cover: 'G',
            name: 'Git',
            subs: ['Github', 'Github Actions', 'Bitbucket', 'Bitbucket Pipelines', 'Jira'],
            years: 10
          },
          {
            cover: 'N',
            name: 'Nuxt.js',
            subs: [],
            years: 1
          },
        ],
        [
          {
            cover: 'C',
            name: 'CSS',
            subs: ['SASS', 'SCSS'],
            years: 8
          },
          {
            cover: 'G',
            name: 'Mongodb',
            subs: ['MongoEngine', 'Mongoose'],
            years: 6
          },
          {
            cover: 'E',
            name: 'Express',
            subs: [],
            years: 1
          },
          {
            cover: 'G',
            name: 'GraphQL',
            subs: ['Vue Apollo'],
            years: 4
          },
        ],
      ],
      otherInfo: {
        title: 'FORMAÇÃO ACADÊMICA',
        formations: [
          {
            degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
            institution: 'Centro Universitário Estácio de Ribeirão Preto',
            graduatedAt: new Date('2021-07-01'),
            graduatedAtVerbiage: 'Graduado em'
          },
          {
            degree: 'Bacharel em Ciências Biológicas',
            institution: 'Universidade Federal do Piauí',
            graduatedAt: new Date('2012-01-01'),
            graduatedAtVerbiage: 'Graduado em'
          }
        ]
      },
      footer: {
        createdAt: new Date('2023-02-01'),
        copyRights: 'Todos os direitos reservados',
        developedBy: 'desenvolvido por Marcus Quixabeira',
      }
    },
    enUs: {
      header: {
        imageUrl: '/images/mquixaba.jpeg',
        imageAlt: 'Marcus Quixabeira wishing make some awesome code again',
        name: 'Marcus Vinícius Quixabeira Bezerra dos Santos',
        title: 'Fullstack Senior Software Developer and Javascript Lover'
      },
      aboutMe: {
        title: 'ABOUT ME',
        text: `
          Hello, my name is Marcus, I have a degree in systems analysis and development and also in biology.
          I'm married, I'm the father of a little girl and my hobbies are playing videogames and board games.
          I am very interested in new technologies and I am very curious about matters of nature.
          I starded to work professionally as a web software developer in 2007.
          Since then, I've had the opportunity to work with a vast number of technologies and also
          in various roles within the development area.
        `,
        text2:`
          My first stack was based on Java EE,
          using pojos, servlets, jsp, css, html, javascript, struts, tomcat, hibernate. Later, around
          2012, I started studying Ruby on Rails and soon after I started working with this framework.
          In 2013 I had my first experiences designing and implementing decoupled architectures and
          I was able to create and evolve Rest APIs and also progressive web clients as well as hybrid mobile apps
          using some javascript frameworks like Ionic (Angular) and Quasar (Vue.js). In 2017 I started my first
          international experience, working remotely with a Python-based stack with the frameworks
          Pyramid, Flask and Vue.js. Despite the challenging environment, which required integration with a huge amount of
          data, legacy code maintenance, and high coupled solutions, I integrated a brilliant and very diligent team,
          and together we created and evolved critical business solutions. In mid-2022, I decided to accept a
          new international opportunity. I wanted to work more intensively with Javascript, and after
          accept this offer, I worked with Javascript on the backend (Node, Express) and also on the frontend
          (Vue.js, Nuxt.js), helping to create and evolve high demand APIs, microservices and rich web systems
          that impacted millions of users around the world. If you want to know me a little more, give me a
          look through the rest of the page and feel free to contact me through any of the
          social links on that page. I would be happy to meet you.
        `,
      },
      lastExperiences: [
        {
          cover: 'A',
          remote: true,
          jobTitle: 'Software Engineer Supervisor',
          company: 'Anchor Loans',
          startDate: new Date('2023-04-01'),
          endDate: new Date('2025-05-01'),
          jobDescription:`
            Managed teams in specific Business areas, coaching developers on their careers
            and in good development practices. Helped to design and implement scalable, 
            maintainable, disponible and error tolerant solutions using Python, Vuejs and
            Mongodb as main technologies on AWS platform. Helped to design and execute
            integration plans between internal applications and 3rd party solutions like
            Docusign, Salesforce, Twilio, SendGrid, Experian and many others. Communicated
            at several levels, filling gaps, reducing noises in order to mediate the line of
            business and engineering team. Worked on recruiting and mentoring of new talents
            as well.
          `
        },
        {
          cover: 'R',
          remote: true,
          jobTitle: 'Fullstack Software Engineer',
          company: 'Rapchat Inc',
          startDate: new Date('2022-07-01'),
          endDate: new Date('2023-01-27'),
          jobDescription: `
            Developed and evolved high performance APIs to support mobile and web
            clients, using Express, Mongoose and Mongodb. Designed and implemented
            microservices using Javascript or Python on Google Cloud Platform. Developed
            and integrated public and private decoupled web applications to support the
            product using NUXT.JS as the main web framework.
          `
        },
        {
          cover: 'A',
          remote: true,
          jobTitle: 'Software Engineer Supervisor',
          company: 'Anchor Loans',
          startDate: new Date('2022-04-01'),
          endDate: new Date('2022-06-31'),
          jobDescription:`
            Managed teams in specific Business areas, coaching developers on their careers
            and in good development practices. Worked recruiting new talents as well.
          `
        },
        {
          cover: 'A',
          remote: true,
          jobTitle: 'Senior Software Engineer',
          company: 'Anchor Loans',
          startDate: new Date('2017-10-01'),
          endDate: new Date('2022-03-27'),
          jobDescription: `
            Developed and evolved public and internal web applications using Python,
            Pyramid, Flask, Vue.js, GraphQL, Mongodb and other technologies. Redesigned
            and Rewrote some legacy web applications in order to enhance usability,
            performance and maintainability.
          `
        },
        {
          cover: 'C',
          remote: true,
          jobTitle: 'Tech Lead and Scrum Master',
          company: 'Caverna Labs',
          startDate: new Date('2018-12-01'),
          endDate: new Date('2022-08-01'),
          jobDescription: `
            Mediated line of business and engineering team in order to create and evolve
            accurate solutions as much as possible. Managed engineering team, mentoring
            and helping developers on best design, developing practices and agile
            methodologies. Recruited and trained new talents as well.
          `
        },
        {
          cover: 'C',
          remote: false,
          jobTitle: 'Web System Developer',
          company: 'Caverna Labs',
          startDate: new Date('2014-01-01'),
          endDate: new Date('2017-09-01'),
          jobDescription: `
            Developed and evolved public and internal web applications using Ruby on Rails.
            Developed progressive web applications and hybrid mobile apps using Ionic
            (Angular) and Quasar (Vue.js) Frameworks.
          `
        },
      ],
      softSkills: {
        title: 'SOFT SKILLS',
        skills: [
          'Teamwork',
          'Self-learning',
          'Feedback',
          'Good communication',
          'Resourcefulness',
          'Empathy',
          'Problem-solving attitude',
          'Adaptability',
          'Critical thinking',
        ] 
      },
      hardSkills: [
        [
          {
            cover: 'J',
            name: 'Javascript',
            subs: ['Node', 'Npm', 'Gulp', 'Typescript'],
            years: 15
          },
          {
            cover: 'V',
            name: 'Vue.js',
            subs: ['Vue 2', 'Vue 3', 'Vue-cli', 'Webpack', 'Vuex', 'Vuetify', 'BootstrapVue', 'Quasar'],
            years: 8
          },
        ],
        [
          {
            cover: 'P',
            name: 'Python',
            subs: ['Jinja', 'Pymongo', 'Graphene', 'Alembic', 'Marshmallow', 'Pyramid', 'Flask', 'MongoEngine'],
            years: 6
          },
          {
            cover: 'G',
            name: 'Git',
            subs: ['Github', 'Github Actions', 'Bitbucket', 'Bitbucket Pipelines', 'Jira'],
            years: 10
          },
          {
            cover: 'N',
            name: 'Nuxt.js',
            subs: [],
            years: 1
          },
        ],
        [
          {
            cover: 'C',
            name: 'CSS',
            subs: ['SASS', 'SCSS'],
            years: 8
          },
          {
            cover: 'G',
            name: 'Mongodb',
            subs: ['MongoEngine', 'Mongoose'],
            years: 6
          },
          {
            cover: 'E',
            name: 'Express',
            subs: [],
            years: 1
          },
          {
            cover: 'G',
            name: 'GraphQL',
            subs: ['Vue Apollo'],
            years: 4
          },
        ],
      ],
      otherInfo: {
        title: 'ACADEMIC FORMATION',
        formations: [
          {
            degree: 'Technologist Degree in Systems Analysis and Development',
            institution: 'Centro Universitário Estácio de Ribeirão Preto',
            graduatedAt: new Date('2021-07-01'),
            graduatedAtVerbiage: 'Graduated at'
          },
          {
            degree: 'Bachelor of Biological Sciences',
            institution: 'Universidade Federal do Piauí',
            graduatedAt: new Date('2012-01-01'),
            graduatedAtVerbiage: 'Graduated at'
          }
        ]
      },
      footer: {
        createdAt: new Date('2023-02-01'),
        developedBy: 'crafted by Marcus Quixabeira',
        copyRights: 'All rights reserved'
      }
    }
  }
}

const socials = {
  data: {
    linkedinUrl: 'https://www.linkedin.com/in/marcus-quixabeira-5954bb140/',
    githubUrl: 'https://github.com/MarcusQuixabeira',
    email: 'mquixaba@gmail.com',
    resumeUrl: 'https://mquixaba-portfolio.s3.us-east-1.amazonaws.com/download/Marcus-Quixabeira-Resume.pdf',
    ptBr: {
      linkedinTitle: 'Perfil Linkedin',
      githubTitle: 'Perfil GitHub',
      emailTitle: 'Enviar Email',
      resumeTitle: 'Currículo'
    },
    enUs: {
      linkedinTitle: 'Linkedin Profile',
      githubTitle: 'GitHub Profile',
      emailTitle: 'Send Email',
      resumeTitle: 'Resume'
    }
  }
}

export function fetchMainContent(): Promise<any> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(mainContent.data)
    }, Math.floor(Math.random() * 100))
  })
}

export function fetchSocials(): Promise<any> {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(socials.data)
    }, Math.floor(Math.random() * 200))
  })
}