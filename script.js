// Menu DOM
const openMenu = () => {
  document.querySelector('header').classList.add('visible');
  document.querySelector('.closeBtn').classList.toggle('visible');
};
const closeMenu = () => {
  document.querySelector('header').classList.remove('visible');
  document.querySelector('.closeBtn').classList.toggle('visible');
};

document.querySelector('.fa-bars').addEventListener('click', openMenu);
document.querySelector('.closeBtn').addEventListener('click', closeMenu);
const links = document.querySelectorAll('.menu-link');
links.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// Speakers dynamic load
const speakers = [
  {
    name: 'Cristiano Ronaldo',
    proffession:
      'Professional Footballer',
    description:
      ' Cristiano Ronaldo is one of the best player to ever play the game of football. He currently plays for Manchester United Football Club in England.',
    photo: './images/cristiano.webp',
    alt: 'cristiano',
  },
  {
    name: 'Lionel Messi',
    proffession:
      'Professional Football Player',
    description:
      ' Lionel Messi is a football player whose skills and trophy cabinet speak for. He has won the mantle of best football player for a record six times',
    photo: './images/messi.jpg',
    alt: 'Messi',
  },
  {
    name: 'Lebron James',
    proffession:
      'Basket Ball Player',
    description:
      ' Lebron James is seen as the face of modern basketball game. He has won the NBA championship four times in his illustrious career',
    photo: './images/lebron.jpg',
    alt: 'Lebron',
  },
  {
    name: 'Azizat Oshoala',
    proffession:
      'Professional Football Player',
    description:
      'Azizat is a female football player from Nigeria who plays for FC Barcelona in Spain. She helps to pave the way for women in football and Sports.',
    photo: './images/Azizat.jfif',
    alt: 'Oshoala',
  },
  {
    name: 'Jack Hugh',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './images/jack.jpg',
    alt: 'Jack',
  },
  {
    name: 'Lavanya',
    proffession:
      'Sports Analyst/Advocate',
    description:
      ' Lavanya is a sports analyst with 10 years experience of sports advocating and analysis',
    photo: './images/Lavanya.jpg',
    alt: 'lavanya',
  },
];
const generateSpeaker = (speaker) => {
  const container = document.createElement('div');
  const image = document.createElement('div');
  const chess = document.createElement('img');
  const photo = document.createElement('img');
  const fullname = document.createElement('h3');
  const proffession = document.createElement('h4');
  const description = document.createElement('p');
  const information = document.createElement('div');
  container.appendChild(image);
  container.appendChild(information);
  image.appendChild(chess);
  image.appendChild(photo);
  information.appendChild(fullname);
  information.appendChild(proffession);
  information.appendChild(description);
  container.className = 'container';
  image.className = 'big-image';
  chess.className = 'chess-image';
  photo.className = 'profile-image';
  fullname.className = 'full-name';
  proffession.className = 'profession';
  description.className = 'description';
  information.className = 'information';
  document.querySelector('.speakers').appendChild(container);
  fullname.innerText = speaker.name;
  chess.src = 'images/Chess_Board.png';
  photo.src = speaker.photo;
  photo.alt = speaker.alt;
  proffession.innerText = speaker.proffession;
  description.innerText = speaker.description;
};
speakers.map((speaker, index) => {
  if (window.innerWidth <= 760) {
    if (index < 2) {
      generateSpeaker(speaker);
    }
  } else {
    generateSpeaker(speaker);
  }
  return speaker;
});

const openMore = () => {
  speakers.map((speaker, index) => {
    if (index >= 2) generateSpeaker(speaker);
    return speaker;
  });
};

const moreBtn = document.querySelector('.more');
function removeMore() {
  moreBtn.classList.add('display-none');
}
moreBtn.addEventListener('click', openMore);
moreBtn.addEventListener('click', removeMore);
