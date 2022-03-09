//Menu DOM
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
const links = document.querySelectorAll('.menu-link')
links.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// Speakers dynamic load
const speakers = [
  {
    name: 'Cristiano Ronaldo',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './images/cristiano.webp',
    alt: 'Photo by Christopher Campbell on Unsplash',
  },
  {
    name: 'Lionel Messi',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './images/messi.jpg',
    alt: 'Photo by Nicoles Horn on Unsplash',
  },
  {
    name: 'Lebron James',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './images/lebron.jpg',
    alt: 'Photo by Aatik Tsneem on Unsplash',
  },
  {
    name: 'Azizat Oshoala',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './images/Azizat.jfif',
    alt: 'Photo by Christopher Campbell on Unsplash',
  },
  {
    name: 'Jack Hugh',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './images/jack.jpg',
    alt: 'Photo by Jack Finnigan on Unsplash',
  },
  {
    name: 'Lavanya',
    proffession:
      'Berkman professor of Entreneurial Legal studies at harvard Law school',
    description:
      ' bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school',
    photo: './images/Lavanya.jpg',
    alt: 'Photo by Tamarcus Brown on Unsplash',
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

function removeMore () {
  moreBtn.classList.add('display-none')
}
const moreBtn = document.querySelector('.more')
moreBtn.addEventListener('click', openMore);
moreBtn.addEventListener('click', removeMore);

