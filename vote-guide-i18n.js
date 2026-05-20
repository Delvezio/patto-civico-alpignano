(() => {
  if (!document.body.classList.contains("vote-guide-page")) return;

  const pageUrl = "./come-si-vota.html";
  const linksByLocale = {
    it: pageUrl,
    ro: `${pageUrl}?lang=ro`,
    "pt-br": `${pageUrl}?lang=pt-br`,
    "es-ar": `${pageUrl}?lang=es-ar`,
  };
  const localeMeta = {
    it: { label: "Italiano", flag: "🇮🇹" },
    ro: { label: "Română", flag: "🇷🇴" },
    "pt-br": { label: "Português (Brasil)", flag: "🇧🇷" },
    "es-ar": { label: "Español (Argentina)", flag: "🇦🇷" },
  };

  const localeAliases = {
    it: "it",
    italiano: "it",
    ro: "ro",
    romeno: "ro",
    romanian: "ro",
    română: "ro",
    pt: "pt-br",
    br: "pt-br",
    "pt-br": "pt-br",
    brasiliano: "pt-br",
    brasileiro: "pt-br",
    português: "pt-br",
    es: "es-ar",
    "es-ar": "es-ar",
    argentino: "es-ar",
    español: "es-ar",
    espanol: "es-ar",
  };

  const translations = {
    ro: {
      meta: {
        title: "Cum se votează la alegerile locale 2026 | Patto Civico per Alpignano",
        description:
          "Ghid clar despre modalitățile valabile de vot la alegerile locale din Alpignano: listă, candidat la funcția de primar, vot disjunct și preferințe.",
      },
      langBar: {
        eyebrow: "Limbă",
        title: "Deschide ghidul în limba ta",
      },
      back: "← Înapoi la listă",
      hero: {
        kicker: "Ghid de vot",
        title: "Cum se votează la alegerile locale 2026",
        intro:
          "Pe 24 și 25 mai se votează pentru alegerea primarului și a Consiliului Local. Aici găsești modalitățile valabile pentru a exprima corect votul în comunele cu peste 15.000 de locuitori, explicate clar și vizual.",
      },
      summary: {
        kicker: "Reguli esențiale",
        cards: [
          {
            eyebrow: "Ghid rapid",
            title: "5 moduri de a exprima un vot valabil",
            items: [
              "Vot pentru listă",
              "Vot pentru candidatul la funcția de primar și lista asociată",
              "Vot doar pentru candidatul la funcția de primar",
              "Preferințe pentru consilieri",
              "Vot disjunct",
            ],
          },
          {
            eyebrow: "Preferințe",
            title: "Poți indica până la 2 preferințe",
            text:
              "Alege consilierii pe care îi preferi scriind unul sau două nume de familie în spațiul de lângă simbolul listei pe care ai votat-o.",
          },
          {
            eyebrow: "Regula-cheie",
            title: "Dacă scrii două nume, trebuie să fie un bărbat și o femeie",
            text:
              "Dacă cele două preferințe aparțin unor candidați de același gen, a doua preferință se anulează.",
          },
        ],
      },
      rows: [
        {
          badge: "Opțiunea A",
          title: "Vot pentru listă",
          subtitle: "X pe simbolul listei",
          body:
            "Alegătorul poate pune un X doar pe simbolul unei liste. În acest caz, votul merge atât către lista aleasă, cât și către candidatul la funcția de primar asociat acelei liste.",
          points: [
            "Pune un singur X pe simbolul listei.",
            "Votul se extinde automat și la candidatul la funcția de primar asociat.",
          ],
          status: "Vot valabil",
          alt: "Exemplu de vot valabil pentru lista Patto Civico per Alpignano",
        },
        {
          badge: "Opțiunea B",
          title: "Vot pentru candidatul la funcția de primar și lista asociată",
          subtitle: "X pe candidatul la funcția de primar + X pe simbolul listei asociate",
          body:
            "Alegătorul poate pune un X pe numele candidatului la funcția de primar și un X pe simbolul unei liste asociate aceluiași candidat. Și în acest caz, votul merge atât către candidatul la funcția de primar, cât și către lista aleasă.",
          points: [
            "Cele două X trebuie să se refere la același bloc electoral.",
            "Votul este pe deplin valabil și susține atât candidatul la funcția de primar, cât și lista.",
          ],
          status: "Vot valabil",
          alt: "Exemplu de vot valabil pentru candidatul la funcția de primar și lista asociată",
        },
        {
          badge: "Opțiunea C",
          title: "Vot doar pentru candidatul la funcția de primar",
          subtitle: "X doar pe numele candidatului la funcția de primar",
          body:
            "Alegătorul poate pune un X doar pe numele candidatului la funcția de primar. În acest caz, votul merge doar către candidatul la funcția de primar și nu către lista sau listele asociate.",
          points: [
            "Se pune un singur X pe numele candidatului la funcția de primar.",
            "Votul nu se transferă automat către listă.",
          ],
          status: "Vot valabil",
          alt: "Exemplu de vot valabil exprimat doar pentru candidatul la funcția de primar",
        },
        {
          badge: "Opțiunea D",
          title: "Preferințe pentru consilierii locali",
          subtitle: "X pe simbolul listei + unul sau două nume de familie",
          body:
            "În spațiul de lângă lista aleasă se poate scrie numele de familie al unuia sau al doi candidați consilieri din aceeași listă. Dacă există candidați cu același nume de familie, este mai bine să indici și prenumele.",
          points: [
            "Se pot exprima până la două preferințe pentru aceeași listă.",
            "Dacă sunt două, trebuie să fie de genuri diferite: un bărbat și o femeie.",
            "Dacă cele două preferințe sunt de același gen, a doua este anulată.",
          ],
          status: "Vot valabil",
          alt: "Exemplu de vot valabil pentru listă cu două preferințe corecte",
        },
        {
          badge: "Opțiunea E",
          title: "Vot disjunct",
          subtitle: "X pe un candidat la funcția de primar + X pe o listă neasociată",
          body:
            "În comunele cu peste 15.000 de locuitori este valabil și votul disjunct. Alegătorul poate pune un X pe un candidat la funcția de primar și un X pe o listă care nu este asociată acelui candidat.",
          points: [
            "Votul merge către candidatul la funcția de primar ales.",
            "Votul merge și către lista aleasă, chiar dacă aparține unui alt bloc electoral.",
          ],
          status: "Vot valabil",
          alt: "Exemplu de vot valabil disjunct între candidatul la funcția de primar și o listă neasociată",
        },
      ],
      cta: {
        left: {
          kicker: "Echipa",
          title: "Descoperă candidații Patto Civico per Alpignano.",
          body:
            "Cunoaște candidații la Consiliul Local ai listei, profilele lor și documentele publicate în sprijinul candidaturii.",
          tags: ["11 candidați", "Profile", "Documente"],
          button: "Descoperă echipa",
        },
        right: {
          kicker: "Mai ai dubii?",
          title: "Scrie-ne direct.",
          body:
            "Pentru întrebări, clarificări sau semnalări despre teritoriu ne poți contacta imediat pe WhatsApp sau poți urmări actualizările de pe canalul Telegram.",
          whatsappSmall: "Scrie-ne acum",
          telegramSmall: "Intră pe canal",
          whatsappButton: "Scrie-ne pe WhatsApp",
          telegramButton: "Intră pe canalul Telegram",
        },
      },
      faq: {
        banner: {
          kicker: "Întrebări frecvente",
          title: "FAQ",
          subtitle: "— Cum se votează la alegerile locale 2026?",
          body:
            "Aici găsești răspunsuri la cele mai frecvente întrebări despre modalitățile valabile de vot, despre preferințe și despre cazurile în care o parte a votului sau întreaga schedă pot fi anulate.",
        },
        sections: [
          {
            title: "Cazuri în care votul este valabil",
            items: [
              {
                q: "Dacă scriu doar numele unui consilier, fără să pun nicio X, votul este valabil?",
                a: [
                  "Da, dacă numele este scris clar în spațiul listei din care face parte.",
                  "În acest caz, votul merge către listă, către candidatul la funcția de primar asociat și către candidatul consilier indicat.",
                ],
              },
              {
                q: "Dacă scriu doar două nume de consilieri, fără să pun nicio X, votul este valabil?",
                a: [
                  "Da, dacă cei doi candidați aparțin aceleiași liste și sunt de genuri diferite.",
                  "Votul merge către listă, către candidatul la funcția de primar asociat și către cei doi candidați consilieri indicați.",
                ],
              },
              {
                q: "Dacă pun X pe candidatul la funcția de primar și scriu numele unui consilier fără să pun X pe listă, votul este valabil?",
                a: [
                  "Da, dacă numele consilierului este scris în spațiul listei corecte.",
                  "În acest caz, votul merge către candidatul la funcția de primar, către lista consilierului și către consilierul indicat.",
                ],
              },
              {
                q: "Dacă pun X pe un candidat la funcția de primar și scriu numele unui consilier de pe o listă neasociată, votul este valabil?",
                a: [
                  "Da, dacă preferința este scrisă în spațiul listei corecte.",
                  "În practică, votul merge către candidatul la funcția de primar ales și către lista consilierului indicat. Este o formă de vot disjunct.",
                ],
              },
              {
                q: "Dacă scriu doar numele de familie al consilierului în loc de nume și prenume, este în regulă?",
                a: [
                  "Da.",
                  "În mod normal este suficient numele de familie.",
                  "Este mai bine să scrii și prenumele doar dacă există candidați cu același nume de familie.",
                ],
              },
              {
                q: "Dacă un candidat are două nume de familie, trebuie să le scriu pe amândouă?",
                a: [
                  "Nu, în mod normal poate fi suficient doar unul, atât timp cât candidatul este identificabil clar.",
                  "Dacă există risc de confuzie, este mai bine să scrii numele și prenumele complete.",
                ],
              },
            ],
          },
          {
            title: "Cazuri în care votul rămâne valabil, dar o parte nu este luată în considerare",
            items: [
              {
                q: "Dacă scriu două nume de consilieri de același gen, ce se întâmplă?",
                a: [
                  "Votul rămâne valabil.",
                  "Se contabilizează votul pentru listă și pentru candidatul la funcția de primar asociat, dar a doua preferință este anulată.",
                ],
              },
              {
                q: "Dacă votez o listă și scriu numele unui consilier din altă listă, ce se întâmplă?",
                a: [
                  "Votul pentru listă rămâne valabil.",
                  "Preferința pentru consilier nu este luată în considerare, deoarece candidatul indicat nu aparține listei votate.",
                ],
              },
              {
                q: "Dacă pun X pe două liste asociate aceluiași candidat la funcția de primar, ce se întâmplă?",
                a: [
                  "Votul poate fi atribuit candidatului la funcția de primar, dacă intenția alegătorului este clară.",
                  "Votul pentru liste însă nu este luat în considerare, deoarece nu pot fi alese două liste diferite.",
                ],
              },
            ],
          },
          {
            title: "Cazuri în care votul nu este valabil sau scheda poate fi anulată",
            items: [
              {
                q: "Dacă scriu numele unui consilier în spațiul listei greșite și nu pun nicio X, votul este valabil?",
                a: [
                  "Nu.",
                  "Scheda poate fi anulată deoarece intenția alegătorului nu este clară.",
                ],
              },
              {
                q: "Dacă pun X pe două liste care nu sunt asociate aceluiași candidat la funcția de primar, votul este valabil?",
                a: [
                  "Nu, dacă nu se poate înțelege clar intenția alegătorului.",
                  "În acest caz, scheda poate fi anulată.",
                ],
              },
              {
                q: "Dacă scriu fraze, comentarii sau mesaje pe schedă, votul este valabil?",
                a: [
                  "Nu.",
                  "Scheda poate fi anulată deoarece conține semne inutile sau recognoscibile.",
                ],
              },
              {
                q: "Dacă șterg, corectez sau fac mai multe semne suprapuse, votul este valabil?",
                a: ["Dacă votul nu mai este clar de înțeles, scheda poate fi anulată."],
              },
              {
                q: "Dacă scriu numele unei persoane care nu este candidat, votul este valabil?",
                a: [
                  "Nu pentru preferință.",
                  "Dacă însă ai pus corect X pe o listă sau pe un candidat la funcția de primar, acea parte a votului poate rămâne valabilă.",
                ],
              },
            ],
          },
        ],
        recap: {
          kicker: "Rezumat",
          title: "Ca să votezi simplu și sigur",
          body:
            "Dacă vrei să mergi la sigur, urmează această ordine simplă: simbolul listei, eventualele preferințe corecte și niciun semn în plus.",
          steps: [
            {
              number: "1",
              title: "Pune un X pe simbolul listei",
              text: "Este modul cel mai simplu și direct de a exprima un vot corect.",
            },
            {
              number: "2",
              title: "Adaugă unul sau două nume de familie dacă vrei să alegi consilierii",
              text: "Scrie-le în spațiul de lângă lista pe care ai votat-o.",
            },
            {
              number: "3",
              title: "Dacă scrii două nume, trebuie să fie un bărbat și o femeie",
              text: "Trebuie să aparțină aceleiași liste, altfel a doua preferință se pierde.",
            },
          ],
          notes: [
            {
              label: "În plus",
              text: "Poți pune X și pe candidatul la funcția de primar asociat.",
            },
            {
              label: "În comunele cu peste 15.000 de locuitori",
              text: "Este valabil și votul disjunct.",
            },
          ],
          warning: {
            label: "Pentru a evita erorile",
            text: "Folosește doar X-ul, scrie cel mult două nume de familie și nu adăuga alte semne pe schedă.",
          },
        },
      },
      note:
        "Această pagină are scop informativ și este realizată de Patto Civico Alpignano. Modalitățile de vot sunt prezentate pe baza normelor electorale pentru comunele cu populație de peste 15.000 de locuitori și a exemplelor oficiale pentru alegerea primarului și a Consiliului Local. Pentru informații instituționale și actualizări oficiale, consultă Primăria Alpignano și Ministerul de Interne al Italiei.",
      footer: {
        connectTitle: "Rămâi în contact",
        connectBody:
          "Salvează numărul listei, înscrie-te pe canalul Telegram și scrie-ne pe WhatsApp sau prin email.",
        cards: [
          {
            title: "Salvează contactul",
            small: "Deschide chatul pe WhatsApp",
          },
          {
            title: "Scrie-ne pe email",
            small: "Contactul oficial al listei",
          },
          {
            title: "Intră pe canal",
            small: "Actualizări și noutăți",
          },
          {
            title: "Trimite o semnalare",
            small: "Întrebări și teritoriu",
          },
        ],
        copyright:
          "© YEAR Patto Civico per Alpignano • Andrea Oliva Sindaco",
        backToTop: "Înapoi sus",
        privacy: "Confidențialitate și cookie-uri",
        committenteLabel: "Responsabilă de comunicare",
      },
      cookie: {
        title: "Confidențialitate și instrumente tehnice",
        body:
          "Acest site folosește doar instrumente tehnice necesare funcționării și linkuri externe către telefon, email, WhatsApp și Telegram. Nu există cookie-uri de profilare sau pixeli publicitari.",
        link: "Citește informarea",
        button: "Am înțeles",
      },
    },
    "pt-br": {
      meta: {
        title: "Como votar nas eleições municipais de 2026 | Patto Civico per Alpignano",
        description:
          "Guia claro sobre as formas válidas de votar nas eleições municipais de Alpignano: lista, candidato a prefeito, voto cruzado e preferências.",
      },
      langBar: {
        eyebrow: "Idioma",
        title: "Abra o guia no idioma que você preferir",
      },
      back: "← Voltar para a lista",
      hero: {
        kicker: "Guia de voto",
        title: "Como votar nas eleições municipais de 2026",
        intro:
          "Nos dias 24 e 25 de maio, vota-se para eleger o prefeito e o Conselho Municipal. Aqui você encontra as formas válidas de votar corretamente nos municípios com mais de 15.000 habitantes, explicadas de forma clara e visual.",
      },
      summary: {
        kicker: "Regras essenciais",
        cards: [
          {
            eyebrow: "Guia rápido",
            title: "5 maneiras de expressar um voto válido",
            items: [
              "Voto na lista",
              "Voto no candidato a prefeito e na lista vinculada",
              "Voto somente no candidato a prefeito",
              "Preferências para os vereadores",
              "Voto cruzado",
            ],
          },
          {
            eyebrow: "Preferências",
            title: "Você pode indicar até 2 preferências",
            text:
              "Escolha seus vereadores escrevendo um ou dois sobrenomes no espaço ao lado do símbolo da lista em que você votou.",
          },
          {
            eyebrow: "Regra-chave",
            title: "Se você escrever dois nomes, deve ser um homem e uma mulher",
            text:
              "Se as duas preferências forem de candidatos do mesmo gênero, a segunda preferência será anulada.",
          },
        ],
      },
      rows: [
        {
          badge: "Opção A",
          title: "Voto na lista",
          subtitle: "X no símbolo da lista",
          body:
            "O eleitor pode colocar um X apenas no símbolo de uma lista. Nesse caso, o voto vale tanto para a lista escolhida quanto para o candidato a prefeito vinculado a essa lista.",
          points: [
            "Marque apenas um X no símbolo da lista.",
            "O voto também é atribuído automaticamente ao candidato a prefeito vinculado.",
          ],
          status: "Voto válido",
          alt: "Exemplo de voto válido na lista Patto Civico per Alpignano",
        },
        {
          badge: "Opção B",
          title: "Voto no candidato a prefeito e na lista vinculada",
          subtitle: "X no candidato a prefeito + X no símbolo da lista vinculada",
          body:
            "O eleitor pode colocar um X no nome do candidato a prefeito e um X no símbolo de uma lista vinculada ao mesmo candidato. Também nesse caso, o voto vale tanto para o candidato a prefeito quanto para a lista escolhida.",
          points: [
            "Os dois X devem se referir ao mesmo grupo político.",
            "O voto é plenamente válido e fortalece ao mesmo tempo o candidato a prefeito e a lista.",
          ],
          status: "Voto válido",
          alt: "Exemplo de voto válido no candidato a prefeito e na lista vinculada",
        },
        {
          badge: "Opção C",
          title: "Voto somente no candidato a prefeito",
          subtitle: "X somente no nome do candidato a prefeito",
          body:
            "O eleitor pode colocar um X somente no nome do candidato a prefeito. Nesse caso, o voto vai apenas para o candidato a prefeito e não para a lista ou listas vinculadas.",
          points: [
            "Marca-se apenas um X no nome do candidato a prefeito.",
            "O voto não é transferido automaticamente para a lista.",
          ],
          status: "Voto válido",
          alt: "Exemplo de voto válido somente no candidato a prefeito",
        },
        {
          badge: "Opção D",
          title: "Preferências para os vereadores",
          subtitle: "X no símbolo da lista + um ou dois sobrenomes",
          body:
            "No espaço ao lado da lista escolhida, pode-se escrever o sobrenome de um ou de dois candidatos a vereador da mesma lista. Se houver candidatos com o mesmo sobrenome, é melhor indicar sobrenome e nome.",
          points: [
            "Podem ser expressas até duas preferências da mesma lista.",
            "Se forem duas, devem ser de gêneros diferentes: um homem e uma mulher.",
            "Se as duas preferências forem do mesmo gênero, a segunda será anulada.",
          ],
          status: "Voto válido",
          alt: "Exemplo de voto válido na lista com duas preferências corretas",
        },
        {
          badge: "Opção E",
          title: "Voto cruzado",
          subtitle: "X em um candidato a prefeito + X em uma lista não vinculada",
          body:
            "Nos municípios com mais de 15.000 habitantes, o voto cruzado também é válido. O eleitor pode colocar um X em um candidato a prefeito e um X em uma lista não vinculada a esse candidato.",
          points: [
            "O voto vai para o candidato a prefeito escolhido.",
            "O voto também vai para a lista escolhida, mesmo que pertença a outro grupo político.",
          ],
          status: "Voto válido",
          alt: "Exemplo de voto válido cruzado entre candidato a prefeito e lista não vinculada",
        },
      ],
      cta: {
        left: {
          kicker: "A equipe",
          title: "Conheça os candidatos do Patto Civico per Alpignano.",
          body:
            "Conheça os candidatos ao Conselho Municipal da lista, seus perfis e os documentos publicados em apoio à candidatura.",
          tags: ["11 candidatos", "Perfis", "Documentos"],
          button: "Conheça a equipe",
        },
        right: {
          kicker: "Ainda tem dúvidas?",
          title: "Fale com a gente.",
          body:
            "Para perguntas, esclarecimentos ou sinalizações sobre o território, você pode entrar em contato agora pelo WhatsApp ou acompanhar as atualizações no canal do Telegram.",
          whatsappSmall: "Escreva agora",
          telegramSmall: "Entre no canal",
          whatsappButton: "Escreva no WhatsApp",
          telegramButton: "Entrar no canal do Telegram",
        },
      },
      faq: {
        banner: {
          kicker: "Perguntas frequentes",
          title: "FAQ",
          subtitle: "— Como votar nas eleições municipais de 2026?",
          body:
            "Aqui você encontra respostas para as dúvidas mais frequentes sobre as formas válidas de votar, sobre as preferências e sobre os casos em que uma parte do voto ou a cédula inteira podem ser anuladas.",
        },
        sections: [
          {
            title: "Casos em que o voto é válido",
            items: [
              {
                q: "Se eu escrever apenas o nome de um vereador, sem colocar nenhum X, o voto é válido?",
                a: [
                  "Sim, se o nome estiver escrito claramente no espaço da lista à qual ele pertence.",
                  "Nesse caso, o voto vai para a lista, para o candidato a prefeito vinculado e para o candidato a vereador indicado.",
                ],
              },
              {
                q: "Se eu escrever apenas dois nomes de vereadores, sem colocar nenhum X, o voto é válido?",
                a: [
                  "Sim, se os dois candidatos pertencerem à mesma lista e forem de gêneros diferentes.",
                  "O voto vai para a lista, para o candidato a prefeito vinculado e para os dois candidatos a vereador indicados.",
                ],
              },
              {
                q: "Se eu marcar X no candidato a prefeito e escrever o nome de um vereador sem marcar X na lista, o voto é válido?",
                a: [
                  "Sim, se o nome do vereador estiver escrito no espaço da lista correta.",
                  "Nesse caso, o voto vai para o candidato a prefeito, para a lista do vereador e para o vereador indicado.",
                ],
              },
              {
                q: "Se eu marcar X em um candidato a prefeito e escrever o nome de um vereador de uma lista não vinculada, o voto é válido?",
                a: [
                  "Sim, se a preferência estiver escrita no espaço da lista correta.",
                  "Na prática, o voto vai para o candidato a prefeito escolhido e para a lista do vereador indicado. É uma forma de voto cruzado.",
                ],
              },
              {
                q: "Se eu escrever apenas o sobrenome do vereador em vez de nome e sobrenome, está tudo bem?",
                a: [
                  "Sim.",
                  "Em regra, o sobrenome é suficiente.",
                  "Só é melhor escrever também o nome se houver candidatos com o mesmo sobrenome.",
                ],
              },
              {
                q: "Se um candidato tiver dois sobrenomes, preciso escrever os dois?",
                a: [
                  "Não, em regra basta um deles, desde que o candidato possa ser identificado com clareza.",
                  "Se houver risco de confusão, é melhor escrever nome e sobrenome completos.",
                ],
              },
            ],
          },
          {
            title: "Casos em que o voto continua válido, mas uma parte não é contabilizada",
            items: [
              {
                q: "Se eu escrever dois nomes de vereadores do mesmo gênero, o que acontece?",
                a: [
                  "O voto continua válido.",
                  "Serão contados o voto na lista e no candidato a prefeito vinculado, mas a segunda preferência será anulada.",
                ],
              },
              {
                q: "Se eu votar em uma lista e escrever o nome de um vereador de outra lista, o que acontece?",
                a: [
                  "O voto na lista continua válido.",
                  "A preferência ao vereador não será contabilizada, porque o candidato indicado não pertence à lista votada.",
                ],
              },
              {
                q: "Se eu marcar X em duas listas vinculadas ao mesmo candidato a prefeito, o que acontece?",
                a: [
                  "O voto pode ser atribuído ao candidato a prefeito, se a vontade do eleitor estiver clara.",
                  "Mas o voto nas listas não é contabilizado, porque não é possível escolher duas listas diferentes.",
                ],
              },
            ],
          },
          {
            title: "Casos em que o voto não é válido ou a cédula pode ser anulada",
            items: [
              {
                q: "Se eu escrever o nome de um vereador no espaço da lista errada e não marcar nenhum X, o voto é válido?",
                a: [
                  "Não.",
                  "A cédula pode ser anulada porque a vontade do eleitor não fica clara.",
                ],
              },
              {
                q: "Se eu marcar X em duas listas não vinculadas ao mesmo candidato a prefeito, o voto é válido?",
                a: [
                  "Não, se não for possível entender com clareza a vontade do eleitor.",
                  "Nesse caso, a cédula pode ser anulada.",
                ],
              },
              {
                q: "Se eu escrever frases, comentários ou mensagens na cédula, o voto é válido?",
                a: [
                  "Não.",
                  "A cédula pode ser anulada porque contém sinais desnecessários ou que a tornem reconhecível.",
                ],
              },
              {
                q: "Se eu apagar, corrigir ou fizer vários sinais sobrepostos, o voto é válido?",
                a: ["Se o voto deixar de ser compreensível, a cédula pode ser anulada."],
              },
              {
                q: "Se eu escrever o nome de uma pessoa que não é candidata, o voto é válido?",
                a: [
                  "Não no que diz respeito à preferência.",
                  "Mas se você tiver marcado corretamente o X em uma lista ou em um candidato a prefeito, essa parte do voto pode continuar válida.",
                ],
              },
            ],
          },
        ],
        recap: {
          kicker: "Resumo",
          title: "Para votar de forma simples e segura",
          body:
            "Se quiser ir pelo caminho mais seguro, siga esta ordem simples: símbolo da lista, eventuais preferências corretas e nenhum sinal desnecessário.",
          steps: [
            {
              number: "1",
              title: "Marque um X no símbolo da lista",
              text: "É a forma mais simples e direta de expressar um voto correto.",
            },
            {
              number: "2",
              title: "Adicione um ou dois sobrenomes se quiser escolher os vereadores",
              text: "Escreva-os no espaço ao lado da lista em que você votou.",
            },
            {
              number: "3",
              title: "Se você escrever dois nomes, devem ser um homem e uma mulher",
              text: "Eles devem pertencer à mesma lista; caso contrário, a segunda preferência se perde.",
            },
          ],
          notes: [
            {
              label: "Além disso",
              text: "Você também pode marcar o X no candidato a prefeito vinculado.",
            },
            {
              label: "Nos municípios com mais de 15.000 habitantes",
              text: "O voto cruzado também é válido.",
            },
          ],
          warning: {
            label: "Para evitar erros",
            text: "Use apenas o X, escreva no máximo dois sobrenomes e não acrescente outros sinais na cédula.",
          },
        },
      },
      note:
        "Esta página tem finalidade informativa e é produzida por Patto Civico Alpignano. As modalidades de voto são apresentadas com base na legislação eleitoral aplicável aos municípios com população superior a 15.000 habitantes e nos exemplos oficiais para a eleição do prefeito e do Conselho Municipal. Para informações institucionais e atualizações oficiais, consulte a Prefeitura de Alpignano e o Ministério do Interior da Itália.",
      footer: {
        connectTitle: "Fique em contato",
        connectBody:
          "Salve o número da lista, entre no canal do Telegram e fale com a gente por WhatsApp ou email.",
        cards: [
          {
            title: "Salvar contato",
            small: "Abrir conversa no WhatsApp",
          },
          {
            title: "Fale por email",
            small: "Contato oficial da lista",
          },
          {
            title: "Entrar no canal",
            small: "Atualizações e notícias",
          },
          {
            title: "Enviar uma sinalização",
            small: "Dúvidas e território",
          },
        ],
        copyright:
          "© YEAR Patto Civico per Alpignano • Andrea Oliva Sindaco",
        backToTop: "Voltar ao topo",
        privacy: "Privacidade e Cookies",
        committenteLabel: "Responsável pela comunicação",
      },
      cookie: {
        title: "Privacidade e recursos técnicos",
        body:
          "Este site utiliza apenas recursos técnicos necessários ao funcionamento e links externos para telefone, email, WhatsApp e Telegram. Não há cookies de perfilamento nem pixels publicitários.",
        link: "Ler a política",
        button: "Entendi",
      },
    },
    "es-ar": {
      meta: {
        title: "Cómo votar en las elecciones municipales 2026 | Patto Civico per Alpignano",
        description:
          "Guía clara sobre las formas válidas de votar en las elecciones municipales de Alpignano: lista, candidato a intendente, voto cruzado y preferencias.",
      },
      langBar: {
        eyebrow: "Idioma",
        title: "Abrí la guía en el idioma que prefieras",
      },
      back: "← Volver a la lista",
      hero: {
        kicker: "Guía de voto",
        title: "Cómo votar en las elecciones municipales 2026",
        intro:
          "El 24 y 25 de mayo se vota para elegir al intendente y al Consejo Comunal. Acá encontrás las formas válidas de emitir correctamente el voto en los municipios de más de 15.000 habitantes, explicadas de manera clara y visual.",
      },
      summary: {
        kicker: "Reglas esenciales",
        cards: [
          {
            eyebrow: "Guía rápida",
            title: "5 maneras de emitir un voto válido",
            items: [
              "Voto a la lista",
              "Voto al candidato a intendente y a la lista vinculada",
              "Voto solo al candidato a intendente",
              "Preferencias para los concejales",
              "Voto cruzado",
            ],
          },
          {
            eyebrow: "Preferencias",
            title: "Podés indicar hasta 2 preferencias",
            text:
              "Elegí a tus concejales escribiendo uno o dos apellidos en el espacio al lado del símbolo de la lista que votaste.",
          },
          {
            eyebrow: "Regla clave",
            title: "Si escribís dos nombres, tienen que ser un hombre y una mujer",
            text:
              "Si las dos preferencias corresponden a candidatos del mismo género, la segunda preferencia se anula.",
          },
        ],
      },
      rows: [
        {
          badge: "Opción A",
          title: "Voto a la lista",
          subtitle: "X sobre el símbolo de la lista",
          body:
            "La persona electora puede poner una X solo sobre el símbolo de una lista. En ese caso, el voto va tanto a la lista elegida como al candidato a intendente vinculado a esa lista.",
          points: [
            "Marcá una sola X sobre el símbolo de la lista.",
            "El voto también se asigna automáticamente al candidato a intendente vinculado.",
          ],
          status: "Voto válido",
          alt: "Ejemplo de voto válido a la lista Patto Civico per Alpignano",
        },
        {
          badge: "Opción B",
          title: "Voto al candidato a intendente y a la lista vinculada",
          subtitle: "X sobre el candidato a intendente + X sobre el símbolo de la lista vinculada",
          body:
            "La persona electora puede poner una X sobre el nombre del candidato a intendente y una X sobre el símbolo de una lista vinculada al mismo candidato. También en este caso, el voto va tanto al candidato a intendente como a la lista elegida.",
          points: [
            "Las dos X tienen que referirse al mismo espacio político.",
            "El voto es plenamente válido y fortalece al mismo tiempo al candidato a intendente y a la lista.",
          ],
          status: "Voto válido",
          alt: "Ejemplo de voto válido al candidato a intendente y a la lista vinculada",
        },
        {
          badge: "Opción C",
          title: "Voto solo al candidato a intendente",
          subtitle: "X solo sobre el nombre del candidato a intendente",
          body:
            "La persona electora puede poner una X solo sobre el nombre del candidato a intendente. En ese caso, el voto va únicamente al candidato a intendente y no a la lista o a las listas vinculadas.",
          points: [
            "Se marca una sola X sobre el nombre del candidato a intendente.",
            "El voto no se transfiere automáticamente a la lista.",
          ],
          status: "Voto válido",
          alt: "Ejemplo de voto válido emitido solo sobre el candidato a intendente",
        },
        {
          badge: "Opción D",
          title: "Preferencias para los concejales",
          subtitle: "X sobre el símbolo de la lista + uno o dos apellidos",
          body:
            "En el espacio al lado de la lista elegida se puede escribir el apellido de uno o de dos candidatos concejales de la misma lista. Si hay candidatos con el mismo apellido, conviene indicar apellido y nombre.",
          points: [
            "Se pueden expresar hasta dos preferencias de la misma lista.",
            "Si son dos, tienen que ser de distinto género: un hombre y una mujer.",
            "Si las dos preferencias son del mismo género, la segunda queda anulada.",
          ],
          status: "Voto válido",
          alt: "Ejemplo de voto válido a la lista con dos preferencias correctas",
        },
        {
          badge: "Opción E",
          title: "Voto cruzado",
          subtitle: "X sobre un candidato a intendente + X sobre una lista no vinculada",
          body:
            "En los municipios con más de 15.000 habitantes, el voto cruzado también es válido. La persona electora puede poner una X sobre un candidato a intendente y una X sobre una lista no vinculada a ese candidato.",
          points: [
            "El voto va al candidato a intendente elegido.",
            "El voto también va a la lista elegida, aunque pertenezca a otro espacio político.",
          ],
          status: "Voto válido",
          alt: "Ejemplo de voto válido cruzado entre candidato a intendente y lista no vinculada",
        },
      ],
      cta: {
        left: {
          kicker: "El equipo",
          title: "Conocé a los candidatos de Patto Civico per Alpignano.",
          body:
            "Conocé a los candidatos al Consejo Comunal de la lista, sus perfiles y los documentos publicados en apoyo de la candidatura.",
          tags: ["11 candidatos", "Perfiles", "Documentos"],
          button: "Conocer al equipo",
        },
        right: {
          kicker: "¿Todavía tenés dudas?",
          title: "Escribinos directamente.",
          body:
            "Para preguntas, aclaraciones o señalamientos sobre el territorio, podés contactarnos enseguida por WhatsApp o seguir las actualizaciones del canal de Telegram.",
          whatsappSmall: "Escribinos ahora",
          telegramSmall: "Entrá al canal",
          whatsappButton: "Escribinos por WhatsApp",
          telegramButton: "Entrar al canal de Telegram",
        },
      },
      faq: {
        banner: {
          kicker: "Preguntas frecuentes",
          title: "FAQ",
          subtitle: "— ¿Cómo se vota en las elecciones municipales 2026?",
          body:
            "Acá encontrás respuestas a las dudas más frecuentes sobre las formas válidas de votar, sobre las preferencias y sobre los casos en que una parte del voto o toda la boleta pueden quedar anuladas.",
        },
        sections: [
          {
            title: "Casos en los que el voto es válido",
            items: [
              {
                q: "Si escribo solo el nombre de un concejal, sin poner ninguna X, ¿el voto es válido?",
                a: [
                  "Sí, si el nombre está escrito claramente en el espacio de la lista a la que pertenece.",
                  "En ese caso, el voto va a la lista, al candidato a intendente vinculado y al candidato concejal indicado.",
                ],
              },
              {
                q: "Si escribo solo dos nombres de concejales, sin poner ninguna X, ¿el voto es válido?",
                a: [
                  "Sí, si los dos candidatos pertenecen a la misma lista y son de distinto género.",
                  "El voto va a la lista, al candidato a intendente vinculado y a los dos candidatos concejales indicados.",
                ],
              },
              {
                q: "Si pongo la X sobre el candidato a intendente y escribo el nombre de un concejal sin poner la X en la lista, ¿el voto es válido?",
                a: [
                  "Sí, si el nombre del concejal está escrito en el espacio de la lista correcta.",
                  "En ese caso, el voto va al candidato a intendente, a la lista del concejal y al concejal indicado.",
                ],
              },
              {
                q: "Si pongo la X sobre un candidato a intendente y escribo el nombre de un concejal de una lista no vinculada, ¿el voto es válido?",
                a: [
                  "Sí, si la preferencia está escrita en el espacio de la lista correcta.",
                  "En la práctica, el voto va al candidato a intendente elegido y a la lista del concejal indicado. Es una forma de voto cruzado.",
                ],
              },
              {
                q: "Si escribo el apellido del concejal en lugar de nombre y apellido, ¿está bien?",
                a: [
                  "Sí.",
                  "En general alcanza con el apellido.",
                  "Conviene escribir también el nombre solo si hay candidatos con el mismo apellido.",
                ],
              },
              {
                q: "Si un candidato tiene dos apellidos, ¿tengo que escribir los dos?",
                a: [
                  "No, en general puede alcanzar con uno, siempre que el candidato pueda identificarse con claridad.",
                  "Si existe riesgo de confusión, es mejor escribir nombre y apellido completos.",
                ],
              },
            ],
          },
          {
            title: "Casos en los que el voto sigue siendo válido, pero una parte no se contabiliza",
            items: [
              {
                q: "Si escribo dos nombres de concejales del mismo género, ¿qué pasa?",
                a: [
                  "El voto sigue siendo válido.",
                  "Se contabiliza el voto a la lista y al candidato a intendente vinculado, pero la segunda preferencia queda anulada.",
                ],
              },
              {
                q: "Si voto una lista y escribo el nombre de un concejal de otra lista, ¿qué pasa?",
                a: [
                  "El voto a la lista sigue siendo válido.",
                  "La preferencia al concejal no se contabiliza, porque el candidato indicado no pertenece a la lista votada.",
                ],
              },
              {
                q: "Si pongo la X en dos listas vinculadas al mismo candidato a intendente, ¿qué pasa?",
                a: [
                  "El voto puede atribuirse al candidato a intendente, si la voluntad del elector queda clara.",
                  "Pero el voto a las listas no se contabiliza, porque no es posible elegir dos listas distintas.",
                ],
              },
            ],
          },
          {
            title: "Casos en los que el voto no es válido o la boleta puede anularse",
            items: [
              {
                q: "Si escribo el nombre de un concejal en el espacio de la lista equivocada y no pongo ninguna X, ¿el voto es válido?",
                a: [
                  "No.",
                  "La boleta puede anularse porque la voluntad del elector no queda clara.",
                ],
              },
              {
                q: "Si pongo la X en dos listas no vinculadas al mismo candidato a intendente, ¿el voto es válido?",
                a: [
                  "No, si no es posible entender con claridad la voluntad del elector.",
                  "En ese caso, la boleta puede anularse.",
                ],
              },
              {
                q: "Si escribo frases, comentarios o mensajes en la boleta, ¿el voto es válido?",
                a: [
                  "No.",
                  "La boleta puede anularse porque contiene signos innecesarios o reconocibles.",
                ],
              },
              {
                q: "Si tacho, corrijo o hago varios signos superpuestos, ¿el voto es válido?",
                a: ["Si el voto deja de ser comprensible, la boleta puede anularse."],
              },
              {
                q: "Si escribo el nombre de una persona que no es candidata, ¿el voto es válido?",
                a: [
                  "No en lo que respecta a la preferencia.",
                  "Pero si marcaste correctamente la X sobre una lista o sobre un candidato a intendente, esa parte del voto puede seguir siendo válida.",
                ],
              },
            ],
          },
        ],
        recap: {
          kicker: "Resumen",
          title: "Para votar de forma simple y segura",
          body:
            "Si querés ir a lo seguro, seguí esta secuencia simple: símbolo de la lista, eventuales preferencias correctas y ningún signo de más.",
          steps: [
            {
              number: "1",
              title: "Poné una X sobre el símbolo de la lista",
              text: "Es la forma más simple y directa de emitir un voto correcto.",
            },
            {
              number: "2",
              title: "Agregá uno o dos apellidos si querés elegir a los concejales",
              text: "Escribilos en el espacio al lado de la lista que votaste.",
            },
            {
              number: "3",
              title: "Si escribís dos nombres, tienen que ser un hombre y una mujer",
              text: "Deben pertenecer a la misma lista; de lo contrario, se pierde la segunda preferencia.",
            },
          ],
          notes: [
            {
              label: "Además",
              text: "También podés poner la X sobre el candidato a intendente vinculado.",
            },
            {
              label: "En los municipios de más de 15.000 habitantes",
              text: "El voto cruzado también es válido.",
            },
          ],
          warning: {
            label: "Para evitar errores",
            text: "Usá solo la X, escribí como máximo dos apellidos y no agregues otros signos en la boleta.",
          },
        },
      },
      note:
        "Esta página tiene finalidad informativa y está a cargo de Patto Civico Alpignano. Las modalidades de voto se presentan sobre la base de la normativa electoral aplicable a los municipios con población superior a 15.000 habitantes y de los ejemplos oficiales para la elección del intendente y del Consejo Comunal. Para información institucional y actualizaciones oficiales, consultá al Comune di Alpignano y al Ministero dell’Interno.",
      footer: {
        connectTitle: "Seguí en contacto",
        connectBody:
          "Guardá el número de la lista, sumate al canal de Telegram y escribinos por WhatsApp o email.",
        cards: [
          {
            title: "Guardar contacto",
            small: "Abrir chat de WhatsApp",
          },
          {
            title: "Escribinos por email",
            small: "Contacto oficial de la lista",
          },
          {
            title: "Entrar al canal",
            small: "Novedades y noticias",
          },
          {
            title: "Enviar una señalación",
            small: "Preguntas y territorio",
          },
        ],
        copyright:
          "© YEAR Patto Civico per Alpignano • Andrea Oliva Sindaco",
        backToTop: "Volver arriba",
        privacy: "Privacidad y Cookies",
        committenteLabel: "Responsable de comunicación",
      },
      cookie: {
        title: "Privacidad y herramientas técnicas",
        body:
          "Este sitio utiliza solo herramientas técnicas necesarias para su funcionamiento y enlaces externos a teléfono, email, WhatsApp y Telegram. No se detectan cookies de perfilado ni píxeles publicitarios.",
        link: "Leer la política",
        button: "Entendido",
      },
    },
  };

  const normalizeLocale = (value) => {
    const normalized = String(value || "it").trim().toLowerCase();
    return localeAliases[normalized] || "it";
  };

  const requestedLocale = normalizeLocale(new URLSearchParams(window.location.search).get("lang"));
  const locale = requestedLocale in translations ? requestedLocale : "it";

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const setText = (selector, value, root = document) => {
    const node = qs(selector, root);
    if (node && typeof value === "string") node.textContent = value;
  };
  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  qsa("[data-vote-guide-lang]").forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) return;
    const linkLocale = normalizeLocale(link.dataset.voteGuideLang);
    link.href = linksByLocale[linkLocale] || linksByLocale.it;
    link.classList.toggle("is-active", linkLocale === locale);
    link.setAttribute("hreflang", linkLocale);
  });

  const currentFlag = qs("[data-vote-guide-current-flag]");
  const currentLabel = qs("[data-vote-guide-current-label]");
  if (currentFlag) currentFlag.textContent = localeMeta[locale].flag;
  if (currentLabel) currentLabel.textContent = localeMeta[locale].label;

  if (locale === "it") return;

  const t = translations[locale];
  document.documentElement.lang = locale;
  document.title = t.meta.title;

  const descriptionMeta = qs('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.setAttribute("content", t.meta.description);

  setText(".docs-back", t.back);
  setText(".vote-guide-hero .section-kicker", t.hero.kicker);
  setText(".vote-guide-hero h1", t.hero.title);
  setText(".vote-guide-hero > p", t.hero.intro);

  setText(".vote-guide-summary-block > .section-kicker", t.summary.kicker);
  const summaryCards = qsa(".vote-guide-summary__item");
  if (summaryCards[0]) {
    setText(".vote-guide-summary__eyebrow", t.summary.cards[0].eyebrow, summaryCards[0]);
    setText(".vote-guide-summary__copy h2", t.summary.cards[0].title, summaryCards[0]);
    qsa(".vote-guide-summary__link span", summaryCards[0]).forEach((node, index) => {
      node.textContent = t.summary.cards[0].items[index];
    });
  }
  if (summaryCards[1]) {
    setText(".vote-guide-summary__eyebrow", t.summary.cards[1].eyebrow, summaryCards[1]);
    setText(".vote-guide-summary__copy h2", t.summary.cards[1].title, summaryCards[1]);
    setText(".vote-guide-summary__text", t.summary.cards[1].text, summaryCards[1]);
  }
  if (summaryCards[2]) {
    setText(".vote-guide-summary__eyebrow", t.summary.cards[2].eyebrow, summaryCards[2]);
    setText(".vote-guide-summary__copy h2", t.summary.cards[2].title, summaryCards[2]);
    setText(".vote-guide-summary__text", t.summary.cards[2].text, summaryCards[2]);
  }

  qsa(".vote-guide-row").forEach((row, index) => {
    const item = t.rows[index];
    if (!item) return;
    setText(".vote-guide-badge", item.badge, row);
    setText("h2", item.title, row);
    setText(".vote-guide-subtitle", item.subtitle, row);
    setText(".vote-guide-subtitle + p", item.body, row);
    qsa(".vote-guide-points li", row).forEach((pointNode, pointIndex) => {
      pointNode.textContent = item.points[pointIndex] || "";
    });
    setText(".vote-guide-placeholder__status", item.status, row);
    const image = qs(".vote-guide-placeholder__media img", row);
    if (image) image.alt = item.alt;
  });

  const ctaPanels = qsa(".vote-guide-cta__panel");
  if (ctaPanels[0]) {
    setText(".section-kicker", t.cta.left.kicker, ctaPanels[0]);
    setText("h2", t.cta.left.title, ctaPanels[0]);
    setText(".vote-guide-cta__frame > p", t.cta.left.body, ctaPanels[0]);
    qsa(".vote-guide-cta__tags span", ctaPanels[0]).forEach((node, index) => {
      node.textContent = t.cta.left.tags[index] || "";
    });
    setText(".vote-guide-cta__actions .btn", t.cta.left.button, ctaPanels[0]);
  }
  if (ctaPanels[1]) {
    setText(".section-kicker", t.cta.right.kicker, ctaPanels[1]);
    setText("h2", t.cta.right.title, ctaPanels[1]);
    setText(".vote-guide-cta__frame > p", t.cta.right.body, ctaPanels[1]);
    const contactLinks = qsa(".vote-guide-cta__contact-link", ctaPanels[1]);
    if (contactLinks[0]) setText("small", t.cta.right.whatsappSmall, contactLinks[0]);
    if (contactLinks[1]) setText("small", t.cta.right.telegramSmall, contactLinks[1]);
    const ctaButtons = qsa(".vote-guide-cta__actions .btn", ctaPanels[1]);
    if (ctaButtons[0]) ctaButtons[0].textContent = t.cta.right.whatsappButton;
    if (ctaButtons[1]) ctaButtons[1].textContent = t.cta.right.telegramButton;
  }

  setText(".vote-guide-faq__banner .section-kicker", t.faq.banner.kicker);
  setText(".vote-guide-faq__banner h2", t.faq.banner.title);
  setText(".vote-guide-faq__banner h3", t.faq.banner.subtitle);
  setText(".vote-guide-faq__banner p", t.faq.banner.body);

  const faqSectionsRoot = qs(".vote-guide-faq__sections");
  if (faqSectionsRoot) {
    faqSectionsRoot.innerHTML = t.faq.sections
      .map(
        (section) => `
          <section class="vote-guide-faq__section">
            <div class="vote-guide-faq__titlecol">
              <h3>${escapeHtml(section.title)}</h3>
            </div>
            <div class="vote-guide-faq__contentcol">
              ${section.items
                .map(
                  (item) => `
                    <details class="vote-guide-faq__item">
                      <summary>${escapeHtml(item.q)}</summary>
                      <div class="vote-guide-faq__answer">
                        ${item.a.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
                      </div>
                    </details>
                  `
                )
                .join("")}
            </div>
          </section>
        `
      )
      .join("");
  }

  const recapRoot = qs(".vote-guide-faq__recap");
  if (recapRoot) {
    recapRoot.innerHTML = `
      <div class="vote-guide-faq__recap-header">
        <span class="section-kicker">${escapeHtml(t.faq.recap.kicker)}</span>
        <h3>${escapeHtml(t.faq.recap.title)}</h3>
        <p>${escapeHtml(t.faq.recap.body)}</p>
      </div>
      <div class="vote-guide-faq__recap-steps">
        ${t.faq.recap.steps
          .map(
            (step) => `
              <article class="vote-guide-faq__recap-step">
                <strong>${escapeHtml(step.number)}</strong>
                <div>
                  <h4>${escapeHtml(step.title)}</h4>
                  <p>${escapeHtml(step.text)}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <div class="vote-guide-faq__recap-notes">
        ${t.faq.recap.notes
          .map(
            (note) => `
              <div class="vote-guide-faq__recap-note">
                <strong>${escapeHtml(note.label)}</strong>
                <span>${escapeHtml(note.text)}</span>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="vote-guide-faq__recap-warning">
        <strong>${escapeHtml(t.faq.recap.warning.label)}</strong>
        <span>${escapeHtml(t.faq.recap.warning.text)}</span>
      </div>
    `;
  }

  setText(".vote-guide-note p", t.note);

  setText(".site-footer__connect-copy span", t.footer.connectTitle);
  setText(".site-footer__connect-copy p", t.footer.connectBody);
  qsa(".site-footer__connect-links .footer-contact").forEach((card, index) => {
    const item = t.footer.cards[index];
    if (!item) return;
    setText("strong", item.title, card);
    setText("small", item.small, card);
  });

  const footerMeta = qs(".site-footer__meta p");
  if (footerMeta) {
    footerMeta.textContent = t.footer.copyright.replace("YEAR", String(new Date().getFullYear()));
  }

  const scrollTopButton = qs("[data-scroll-top]");
  if (scrollTopButton) {
    scrollTopButton.setAttribute("aria-label", t.footer.backToTop);
    const scrollTopLabel = qsa("span", scrollTopButton)[1];
    if (scrollTopLabel) scrollTopLabel.textContent = t.footer.backToTop;
  }

  setText(".cookie-notice__copy strong", t.cookie.title);
  setText(".cookie-notice__copy p", t.cookie.body);
  setText(".cookie-notice__link", t.cookie.link);
  setText(".cookie-notice__button", t.cookie.button);

  setText(".site-bottombar__meta a", t.footer.privacy);
  setText(".site-bottombar__meta span", `${t.footer.committenteLabel}: Linda Genre`);
})();
