const githubBaseUrl = 'https://github.com/';
const teamMembers = [
  {
    name: 'Yevhen Martynych',
    username: 'yevhenmartynych',
  },
  {
    name: 'Viktor Svertoka',
    username: 'ViktorSvertoka',
  },
  {
    name: 'Markiian Senkiv',
    username: 'MarkiianSenkiv',
  },
  {
    name: 'Oleksandr Kopytin',
    username: 'prohodec',
  },
  {
    name: 'Dmytro Prokopenko',
    username: 'micromoleckula',
  },
  {
    name: 'Yuliia Shpylka',
    username: 'yuliiashpylkatestqa',
  },
  {
    name: 'Vladimir Kravets',
    username: 'KravetsVA',
  },
  {
    name: 'Vladyslav Plakhotniuk',
    username: 'hola2005',
  },
  {
    name: 'Anhelina Lytovchenko',
    username: 'Lytovchenkoo',
  },
  {
    name: 'Roman Lytvynenko',
    username: 'rlnolino',
  },
];

const footerLink = document.querySelector('.footer__team-member');

let currentIndex = 0;

const updFooter = () => {
  const member = teamMembers[currentIndex];
  footerLink.textContent = member.name;
  footerLink.href = `${githubBaseUrl}${member.username}`;

  currentIndex = (currentIndex + 1) % teamMembers.length;
};

updFooter();

setInterval(updFooter, 3000);
