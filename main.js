const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

/* pop up */

const myWork = [{
  workinfo: {
    name: 'Tonic ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'img/work1.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2022',
    tech: ['Codekit', 'GitHub', 'Javascript'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
},
{
  workinfo: {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'img/work2.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2015',
    tech: ['html', 'css', 'Javascript'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
},
{

  workinfo: {
    name: 'Tonic ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'img/work3.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2015',
    tech: ['html', 'css', 'Javascript'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
},
{
  workinfo: {
    name: 'Tonic ',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: 'img/work5.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2015',
    tech: ['html', 'css', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },
},
];

const foundvalue = 3;
// //display title dynamically
const title = document.getElementById('m-w-title');
const h3 = document.createElement('h3');
h3.textContent = myWork[foundvalue].workinfo.name;

title.append(h3);

// display wimage dynamically
const wimage = document.getElementById('featuredImage');
const img = document.createElement('img');
img.src = myWork[foundvalue].workinfo.featuredImage;

wimage.append(img);

// display author description dynamically
const author = document.getElementById('w-description');
const h4 = document.createElement('h4');
h4.textContent = myWork[foundvalue].workinfo.author;

author.append(h4);

const type = document.getElementById('w-description');
const litype = document.createElement('li');
litype.textContent = myWork[foundvalue].workinfo.type;

type.append(litype);

const year = document.getElementById('w-description');
const liyear = document.createElement('li');
liyear.textContent = myWork[foundvalue].workinfo.year;

year.append(liyear);

const ptext = document.getElementById('p-description');
const p = document.createElement('p');
p.textContent = myWork[foundvalue].workinfo.description;

ptext.append(p);

for (let i = 0; i < myWork[foundvalue].workinfo.tech.length; i += 1) {
  const litech = document.getElementById('li-tech');
  const li = document.createElement('li');
  li.textContent = myWork[foundvalue].workinfo.tech[i];
  litech.append(li);
}

// // //lab ends

window.localStorage.setItem('myWork', JSON.stringify(myWork));

const project = document.getElementById('project');
const btns = document.getElementsByClassName('work-btn');
const close = document.getElementsByClassName('close')[0];

for (let i = 0; i < btns.length; i += 1) {
  btns[i].onclick = function () {
    project.style.display = 'block';
  };
}

close.onclick = function () {
  project.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target === project) {
    project.style.display = 'none';
  }
};

/*jsdfghdgjh */

const items = [
  {
    id: 1,
    name: 'Tonic ',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featuredImage: 'img/work1.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2022',
    tech: ['Codekit', 'GitHub', 'Javascript'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },

  {

    name: 'Multi-Post Stories',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featuredImage: 'img/work2.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2015',
    tech: ['html', 'css', 'Javascript'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },

  {
    name: 'Tonic ',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featuredImage: 'img/work3.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2015',
    tech: ['html', 'css', 'Javascript'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },

  {
    name: 'Tonic ',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featuredImage: 'img/work4.png',
    author: 'Canopy',
    type: 'Back End Dev',
    year: '2015',
    tech: ['html', 'css', 'Javascript'],
    liveLink: 'https://htetnaing0814.github.io/Portfolio/',
    sourceLink: 'https://github.com/HtetNaing0814/Portfolio',
  },

];

for (let i = 0; i < items.length; i += 1) {
  let li = '';
  for (let k = 0; k < items[i].tech.length; k += 1) {
    li += `<li>${items[i].tech[k]}</li>`;
  }
  if(i%2 ===1){
    const data = document.createElement('div');
  data.classList.add('work-items');
  data.innerHTML = `
         <div class="work reverse">
            <div class="image">
              <img src="${items[i].featuredImage}" alt=" " /> 
            </div>
            <div class="details">
                    <h3>
                    ${items[i].name}
                    </h3>
                <div class="w-description">
                <h4>${items[i].author}</h4>
                <ul>
                  <li>${items[i].type}</li>
                  <li>${items[i].year}</li>
                </ul>
                </div>
                <div class="read-more">
                <p>
                 ${items[i].description}
                </p>
              </div>
              <div class="tech-used">
                 <ul>
                    ${li}
                  </ul>
              </div>
                <div class="button">
                <button id="${items[i].id}"class="work-btn" type='button' onclick=test() >See Project</button>
                </div>
         </div>
         </div>
    `;

  document.querySelector('.work_section').appendChild(data);
  }

  if(i%2 ===0){
    const data = document.createElement('div');
  data.classList.add('work-items');
  data.innerHTML = `
         <div class="work">
            <div class="image">
              <img src="${items[i].featuredImage}" alt=" " /> 
            </div>
            <div class="details">
                    <h3>
                    ${items[i].name}
                    </h3>
                <div class="w-description">
                <h4>${items[i].author}</h4>
                <ul>
                  <li>${items[i].type}</li>
                  <li>${items[i].year}</li>
                </ul>
                </div>
                <div class="read-more">
                <p>
                 ${items[i].description}
                </p>
              </div>
              <div class="tech-used">
                 <ul>
                    ${li}
                  </ul>
              </div>
                <div class="button">
                <button id="${items[i].id}"class="work-btn" type='button' onclick=test() >See Project</button>
                </div>
         </div>
         </div>
    `;

  document.querySelector('.work_section').appendChild(data);
  }
  
}


let test = () => {
  project.style.display = 'block';
}