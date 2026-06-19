(function () {
  'use strict';

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  const STORAGE_RATING = 'elastitam_news_rating_v1';
  const STORAGE_COMMENTS = 'elastitam_news_comments_v1';

  /** Placeholders quando ainda nÃ£o hÃ¡ 5 fotos reais (mesmo padrÃ£o do seu script anterior). */
  const placeholderBase = [
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="100%" height="100%" fill="%23f6eee3"/><text x="50%" y="48%" text-anchor="middle" font-size="42" fill="%234a4a49" font-family="Arial">Foto do evento</text><text x="50%" y="56%" text-anchor="middle" font-size="24" fill="%236b6b6b" font-family="Arial">Substitua por uma imagem real</text></svg>',
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="100%" height="100%" fill="%23fff4e8"/><text x="50%" y="48%" text-anchor="middle" font-size="42" fill="%234a4a49" font-family="Arial">Registro da oficina</text><text x="50%" y="56%" text-anchor="middle" font-size="24" fill="%236b6b6b" font-family="Arial">Imagem 2</text></svg>',
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="100%" height="100%" fill="%23f2f2f2"/><text x="50%" y="48%" text-anchor="middle" font-size="42" fill="%234a4a49" font-family="Arial">Registro da oficina</text><text x="50%" y="56%" text-anchor="middle" font-size="24" fill="%236b6b6b" font-family="Arial">Imagem 3</text></svg>',
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="100%" height="100%" fill="%23fef7ed"/><text x="50%" y="48%" text-anchor="middle" font-size="42" fill="%234a4a49" font-family="Arial">Registro da oficina</text><text x="50%" y="56%" text-anchor="middle" font-size="24" fill="%236b6b6b" font-family="Arial">Imagem 4</text></svg>',
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="100%" height="100%" fill="%23f6eee3"/><text x="50%" y="48%" text-anchor="middle" font-size="42" fill="%234a4a49" font-family="Arial">Registro da oficina</text><text x="50%" y="56%" text-anchor="middle" font-size="24" fill="%236b6b6b" font-family="Arial">Imagem 5</text></svg>'
  ];

  const newsArchiveRaw = [
    {
      id: 'upgrade-linkedIn', 
      title: 'Upgrade no LinkedIn: Sua Carreira 2.0',
      date: '2026-05-21',
      displayDate: '21/05/2026',
      location: 'Senac Lapa Tito',
      participants:
        'MediaÃ§Ã£o de Samira Vieira.',
      summary:
        'O encontro apresentou Ã s participantes uma ferramenta importante para quem deseja explorar a criaÃ§Ã£o da sua carreira na plataforma do LinkedIn de forma mais tÃ©cnica.',
      poster: 'img/oficinas/oficina_LinkedIn_0926.png',
      gallery: [
        'img/oficinas/linkedin/LinkedIn_01.jpg',
        'img/oficinas/linkedin/LinkedIn_02.jpg',
        'img/oficinas/linkedin/LinkedIn_03.jpg',
        'img/oficinas/linkedin/LinkedIn_04.jpg',
        'img/oficinas/linkedin/LinkedIn_05.jpg'
      ],
      paragraphs: [
        'No dia 21 de maio, o laboratÃ³rio 49 do Senac Lapa Tito recebeu a oficina Upgrade no LinkedIn: Sua Carreira 2.0, conduzida por Samira Vieira. Com a participaÃ§Ã£o de 18 pessoas, o encontro foi um momento de aprendizado prÃ¡tico, troca de experiÃªncias e fortalecimento da presenÃ§a profissional no ambiente digital.',

'Durante a oficina, Samira apresentou de forma clara e dinÃ¢mica os principais recursos da plataforma, mostrando como o LinkedIn pode ser muito mais do que um currÃ­culo online. As participantes puderam conhecer melhor as funcionalidades da rede e entender como deixar o perfil mais ativo, estratÃ©gico e visÃ­vel para o mercado de trabalho.',

'Entre os temas abordados estiveram a construÃ§Ã£o de um perfil mais atrativo, a importÃ¢ncia das publicaÃ§Ãµes, configuraÃ§Ãµes da conta, indicaÃ§Ãµes, atividades, currÃ­culo e as possibilidades de desenvolvimento de carreira dentro da plataforma. A oficina tambÃ©m ajudou a mostrar como pequenas melhorias no perfil podem ampliar conexÃµes, oportunidades e visibilidade profissional.',

'Foi um encontro muito rico para quem deseja fortalecer sua presenÃ§a no mundo do trabalho com mais consciÃªncia, estratÃ©gia e autenticidade. Daqueles que fazem a gente sair com vontade de atualizar o perfil na mesma hora.'

      ]
    },
    {  
      id: 'pitch', 
      title: 'Pitch Mode On: Ative sua apresentaÃ§Ã£o',
      date: '2026-05-19',
      displayDate: '19/05/2026',
      location: 'Senac Lapa Tito',
      participants:
        'MediaÃ§Ã£o de Claudia Lima.',
      summary:
        'O encontro apresentou Ã s participantes uma ferramenta importante para quem deseja explorar a criaÃ§Ã£o visual de forma mais tÃ©cnica, criativa e profissional.',
      poster: 'img/oficinas/oficinaPitch_1026.png',
      gallery: [
        'img/oficinas/pitch/pitch_01.jpg',
        'img/oficinas/pitch/pitch_02.jpg',
        'img/oficinas/pitch/pitch_03.jpg',
        'img/oficinas/pitch/pitch_04.jpg',
        'img/oficinas/pitch/pitch_05.jpg'
      ],
      paragraphs: [
        'A oficina Pitch Mode On: Ative Sua ApresentaÃ§Ã£o aconteceu no laboratÃ³rio 32 do Senac Lapa Tito e reuniu estudantes de diferentes turmas da Ã¡rea de tecnologia, como TÃ©cnico em InformÃ¡tica para Internet, TÃ©cnico em Desenvolvimento de Sistemas, Power BI, entre outros cursos, contando com a participaÃ§Ã£o de 27 pessoas em um encontro marcado por troca, criatividade e muita prÃ¡tica.',
'A proposta da oficina foi mostrar que um pitch vai muito alÃ©m de apenas â€œfalar em pÃºblicoâ€. Durante o encontro, os participantes refletiram sobre comunicaÃ§Ã£o, presenÃ§a, clareza de ideias, confianÃ§a e a importÃ¢ncia de saber apresentar projetos, negÃ³cios e atÃ© a si mesmos de maneira estratÃ©gica e autÃªntica.',
'De forma dinÃ¢mica e interativa, a atividade trouxe dicas sobre estrutura de apresentaÃ§Ã£o, construÃ§Ã£o de narrativa, linguagem verbal e nÃ£o verbal, alÃ©m de estratÃ©gias para prender a atenÃ§Ã£o do pÃºblico e transmitir mensagens com mais impacto. A oficina tambÃ©m abriu espaÃ§o para exercÃ­cios prÃ¡ticos e momentos de apresentaÃ§Ã£o, incentivando cada participante a desenvolver sua prÃ³pria forma de comunicar ideias.',
'Mais do que aprender tÃ©cnicas, o encontro reforÃ§ou a importÃ¢ncia da comunicaÃ§Ã£o como ferramenta de protagonismo, oportunidade e transformaÃ§Ã£o, especialmente nas Ã¡reas de tecnologia, inovaÃ§Ã£o e empreendedorismo.',
'Foi uma oficina leve, participativa e inspiradora, mostrando que ativar o â€œpitch modeâ€ tambÃ©m Ã© ativar a confianÃ§a, a criatividade e a coragem de ocupar espaÃ§os e fazer a prÃ³pria voz ser ouvida.'

      ]
    },
    {
      id: 'affinity',
      title: 'Affinity: Design Criativo e ComunicaÃ§Ã£o Visual Profissional',
      date: '2026-04-29',
      displayDate: '29/04/2026',
      location: 'Senac Lapa Tito',
      participants:
        'MediaÃ§Ã£o de Fernanda Mayumi.',
      summary:
        'O encontro apresentou Ã s participantes uma ferramenta importante para quem deseja explorar a criaÃ§Ã£o visual de forma mais tÃ©cnica, criativa e profissional.',
      poster: 'img/oficinas/oficina_Affinity_1126.png',
      gallery: [
        'img/oficinas/affinity/affinity01.jpg',
        'img/oficinas/affinity/affinity02.jpg',
        'img/oficinas/affinity/affinity03.jpg',
        'img/oficinas/affinity/affinity04.jpg',
        'img/oficinas/affinity/affinity05.jpg',
        'img/oficinas/affinity/affinity06.jpg',
        'img/oficinas/affinity/affinity07.jpg',
        'img/oficinas/affinity/affinity08.jpg',
        'img/oficinas/affinity/affinity09.jpg',
        'img/oficinas/affinity/affinity10.jpg'
      ],
      paragraphs: [
        'No dia 29 de abril de 2026, no laboratÃ³rio 37 do Senac Lapa Tito, aconteceu a oficina Affinity: Design Criativo e ComunicaÃ§Ã£o Visual Profissional, conduzida pela docente Fernanda Mayumi. O encontro apresentou Ã s participantes uma ferramenta importante para quem deseja explorar a criaÃ§Ã£o visual de forma mais tÃ©cnica, criativa e profissional.',
'Durante a oficina, Fernanda mostrou como realizar a instalaÃ§Ã£o da ferramenta e apresentou suas principais possibilidades de uso no campo do design e da comunicaÃ§Ã£o visual profissional. A atividade tambÃ©m destacou a importÃ¢ncia de dominar recursos que ajudam a transformar ideias em materiais visuais mais bem construÃ­dos, com identidade, clareza e impacto.',
'De forma prÃ¡tica e acessÃ­vel, a oficina aproximou as participantes de um universo muito presente no mercado criativo, mostrando como ferramentas de design podem ampliar possibilidades de expressÃ£o, organizaÃ§Ã£o visual e atuaÃ§Ã£o profissional.',
'Foi um encontro de aprendizagem, descoberta e ampliaÃ§Ã£o de repertÃ³rio, reforÃ§ando que a comunicaÃ§Ã£o visual tambÃ©m Ã© uma poderosa forma de presenÃ§a, linguagem e protagonismo.'
      ]
    },
    {
      id: 'canva',
      title: 'Canva para ComunicaÃ§Ã£o Digital e Impacto Social',
      date: '2026-04-27',
      displayDate: '27/04/2026',
      location: 'Senac Lapa Tito',
      participants:
        'MediaÃ§Ã£o de Claudia Lima.',
      summary:
        'Um encontro potente sobre capacitaÃ§Ã£o de mulheres criando um impacto social.',
      poster: 'img/oficinas/oficinaCanva_1226.png',
      gallery: [
        'img/oficinas/canva/canva01.jpg',
        'img/oficinas/canva/canva02.jpg',
        'img/oficinas/canva/canva03.jpg',
        'img/oficinas/canva/canva04.jpg',
        'img/oficinas/canva/canva05.jpg',
        'img/oficinas/canva/canva06.jpg',
        'img/oficinas/canva/canva07.jpg',
        'img/oficinas/canva/canva08.JPG',
        'img/oficinas/canva/canva09.jpg',
        'img/oficinas/canva/canva10.JPG'
      ],
      paragraphs: [
        'No dia 27 de abril de 2026, nos laboratÃ³rios 1S e 39 do Senac Lapa Tito, aconteceu a oficina Canva para ComunicaÃ§Ã£o Digital e Impacto Social, conduzida pela docente Claudia Lima. O encontro foi um verdadeiro mergulho em criatividade, comunicaÃ§Ã£o e possibilidades, mostrando como o design pode ser uma ferramenta acessÃ­vel para transformar ideias em mensagens de impacto.',
'Durante a oficina, Claudia apresentou o Canva, plataforma online de design grÃ¡fico que permite criar artes de forma prÃ¡tica, intuitiva e acessÃ­vel, mesmo para quem nÃ£o tem experiÃªncia na Ã¡rea. AlÃ©m de explorar o funcionamento da ferramenta, ela tambÃ©m compartilhou um pouco da histÃ³ria do Canva, criado em 2013 por Melanie Perkins, destacando a relevÃ¢ncia de uma mulher Ã  frente de uma plataforma que hoje Ã© usada no mundo todo.',
'De forma leve, dinÃ¢mica e muito envolvente, a docente foi guiando as participantes por diferentes recursos da plataforma, mostrando como criar materiais visuais com mais estratÃ©gia, criatividade e autonomia. Entre os temas abordados estiveram o uso de modelos prontos, uploads, agrupamento de elementos, cores, fontes, compartilhamentos pÃºblicos e privados, links, elementos grÃ¡ficos, criaÃ§Ã£o de QR Code, remoÃ§Ã£o de fundo, ediÃ§Ã£o de imagens e diversas outras funcionalidades que tornam o Canva uma ferramenta tÃ£o versÃ¡til.',
'A oficina tambÃ©m trouxe reflexÃµes sobre comunicaÃ§Ã£o digital e apresentou tÃ©cnicas como a de S.A.N., ampliando o olhar das participantes para alÃ©m da ferramenta, conectando design, intencionalidade e impacto social.',
'Com uma conduÃ§Ã£o gostosa de acompanhar e cheia de exemplos prÃ¡ticos, a atividade foi marcada por muita interaÃ§Ã£o, participaÃ§Ã£o e dinÃ¢micas que tornaram o aprendizado ainda mais leve e envolvente. Foi um encontro inspirador, mostrando que comunicar bem tambÃ©m Ã© uma forma de criar presenÃ§a, fortalecer ideias e ampliar vozes.'
      ]
    },
    {
      id: 'mulheres-inspiram',
      title: 'Mulheres que Inspiram: LideranÃ§a e Representatividade',
      date: '2026-04-01',
      displayDate: '01/04/2026',
      location: 'Senac Penha',
      participants:
        'MediaÃ§Ã£o de Neide Maria. ParticipaÃ§Ã£o de Luana Dorizo, PatrÃ­cia Carnicelli Spadaccini, Yara Helena de Souza, Simone Mello de Oliveira, Carolina Lisboa de Paula, Maria JerÃ´nimo e Maria de Lourdes.',
      summary:
        'Um encontro potente sobre lideranÃ§a, representatividade, rede de apoio, diversidade e protagonismo feminino.',
      poster: 'img/oficinas/evento-01-04-26.png',
      gallery: [
        'img/oficinas/senac_penha/20260401_160118.jpg',
        'img/oficinas/senac_penha/IMG-20260401-WA0006.jpg',
        'img/oficinas/senac_penha/IMG-20260401-WA0007.jpg',
        'img/oficinas/senac_penha/IMG-20260401-WA0008.jpg',
        'img/oficinas/senac_penha/IMG-20260401-WA0019.jpg',
        'img/oficinas/senac_penha/IMG-20260401-WA0025.jpg',
        'img/oficinas/senac_penha/IMG-20260401-WA0027.jpg',
        'img/oficinas/senac_penha/IMG-20260401-WA0030.jpg',
        'img/oficinas/senac_penha/IMG-20260402-WA0008.jpg',
        'img/oficinas/senac_penha/IMG-20260402-WA0009.jpg'
      ],
      paragraphs: [
        'O ElasTitam foi convidado para participar do encontro Mulheres que Inspiram: LideranÃ§a e Representatividade, realizado no Senac Penha, no dia 01 de abril de 2026. Foi daqueles momentos que deixam a cabeÃ§a borbulhando de ideias e o coraÃ§Ã£o quentinho ao mesmo tempo.',
        'Com mediaÃ§Ã£o de Neide Maria, a roda de conversa reuniu Luana Dorizo, docente da Ã¡rea de tecnologia, comunicadora e fundadora do projeto ElasTitam, ao lado das convidadas PatrÃ­cia Carnicelli Spadaccini, Yara Helena de Souza, Simone Mello de Oliveira, Carolina Lisboa de Paula, Maria JerÃ´nimo e Maria de Lourdes, mulheres que trouxeram ao encontro suas vivÃªncias, perspectivas e trajetÃ³rias para enriquecer o debate.',
        'Mais do que um bate-papo, o encontro foi um espaÃ§o de escuta, partilha e reflexÃ£o sobre o que significa liderar sendo mulher em uma sociedade ainda marcada por desigualdades. A conversa passou por temas como lideranÃ§a feminina, empatia, clareza, reconhecimento, diversidade, inclusÃ£o e a construÃ§Ã£o de caminhos mais justos para as prÃ³ximas geraÃ§Ãµes.',
        'No fim, ficou aquela sensaÃ§Ã£o boa de quando um encontro consegue ser, ao mesmo tempo, leve, profundo, inspirador e necessÃ¡rio. Porque quando mulheres compartilham suas trajetÃ³rias, elas nÃ£o contam apenas histÃ³rias: elas abrem caminhos.'
      ]
    },
    {
      id: 'meu-corpo-minha-casa',
      title: 'Bate-papo sobre a obra literÃ¡ria: Meu Corpo, Minha Casa',
      date: '2026-03-27',
      displayDate: '27/03/2026',
      location: 'AuditÃ³rio da biblioteca do Senac Lapa Tito',
      participants: 'ConduÃ§Ã£o de TainÃ¡, Aline, Luana, Fernanda e Samira. Participantes dos cursos tÃ©cnicos, ensino mÃ©dio e convidados externos.',
      summary:
        'Uma oficina sensÃ­vel e acolhedora, usando a literatura como ponte para corpo, identidade, pertencimento e reconstruÃ§Ã£o.',
      poster: 'img/oficinas/oficina_meuCorpo.png',
      gallery: [
        'img/oficinas/meuCorpo/IMG_5605.jpg',
        'img/oficinas/meuCorpo/IMG_5606.jpg',
        'img/oficinas/meuCorpo/IMG_5607.jpg',
        'img/oficinas/meuCorpo/IMG_5608.jpg',
        'img/oficinas/meuCorpo/IMG_5609.jpg',
        'img/oficinas/meuCorpo/IMG_5610.jpg'
      ],
      paragraphs: [
        'No dia 27 de marÃ§o de 2026, o auditÃ³rio da biblioteca do Senac Lapa Tito recebeu uma oficina delicada, profunda e cheia de escuta: o bate-papo sobre a obra literÃ¡ria Meu Corpo, Minha Casa.',
        'O encontro reuniu participantes dos cursos tÃ©cnicos, do ensino mÃ©dio e tambÃ©m convidados de fora da unidade, formando um grupo diverso e muito aberto Ã  troca.',
        'A proposta da oficina foi criar um espaÃ§o seguro e mediado para reflexÃ£o, diÃ¡logo e acolhimento a partir da obra, trazendo para a conversa temas como corpo, pertencimento, identidade, dor, reconstruÃ§Ã£o, autonomia emocional e autoexpressÃ£o.',
        'Foi uma tarde de falas sensÃ­veis, escuta genuÃ­na e conexÃµes muito bonitas. Daquelas em que a literatura deixa de ser apenas leitura e vira ponte para acolhimento, fortalecimento e construÃ§Ã£o coletiva.'
      ]
    },
    {
      id: 'servidores-infra',
      title: 'Servidores e Infraestrutura BÃ¡sica de TI',
      date: '2026-03-26',
      displayDate: '26/03/2026',
      location: 'Senac Lapa Tito',
      participants:
        'ConduÃ§Ã£o de Gabrielly Cesario, aluna do curso de InformÃ¡tica para internet. ParticipaÃ§Ã£o de estudantes dos cursos tÃ©cnicos, ensino mÃ©dio, PROA e convidados externos.',
      summary:
        'Uma oficina prÃ¡tica sobre cliente, servidor, monitoramento, rede e os bastidores da infraestrutura de TI.',
      poster: 'img/oficinas/oficina_Servidores_1326.png',
      gallery: [
        'img/oficinas/servidor-2026/IMG-20260327-WA0032.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0033.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0037.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0038.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0041.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0042.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0044.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0045.jpg',
        'img/oficinas/servidor-2026/IMG-20260327-WA0046.jpg',
        'img/oficinas/servidor-2026/IMG_5399.JPG'
      ],
      paragraphs: [
        'A oficina Servidores e Infraestrutura BÃ¡sica de TI aproximou o pÃºblico de um tema essencial da tecnologia de forma prÃ¡tica e descomplicada.',
        'A proposta foi apresentar, em um ambiente educacional e controlado, como funciona a comunicaÃ§Ã£o entre cliente e servidor e como comportamentos suspeitos podem ser identificados por meio de monitoramento em um laboratÃ³rio virtual isolado.',
        'Durante a atividade, o grupo teve contato com configuraÃ§Ã£o de rede, comunicaÃ§Ã£o legÃ­tima entre mÃ¡quinas, simulaÃ§Ã£o de tentativas de acesso controladas, anÃ¡lise de logs e interpretaÃ§Ã£o de eventos.',
        'Foi uma oficina que mostrou os bastidores da tecnologia de um jeito claro e interessante, revelando o quanto existe de conhecimento por trÃ¡s de tudo funcionar direitinho.'
      ]
    },
    {
      id: 'mulher-negra-tech',
      title: 'O poder da mulher negra nas profissÃµes de tecnologia',
      date: '2026-03-24',
      displayDate: '24/03/2026',
      location: 'AuditÃ³rio da biblioteca do Senac Lapa Tito',
      participants:
        'ConduÃ§Ã£o de TainÃ£ Antunes e Samira Vieira, com apoio das docentes de games Ester MÃ¡ximos e Larissa Teixeira na transmissÃ£o online via Teams.',
      summary:
        'Uma conversa inspiradora sobre representatividade, identidade, carreira, oportunidades e protagonismo na tecnologia.',
      poster: 'img/oficinas/oficina_mulherNegra_0326.png',
      gallery: [
        'img/oficinas/mulher-negra-nas-profissoes/20260324_142935.jpg',
        'img/oficinas/mulher-negra-nas-profissoes/20260324_142952.jpg',
        'img/oficinas/mulher-negra-nas-profissoes/20260324_143001.jpg',
        'img/oficinas/mulher-negra-nas-profissoes/20260324_143004.jpg'
      ],
      paragraphs: [
        'No dia 24 de marÃ§o de 2026, o auditÃ³rio da biblioteca do Senac Lapa Tito foi palco de uma conversa potente e inspiradora com a oficina O poder da mulher negra nas profissÃµes de tecnologia.',
        'Reunindo participantes dos cursos tÃ©cnicos, do ensino mÃ©dio e convidados externos, o encontro promoveu um espaÃ§o rico de reflexÃ£o sobre representatividade, carreira, inovaÃ§Ã£o e protagonismo.',
        'Durante a oficina, foram abordados temas como a presenÃ§a de mulheres negras na tecnologia, os desafios e oportunidades da Ã¡rea, as possibilidades de carreira e a importÃ¢ncia de enxergar referÃªncias reais ocupando espaÃ§os de destaque.',
        'Ao final, ficou a certeza de que falar sobre tecnologia tambÃ©m Ã© falar sobre identidade, acesso, futuro e transformaÃ§Ã£o.'
      ]
    },
    {
      id: 'poder-feminino',
      title: 'Poder Feminino: Reprogramando PapÃ©is',
      date: '2026-03-23',
      displayDate: '23/03/2026',
      location: 'AuditÃ³rio da biblioteca do Senac Lapa Tito',
      participants: 'ConduÃ§Ã£o de Fernanda Nalon e Luana Dorizo. Participantes dos cursos tÃ©cnicos, ensino mÃ©dio e convidados externos.',
      summary:
        'Uma oficina forte e sensÃ­vel sobre machismo no cotidiano, papÃ©is sociais, autonomia, cuidado e transformaÃ§Ã£o coletiva.',
      poster: 'img/oficinas/oficina_poderfeminino_0226.png',
      gallery: [
        'img/oficinas/poderFeminino/IMG_5598.jpg',
        'img/oficinas/poderFeminino/IMG_5600.jpg',
        'img/oficinas/poderFeminino/IMG_5601.jpg',
        'img/oficinas/poderFeminino/IMG_5602.jpg',
        'img/oficinas/poderFeminino/IMG_5603.jpg',
        'img/oficinas/poderFeminino/IMG_5604.jpg'
      ],
      paragraphs: [
        'A oficina Poder Feminino: Reprogramando PapÃ©is aconteceu em dois momentos, das 14h Ã s 16h e das 19h Ã s 21h, reunindo um grupo diverso, vivo e cheio de participaÃ§Ã£o.',
        'Ao longo da oficina, a conversa passou por reflexÃµes sobre o que Ã© poder, voz, autonomia, liberdade, consciÃªncia e apoio coletivo, alÃ©m de discutir como os papÃ©is de gÃªnero sÃ£o construÃ­dos socialmente.',
        'O encontro tambÃ©m trouxe discussÃµes sobre o machismo no cotidiano, desigualdade no trabalho, jornada invisÃ­vel do cuidado, lideranÃ§a feminina, representatividade e violÃªncia de gÃªnero.',
        'Foi um encontro forte, sensÃ­vel e necessÃ¡rio, daqueles que mexem com a gente por dentro e deixam uma pergunta ecoando depois: qual papel social eu quero reprogramar a partir de agora?'
      ]
    },
    {
      id: 'pensamento-computacional',
      title: 'Pensamento Computacional para ResoluÃ§Ã£o de Problemas',
      date: '2026-02-23',
      displayDate: '23/02/2026',
      location: 'Senac Lapa Tito',
      participants: 'ConduÃ§Ã£o de Luana Dorizo. Participantes dos cursos tÃ©cnicos, ensino mÃ©dio e convidados externos.',
      summary:
        'Uma atividade prÃ¡tica e divertida sobre decomposiÃ§Ã£o, abstraÃ§Ã£o, reconhecimento de padrÃµes e algoritmos.',
      poster: 'img/oficinas/oficina_pensamento_0126.png',
      gallery: [
        'img/oficinas/pensamento_computacional/2633d5f3-1027-41f0-9fbf-e05be5884ceb.jpg',
        'img/oficinas/pensamento_computacional/28a9fb63-05a7-48ed-bb78-1bd10a8da108.jpg',
        'img/oficinas/pensamento_computacional/5e5a5298-f223-480b-b927-be0de965b786.jpg',
        'img/oficinas/pensamento_computacional/92996cee-2320-4a24-a306-179fe1fae35c.jpg',
        'img/oficinas/pensamento_computacional/a7d5de54-cbd0-4139-b03c-b5d7c263dc38.jpg',
        'img/oficinas/pensamento_computacional/d3ebacb8-477d-4d3f-a933-4dcb15866742.jpg',
        'img/oficinas/pensamento_computacional/e332fdd7-a49f-4b25-9a43-8b88301f84a5.jpg',
        'img/oficinas/pensamento_computacional/ebe0c0e1-a10a-4a87-9836-18b60b22f7bb.jpg'
      ],
      paragraphs: [
        'A oficina Pensamento Computacional para ResoluÃ§Ã£o de Problemas transformou conceitos da computaÃ§Ã£o em experiÃªncias acessÃ­veis, prÃ¡ticas e atÃ© divertidas.',
        'A atividade apresentou o pensamento computacional como uma metodologia para resolver problemas e criar estratÃ©gias a partir de bases computacionais, explorando seus quatro pilares: decomposiÃ§Ã£o, abstraÃ§Ã£o, reconhecimento de padrÃµes e algoritmos.',
        'Para tornar tudo mais concreto, o encontro trabalhou casos prÃ¡ticos, como o desafio de otimizar rotas de entrega e um enigma lÃ³gico das cores, em que os participantes precisavam observar pistas, identificar padrÃµes e construir uma soluÃ§Ã£o passo a passo.',
        'No fim, ficou claro para todo mundo que pensamento computacional nÃ£o Ã© um bicho de sete cabeÃ§as. Pelo contrÃ¡rio: Ã© uma ferramenta poderosa para olhar problemas com mais clareza, organizaÃ§Ã£o e inventividade.'
      ]
    }
  ].map((item) => ({
    id: item.id,
    sortDate: item.date,
    date: item.displayDate,
    title: item.title,
    location: item.location,
    participants: item.participants,
    excerpt: item.summary,
    poster: item.poster,
    content: item.paragraphs.map((p) => `<p>${ escapeHtml(p) }</p>`).join(''),
    gallery: item.gallery || [item.poster, ...placeholderBase.slice(1, 5)]
  }));

  const workshopArticles = [
    {
      id: 'linkedin-mulheres',
      sortDate: '2025-04-24',
      date: '24 de abril de 2025',
      title: 'LinkedIn para mulheres que querem se destacar',
      location: 'SENAC Lapa Tito â€” SÃ£o Paulo, SP',
      participants: 'Com Samira Vieira e equipe ElasTitam.',
      excerpt: 'Oficina sobre presenÃ§a profissional e networking no LinkedIn, com foco em carreiras em tecnologia.',
      poster: 'img/oficinas/of_linkedin.jpg',
      content: `
        <p>A turma explorou estratÃ©gias para montar um perfil atrativo, usar palavras-chave e fortalecer a rede de contatos com seguranÃ§a e autenticidade.</p>
        <p>O encontro reforÃ§ou o papel do LinkedIn na visibilidade de mulheres em TI e nas transiÃ§Ãµes de carreira.</p>
      `,
      gallery: [
        'img/oficinas/linkedin/20250424_145118.jpg',
        'img/oficinas/linkedin/20250424_145139.jpg',
        'img/oficinas/linkedin/20250424_145148.jpg',
        'img/oficinas/linkedin/20250424_145151.jpg',
        'img/oficinas/linkedin/20250424_145156.jpg',
        'img/oficinas/linkedin/20250424_150208.jpg',
        'img/oficinas/linkedin/20250424_150210.jpg',
        'img/oficinas/linkedin/20250424_150250.jpg'
      ]
    },
    {
      id: 'instagram-presenca',
      sortDate: '2025-05-08',
      date: '8 de maio de 2025',
      title: 'Empoderamento feminino no Instagram',
      location: 'SENAC Lapa Tito â€” SÃ£o Paulo, SP',
      participants: 'Com Fernanda Nalon.',
      excerpt: 'Construindo presenÃ§a autÃªntica e estratÃ©gica nas redes, com Ã©tica e cuidado com a saÃºde digital.',
      poster: 'img/oficinas/oficina_Instagram.jpg',
      content: `
        <p>Participantes discutiram narrativas pessoais, consistÃªncia de conteÃºdo e seguranÃ§a ao interagir com seguidores.</p>
        <p>A oficina conectou branding pessoal com propÃ³sito social e protagonismo feminino na tecnologia.</p>
      `,
      gallery: [
        'img/oficinas/Empoderamento/20250508_102519.jpg',
        'img/oficinas/Empoderamento/20250508_102545.jpg',
        'img/oficinas/Empoderamento/20250508_102552.jpg',
        'img/oficinas/Empoderamento/20250508_102710.jpg',
        'img/oficinas/Empoderamento/20250508_102718.jpg',
        'img/oficinas/Empoderamento/20250508_104305.jpg',
        'img/oficinas/Empoderamento/20250508_104323.jpg',
        'img/oficinas/Empoderamento/20250508_104354.jpg',
        'img/oficinas/Empoderamento/20250508_104359.jpg'
      ]
    },
    {
      id: 'desconstruindo-obvio',
      sortDate: '2025-05-20',
      date: '20 de maio de 2025',
      title: 'Desconstruindo o Ã³bvio',
      location: 'SENAC Lapa Tito â€” SÃ£o Paulo, SP',
      participants: 'Com Aline, Helen, TainÃ£ e Juliana.',
      excerpt: 'ReflexÃµes sobre machismo estrutural e cotidiano com mediaÃ§Ã£o coletiva e acolhimento.',
      poster: 'img/oficinas/oficina_descontraindoObvio_site.jpg',
      content: `
        <p>Rodas de conversa e dinÃ¢micas trouxeram exemplos do dia a dia e estratÃ©gias de enfrentamento em ambientes escolares e profissionais.</p>
        <p>O grupo destacou a importÃ¢ncia da escuta e da solidariedade entre pares.</p>
      `,
      gallery: [
        'img/oficinas/Desconstruindo_Obvio/20250523_145630.jpg',
        'img/oficinas/Desconstruindo_Obvio/20250523_145634.jpg',
        'img/oficinas/Desconstruindo_Obvio/20250523_160734.jpg',
        'img/oficinas/Desconstruindo_Obvio/Digitalizado_20250522-0025-01.jpg',
        'img/oficinas/Desconstruindo_Obvio/Digitalizado_20250522-0025-06.jpg',
        'img/oficinas/Desconstruindo_Obvio/Digitalizado_20250522-0025-14.jpg',
        'img/oficinas/Desconstruindo_Obvio/Digitalizado_20250522-0025-15.jpg',
        'img/oficinas/Desconstruindo_Obvio/Digitalizado_20250522-0025-17.jpg',
        'img/oficinas/Desconstruindo_Obvio/Digitalizado_20250522-0025-18.jpg',
        'img/oficinas/Desconstruindo_Obvio/IMG-20250520-WA0069.jpg'
      ]
    },
    {
      id: 'dados-redes',
      sortDate: '2025-05-30',
      date: '30 de maio de 2025',
      title: 'Por trÃ¡s dos likes: uma jornada pelos seus dados',
      location: 'SENAC Lapa Tito â€” SÃ£o Paulo, SP',
      participants: 'Com Amanda Petronieri.',
      excerpt: 'Privacidade, rastreamento e responsabilidade ao usar redes sociais e aplicativos.',
      poster: 'img/oficinas/oficina_dados.jpg',
      content: `
        <p>A atividade apresentou conceitos de dados pessoais, termos de uso e boas prÃ¡ticas para reduzir exposiÃ§Ã£o desnecessÃ¡ria.</p>
        <p>Houve espaÃ§o para dÃºvidas sobre LGPD e seguranÃ§a no ambiente digital.</p>
      `,
      gallery: [
        'img/oficinas/por-tras-dos-likes/20250530_193016.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_193927.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_193932.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_194033.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_194107.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_194130.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_194138.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_194201.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_194335.jpg',
        'img/oficinas/por-tras-dos-likes/20250530_194351.jpg'
      ]
    },
    {
      id: 'ux-acao',
      sortDate: '2025-06-13',
      date: '13 de junho de 2025',
      title: 'UX em aÃ§Ã£o: prÃ¡ticas para melhorar a experiÃªncia',
      location: 'SENAC Lapa Tito â€” SÃ£o Paulo, SP',
      participants: 'Com Tamara Regina.',
      excerpt: 'Ferramentas e exercÃ­cios sobre pesquisa com usuÃ¡rios, prototipagem e acessibilidade.',
      poster: 'img/oficinas/oficina_tamara1.jpg',
      content: `
        <p>O grupo experimentou etapas de discovery, mapeamento de jornada e testes rÃ¡pidos de usabilidade.</p>
        <p>Discutiu-se ainda inclusÃ£o e design centrado nas pessoas em produtos digitais.</p>
      `,
      gallery: [
        'img/oficinas/UX/20250613_142810.jpg',
        'img/oficinas/UX/20250613_142829.jpg',
        'img/oficinas/UX/20250613_143304.jpg',
        'img/oficinas/UX/20250613_144228.jpg',
        'img/oficinas/UX/20250613_145945.jpg',
        'img/oficinas/UX/20250613_150552.jpg',
        'img/oficinas/UX/20250613_150559.jpg',
        'img/oficinas/UX/20250613_150606.jpg',
        'img/oficinas/UX/20250613_150626.jpg',
        'img/oficinas/UX/20250613_151617.jpg'
      ]
    },
    {
      id: 'engenharia-social',
      sortDate: '2025-08-15',
      date: '15 de agosto de 2025',
      title: 'Engenharia social: alerta para mulheres na tecnologia',
      location: 'SENAC Lapa Tito â€” SÃ£o Paulo, SP',
      participants: 'Com Thalita Freitas e Rebeca Bueno.',
      excerpt: 'Reconhecimento de golpes, phishing e manipulaÃ§Ã£o psicolÃ³gica em ambientes corporativos e pessoais.',
      poster: 'img/oficinas/oficina_cyber.png',
      content: `
        <p>Estudos de caso ilustraram como atacantes exploram confianÃ§a e urgÃªncia â€” e como se proteger sem parar de colaborar.</p>
        <p>A conversa incluiu checklist de seguranÃ§a para e-mail, mensagens e redes sociais.</p>
      `,
      gallery: [
        'img/oficinas/engenhariaSocial/IMG_0812.JPG',
        'img/oficinas/engenhariaSocial/IMG_0936.PNG'
      ]
    }
  ];

  const articles = [...newsArchiveRaw, ...workshopArticles].sort(
    (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
  );

  let currentId = null;
  let lightboxIndex = 0;
  let lightboxImages = [];

  const gridEl = document.getElementById('newsGrid');
  const listSection = document.getElementById('listagem');
  const detailSection = document.getElementById('newsDetail');
  const countPill = document.getElementById('newsCountPill');
  const backBtn = document.getElementById('backButton');

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJson(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function getArticle(id) {
    return articles.find((a) => a.id === id);
  }

  function renderGrid() {
    if (countPill) {
      const n = articles.length;
      countPill.textContent = n === 1 ? '1 matÃ©ria' : `${ n } matÃ©rias`;
    }
    if (!gridEl) return;
    gridEl.innerHTML = articles
      .map(
        (a) => `
      <article class="news-card" data-id="${ a.id }" role="button" tabindex="0">
        <div class="news-card-media">
          <img src="${ escapeHtml(a.poster) }" alt="${ escapeHtml(a.title) }" loading="lazy">
        </div>
        <div class="news-card-body">
          <h3>${ escapeHtml(a.title) }</h3>
          <div class="news-card-meta">
            <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${ escapeHtml(a.date) }</span>
            <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${ escapeHtml(a.location) }</span>
          </div>
          <p>${ escapeHtml(a.excerpt) }</p>
          <div class="news-card-cta">Ler notÃ­cia <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></div>
        </div>
      </article>`
      )
      .join('');

    gridEl.querySelectorAll('.news-card').forEach((card) => {
      const id = card.getAttribute('data-id');
      const open = () => openDetail(id);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  function renderStars(ratingId) {
    const wrap = document.getElementById('ratingStars');
    const textEl = document.getElementById('ratingText');
    if (!wrap) return;

    const store = loadJson(STORAGE_RATING, {});
    const agg = store[ratingId] || { sum: 0, count: 0 };
    const avg = agg.count ? agg.sum / agg.count : 0;

    wrap.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', `${ i } estrelas`);
      btn.innerHTML = '<i class="fa-solid fa-star"></i>';
      if (avg >= i - 0.25) btn.classList.add('is-active');
      btn.addEventListener('click', () => {
        if (!store[ratingId]) store[ratingId] = { sum: 0, count: 0 };
        store[ratingId].sum += i;
        store[ratingId].count += 1;
        saveJson(STORAGE_RATING, store);
        renderStars(ratingId);
        if (textEl) {
          const n = store[ratingId].count;
          const av = store[ratingId].sum / n;
          textEl.textContent = `MÃ©dia: ${ av.toFixed(1) } de 5 (${ n } ${ n === 1 ? 'voto' : 'votos' }).`;
        }
      });
      wrap.appendChild(btn);
    }
    if (textEl) {
      if (agg.count) {
        textEl.textContent = `MÃ©dia: ${ avg.toFixed(1) } de 5 (${ agg.count } ${ agg.count === 1 ? 'voto' : 'votos' }).`;
      } else {
        textEl.textContent = 'Clique nas estrelas para votar.';
      }
    }
  }

  function renderComments(articleId) {
    const list = document.getElementById('commentList');
    if (!list) return;
    const all = loadJson(STORAGE_COMMENTS, {});
    const items = all[articleId] || [];
    if (!items.length) {
      list.innerHTML = '<p class="rating-text">Nenhum comentÃ¡rio ainda. Seja a primeira!</p>';
      return;
    }
    list.innerHTML = items
      .slice()
      .reverse()
      .map(
        (c) => `
      <div class="comment-item">
        <strong>${ escapeHtml(c.name) }</strong>
        <time datetime="${ escapeHtml(c.iso) }">${ escapeHtml(c.when) }</time>
        <p>${ escapeHtml(c.message) }</p>
      </div>`
      )
      .join('');
  }

  function openDetail(id) {
    const a = getArticle(id);
    if (!a) return;
    currentId = id;

    if (listSection) listSection.classList.add('hidden');
    if (detailSection) detailSection.classList.remove('hidden');

    document.getElementById('detailDate').textContent = a.date;
    document.getElementById('detailTitle').textContent = a.title;
    document.getElementById('detailLocation').textContent = a.location;
    document.getElementById('detailParticipants').textContent = a.participants;
    const poster = document.getElementById('detailPoster');
    poster.src = a.poster;
    poster.alt = a.title;
    document.getElementById('detailContent').innerHTML = a.content;

    const gal = document.getElementById('detailGallery');
    gal.innerHTML = '';
    lightboxImages = (a.gallery || []).slice(0, 10);
    lightboxImages.forEach((src, idx) => {
      const b = document.createElement('button');
      b.type = 'button';
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Foto ${ idx + 1 } â€” ${ a.title }`;
      b.appendChild(img);
      b.addEventListener('click', () => openLightbox(idx));
      gal.appendChild(b);
    });

    renderStars(a.id);
    renderComments(a.id);

    history.replaceState(null, '', `#${ a.id }`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function onCommentSubmit(e) {
    e.preventDefault();
    if (!currentId) return;
    const name = document.getElementById('commentName').value.trim();
    const message = document.getElementById('commentMessage').value.trim();
    if (!name || !message) return;

    const all = loadJson(STORAGE_COMMENTS, {});
    if (!all[currentId]) all[currentId] = [];
    const now = new Date();
    all[currentId].push({
      name,
      message,
      iso: now.toISOString(),
      when: now.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    });
    saveJson(STORAGE_COMMENTS, all);
    document.getElementById('commentForm').reset();
    renderComments(currentId);
  }

  function closeDetail() {
    if (listSection) listSection.classList.remove('hidden');
    if (detailSection) detailSection.classList.add('hidden');
    currentId = null;
    history.replaceState(null, '', 'noticias.html');
    if (listSection) {
      window.scrollTo({ top: listSection.offsetTop - 90, behavior: 'smooth' });
    }
  }

  function openLightbox(index) {
    lightboxIndex = index;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImage');
    if (!lb || !img || !lightboxImages.length) return;
    img.src = lightboxImages[lightboxIndex];
    lb.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function stepLightbox(delta) {
    if (!lightboxImages.length) return;
    lightboxIndex = (lightboxIndex + delta + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightboxImage').src = lightboxImages[lightboxIndex];
  }

  function initLightboxUi() {
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev')?.addEventListener('click', () => stepLightbox(-1));
    document.getElementById('lightboxNext')?.addEventListener('click', () => stepLightbox(1));
    document.getElementById('lightbox')?.addEventListener('click', (e) => {
      if (e.target.id === 'lightbox') closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox');
      if (!lb || lb.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });
  }

  function initHash() {
    const h = window.location.hash.replace(/^#/, '');
    if (h === 'listagem') return;
    if (h && getArticle(h)) openDetail(h);
  }

  backBtn?.addEventListener('click', closeDetail);
  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace(/^#/, '');
    if (h === 'listagem') {
      closeDetail();
      return;
    }
    if (h && getArticle(h)) openDetail(h);
    else closeDetail();
  });

  document.getElementById('commentForm')?.addEventListener('submit', onCommentSubmit);

  renderGrid();
  initLightboxUi();
  initHash();
})();