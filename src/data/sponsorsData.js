export const sponsors = {
  platinum: [
    { name: "Serverless Guru", url: "https://www.serverlessguru.com/", image: "../assets/img/Logo-Serverless-Guru.svg" }, s
  ],
  gold: [
    { name: "Elastic", url: "https://elastic.co", image: "../assets/img/logo-elastic.png" },
  ],
  community: [
    { name: "Cadmus", url: "https://cadmus.com.br/", image: "../assets/img/logo-cadmus.png" },
  ],
  apoio: [
    { name: "Sem Servidor", url: "https://semservidor.com.br/", image: "../assets/img/logo-sem-servidor.jpeg" },
  ]
};

export const hasSponsors = Object.values(sponsors).some(level => level.length > 0);
//export const hasSponsors = false;
