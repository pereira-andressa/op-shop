export const produtos = [
  {
    nome: 'Action Figure Law',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://www.dhresource.com/0x0/f2/albu/g8/M01/B5/85/rBVaVF4e3QGAH8q0AAK4O7t4LLQ491.jpg',
  },
  {
    nome: 'Action Figure Robin',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://img.joomcdn.net/ce0377ee33475ae6571b31854134fafac8bf7489_original.jpeg',
  },
  {
    nome: 'Action Figure Chopper',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://meccha-japan.com/169936-large_default/figure-tony-tony-chopper-one-piece-film-z-opening-ver-figuarts-zero.jpg',
  },
  {
    nome: 'Action Figure Katakuri',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://img.joomcdn.net/2025f1b7865eb4d69e579f3b29296ee0ff0c6358_original.jpeg',
  },
  {
    nome: 'Action Figure Usopp',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://http2.mlstatic.com/D_NQ_NP_738634-MLB32529657509_102019-O.webp',
  },
  {
    nome: 'Action Figure Luffy',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://ae01.alicdn.com/kf/H3716d016c55046e7b8e950ac7dd4a4d7v/12cm-Q-Style-One-Piece-Anime-Figure-Funny-Face-Luffy-Badly-Beaten-Face-Going-PVC-Action.jpg',
  },
  {
    nome: 'Action Figure Sabo',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://www.previewsworld.com/SiteImage/MainImage/STK675742',
  },
  {
    nome: 'Action Figure Ace',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://a-static.mlcdn.com.br/800x560/action-figure-one-piece-portgas-d-ace-bandai-banpresto/alvesbaby2/34017/f9c092e7f37f8dc623c067495084f062.jpg',
  },
  {
    nome: 'Action Figure Nami',
    preco: 84.99,
    frete: 'Grátis',
    img: 'https://geekpoint.vteximg.com.br/arquivos/ids/165838-1000-1000/action-figure-one-piece-lady-fight.jpg?v=637859760301230000',
  },
];

export const pegaItemAleatorioArray = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};
