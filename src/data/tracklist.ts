export interface Track {
  id: number
  title: string
  artist: string
  audioUrl: string
  imageUrl: string
  letter: string
  color: string
}

// ╔══════════════════════════════════════════════════════════════════╗
// ║              COMO ADICIONAR AS MÚSICAS                          ║
// ╠══════════════════════════════════════════════════════════════════╣
// ║                                                                  ║
// ║  1. Baixe os mp3 das músicas (YouTube, Spotify ripper, etc)     ║
// ║  2. Coloque os arquivos na pasta:  public/audio/                 ║
// ║  3. Use EXATAMENTE os nomes abaixo (letras minúsculas, hifens)  ║
// ║                                                                  ║
// ║  NOME DO ARQUIVO             MÚSICA                             ║
// ║  ─────────────────────────── ──────────────────────────────     ║
// ║  01-ceu-azul.mp3             Céu Azul – Charlie Brown Jr.       ║
// ║  02-beautiful.mp3            Beautiful – Black Alien            ║
// ║  03-como-tudo-deve-ser.mp3   Como Tudo Deve Ser – CBJr          ║
// ║  04-pitty.mp3                P.I.T.T.Y. – NandaTsunami          ║
// ║  05-pontos-de-aura.mp3       Pontos de Aura – NandaTsunami      ║
// ║  06-pq-vc-nao-me-liga.mp3    Pq Vc Não Me Liga? – NandaTsunami  ║
// ║  07-extraordinaria.mp3       Extraordinária – Ebony             ║
// ║  08-pensamentos-intrusivos.mp3  Pensamentos Intrusivos – Ebony  ║
// ║  09-festa-do-pijama.mp3      Festa do Pijama – Ebony ft. Urias  ║
// ║  10-set-ajc2.mp3             Set AJC2 – Ajuliacosta             ║
// ║  11-brutas-amam.mp3          Brutas Amam... – Ajuliacosta       ║
// ║  12-novo-testamento.mp3      Novo Testamento – Ajuliacosta      ║
// ║                                                                  ║
// ║  As fotos já estão no lugar certo em public/photos/             ║
// ║  Não precisa mexer nelas.                                        ║
// ╚══════════════════════════════════════════════════════════════════╝

export const tracklist: Track[] = [
  {
    id: 1,
    title: "CÉU AZUL",
    artist: "Charlie Brown Jr.",
    audioUrl: "/audio/01-ceu-azul.mp3",
    imageUrl: "/photos/ceu-azul.jpeg",
    color: "#FF3B3B",
    letter: `Amor,

Toda vez que escuto "Céu Azul", eu lembro do dia que te conheci. Era como se o mundo parasse e tudo ficasse azul. Aquele azul bonito de tarde de verão.

Você é meu céu azul, sabia? Mesmo nos dias cinzas, você traz cor pra minha vida. O Chorão cantava sobre não ter medo do escuro, e eu não tenho mais — porque você é a minha luz.

Quero que essa música te lembre que, não importa o que aconteça, eu vou estar aqui. Segurando sua mão, olhando pro mesmo céu.

Te amo infinito,
Seu ❤️`
  },
  {
    id: 2,
    title: "BEAUTIFUL",
    artist: "Black Alien",
    audioUrl: "/audio/02-beautiful.mp3",
    imageUrl: "/photos/beautiful.jpeg",
    color: "#FFD93D",
    letter: `Minha vida,

"Beautiful" é nossa vibe. Aquela batida que faz a gente querer dançar junto na cozinha às 3 da manhã.

Quando o Black Alien fala sobre beleza, eu só consigo pensar em você. Não só a beleza que todo mundo vê — o seu sorriso, seus olhos, seu jeito. Mas a beleza que é só minha.

Você me faz querer ser melhor. Você me faz ver beleza em tudo.

Beautiful é você. Sempre foi.

Com todo meu amor,
Seu eterno admirador 💛`
  },
  {
    id: 3,
    title: "COMO TUDO DEVE SER",
    artist: "Charlie Brown Jr.",
    audioUrl: "/audio/03-como-tudo-deve-ser.mp3",
    imageUrl: "/photos/como-tudo-deve-ser.jpeg",
    color: "#60A5FA",
    letter: `Amor da minha vida,

Essa música é sobre aceitar a vida como ela é. E sabe o que eu percebi? A vida ficou exatamente "como tudo deve ser" quando você chegou nela.

Antes de você, eu vivia correndo, buscando algo que nem sabia o que era. Aí você apareceu e tudo fez sentido. É como se todas as peças do quebra-cabeça se encaixassem.

Você é meu destino. Meu "como tudo deve ser".

Te amo demais,
Seu pra sempre 🖤`
  },
  {
    id: 4,
    title: "P.I.T.T.Y.",
    artist: "NandaTsunami",
    audioUrl: "/audio/04-pitty.mp3",
    imageUrl: "/photos/pitty.jpeg",
    color: "#A78BFA",
    letter: `Meu amor,

Nanda Tsunami tem uma coragem de se colocar no mundo que me lembra muito você. Sem filtro, sem medo — do jeito que é.

Essa música foi a primeira vez que eu te ouvi falar sobre ela e desde então ficou grudada na minha cabeça junto com a sua lembrança.

Você tem essa mesma energia: autêntica, intensa, impossível de ignorar.

Completamente seu,
❤️`
  },
  {
    id: 5,
    title: "PONTOS DE AURA",
    artist: "NandaTsunami",
    audioUrl: "/audio/05-pontos-de-aura.mp3",
    imageUrl: "/photos/pontos-de-aura.jpeg",
    color: "#34D399",
    letter: `Vida,

"Pontos de Aura" — cada vez que toco em você, sinto exatamente isso. Como se você irradiasse uma energia que só eu consigo sentir perto.

Você tem uma aura que transforma qualquer ambiente. Entra em um lugar e tudo muda. Eu mudo.

Obrigado por me deixar sentir essa energia todo dia.

Sempre seu,
❤️`
  },
  {
    id: 6,
    title: "PQ VC NÃO ME LIGA?",
    artist: "NandaTsunami",
    audioUrl: "/audio/06-pq-vc-nao-me-liga.mp3",
    imageUrl: "/photos/pq-vc-nao-me-liga.jpeg",
    color: "#FB923C",
    letter: `Minha flor,

Essa música virou piada interna nossa, né? Porque eu nunca deixei de ligar. Ligo sempre, toda hora, qualquer desculpa.

E se um dia demorar pra ligar — pode ter certeza que tô pensando em você do mesmo jeito.

Sempre com vontade de ouvir sua voz,
Seu 📱`
  },
  {
    id: 7,
    title: "EXTRAORDINÁRIA",
    artist: "Ebony",
    audioUrl: "/audio/07-extraordinaria.mp3",
    imageUrl: "/photos/extraordinaria.jpeg",
    color: "#F472B6",
    letter: `Amor,

Extraordinária. É a palavra que eu usaria pra te descrever se tivesse que escolher só uma.

Ebony canta sobre ser fora do comum, e você é exatamente isso. Não tem como te colocar em caixinhas, não tem como te definir com uma palavra só.

Te amo no seu tamanho inteiro,
Seu 💋`
  },
  {
    id: 8,
    title: "PENSAMENTOS INTRUSIVOS",
    artist: "Ebony",
    audioUrl: "/audio/08-pensamentos-intrusivos.mp3",
    imageUrl: "/photos/pensamentos-intrusivos.jpeg",
    color: "#FF3B3B",
    letter: `Meu tudo,

Sabe esses pensamentos que aparecem do nada, sem permissão? Os meus são todos sobre você.

No meio do trabalho, no trânsito, tentando dormir — você aparece. É invasão mesmo. E eu não quero resistir.

Continue invadindo meus pensamentos,
❤️‍🔥`
  },
  {
    id: 9,
    title: "FESTA DO PIJAMA",
    artist: "Ebony feat. Urias",
    audioUrl: "/audio/09-festa-do-pijama.mp3",
    imageUrl: "/photos/festa-do-pijama.jpeg",
    color: "#F9A8D4",
    letter: `Amor,

Essa é sobre os meus momentos favoritos com você: quando a gente não precisa ir a lugar nenhum, quando o nosso mundo é a gente dois num espaço só.

Nenhuma festa, nenhum rolê supera ficar com você. Em pijama, assistindo qualquer coisa, fazendo nada — é perfeito.

Com o coração cheio,
Seu 🌟`
  },
  {
    id: 10,
    title: "SET AJC2",
    artist: "Ajuliacosta",
    audioUrl: "/audio/10-set-ajc2.mp3",
    imageUrl: "/photos/set-ajc2.jpeg",
    color: "#FACC15",
    letter: `Minha linda,

Ajuliacosta tem esse flow que não para — e você também. Você não para, não descansa, não deixa pra depois. É força o tempo todo.

Esse set me lembra quando a gente tava junto e você cantava junto sem perceber. Você não sabe como fica bonita quando faz isso.

Te observando com admiração e amor,
Seu 🌹`
  },
  {
    id: 11,
    title: "BRUTAS AMAM, CHORAM E SENTEM RAIVA",
    artist: "Ajuliacosta",
    audioUrl: "/audio/11-brutas-amam.mp3",
    imageUrl: "/photos/brutas-amam.jpeg",
    color: "#FF3B3B",
    letter: `Vida,

Esse álbum é sobre ser inteira — com força e com vulnerabilidade ao mesmo tempo. É sobre não ter que escolher entre ser forte e ser sensível.

E é exatamente assim que eu te vejo. Você não precisa ser só uma coisa. Pode ser tudo.

Amo cada parte sua — a bruta e a que chora,
❤️`
  },
  {
    id: 12,
    title: "NOVO TESTAMENTO",
    artist: "Ajuliacosta",
    audioUrl: "/audio/12-novo-testamento.mp3",
    imageUrl: "/photos/novo-testamento.jpeg",
    color: "#A3E635",
    letter: `Meu amor,

Novo testamento — nova fase, nova história. É isso que a gente tem: uma história que ainda tá sendo escrita, a melhor parte ainda por vir.

Cada capítulo com você é melhor que o anterior. E eu mal posso esperar pelos próximos.

Escrevendo nossa história com você,
💛`
  },
]
