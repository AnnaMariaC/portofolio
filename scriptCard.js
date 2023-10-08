// baza de date pentru proiecte
// constructor pentru declararea separata a informatiilor legate de fiecare proiect
class Project {
  constructor(title, src, alt, text, tech, code, demo) {
    this.title = title;
    this.src = src;
    this.alt = alt;
    this.text = text;
    this.tech = tech;
    this.code = code;
    this.demo = demo;
  }
}
myCV = new Project(
  "Project CV",
  "./projectImage/mycv.png",
  "my-cv",
  "This project was a fist CV project made in with HTML and CSS.",
  ["html", "css"],
  "https://github.com/AnnaMariaC/my-cv",
  "https://annamariac.github.io/my-cv/"
);
myTable = new Project(
  "Project A complex table",
  "./projectImage/complextable.png",
  "complex table",
  "This my first complex table sturcture made in HTML and CSS.",
  ["html", "css"],
  "https://github.com/AnnaMariaC/table-2",
  "https://annamariac.github.io/table-2/"
);
myStartUp = new Project(
  "Project Start up",
  "./projectImage/Startup.png",
  "startup page",
  "This is a start up page were I use boostrap for styling.",
  ["html", "css", "boostrap"],
  "https://github.com/AnnaMariaC/startupPageZTM",
  "https://annamariac.github.io/startupPageZTM/"
);
myTVSeries = new Project(
  "Project TVSeries",
  "./projectImage/tvseries.png",
  "tv series",
  "This is a single page with description of TVSeries.",
  ["html", "css", "boostrap"],
  "https://github.com/AnnaMariaC/tvseries",
  "https://annamariac.github.io/tvseries/"
);
myPortofolio = new Project(
  "Project Portofolio",
  "./projectImage/portofolio.png",
  "portofolio",
  "This is my portofolio web site.",
  ["html", "css", "JavaScript"],
  "https://github.com/AnnaMariaC/portofolio",
  "https://annamariac.github.io/portofolio/"
);
myWeatherApp = new Project(
  "Project WeatherApp",
  "./projectImage/weatherapp.png",
  "WheatherApp",
  "This is a wheather app made with react and the data source is https://openweathermap.org/.",
  ["html", "css", "JavaScript", "React"],
  "https://github.com/AnnaMariaC/forecastweather",
  "https://annamariac.github.io/forecastweather/"
);
myRegister = new Project(
  "Project Login/Register ",
  "./projectImage/login-register.png",
  "loginregister",
  "This is a small project in React with a login and register page.",
  ["html", "css", "JavaScript", "React"],
  "https://github.com/AnnaMariaC/assignment-react",
  "https://annamariac.github.io/assignment-react/"
);
myShop = new Project(
  "Project My Online Shop",
  "./projectImage/onlineshop.png",
  "onlineShop",
  "This is a complex React project with Json database were the product are show if you are login.",
  ["html", "css", "JavaScript", "React"],
  "https://github.com/AnnaMariaC/reactFinalProject",
  "https://annamariac.github.io/reactFinalProject/"
);
//o lista cu toate proiectele
totalProjects = [
  myCV,
  myTable,
  myStartUp,
  myTVSeries,
  myPortofolio,
  myWeatherApp,
  myRegister,
  myShop,
];

// containerul principal unde se adauga dinamic totul
const wrapCards = document.querySelector(".grid-wrapper");
//  iteream prin toate proiectele din baza de date cu forEach fiind vorba de un array
totalProjects.forEach((project) => {
  //crearea componentei divBox care este urmatorul container
  const divBox = document.createElement("div");
  divBox.className = "box";
  wrapCards.appendChild(divBox);
  //crearea componentei divFlip care este urmatorul container locul unde se intorc cele 2 fete ale imagini
  const divFlip = document.createElement("div");
  divFlip.className = "flip-z";
  divBox.appendChild(divFlip);
  // div pentru tot ce reprezinta fata care are ca elemente un titlu si o imagine
  const divFront = document.createElement("div");
  divFront.className = "front";
  divFlip.appendChild(divFront);
  divFront.innerHTML = `
  <h3>${project.title}</h3>
  <img src=${project.src} alt=${project.alt} />`;
  //div pentru partea din spate a imagini
  const divBack = document.createElement("div");
  divBack.className = "back";
  divFlip.appendChild(divBack);
  //contine static un titlu si o lista neordonata unde dinamic vor intra elementele din BD
  divBack.innerHTML = `<p>${project.text}</p>
     <h5>Build with:</h5>`;
  const ulTech = document.createElement("ul");
  divBack.appendChild(ulTech);
  // iteram prin lista de tehnologii folosite si adaugam fiecare intr-un li
  for (let i = 0; i < project.tech.length; i++) {
    const li = document.createElement("li");
    li.innerText = project.tech[i];
    ulTech.appendChild(li);
  }
  //ultimul container de pe parte din spate care are 2 link stilizate ca butoane
  const divDown = document.createElement("div");
  divDown.className = "down";
  divBack.appendChild(divDown);
  divDown.innerHTML = `<a href=${project.demo}>Demo</a> <a href=${project.code}>GitHub Link</a>
       `;
});
