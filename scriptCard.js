const totalProjects = [
  {
    title: "Project CV",
    src: "./projectImage/mycv.png",
    alt: "my-cv",
    text: "This project was a fist CV project made in with HTML and CSS.",
    tech: ["html", "css"],
    code: "https://github.com/AnnaMariaC/my-cv",
    demo: "https://annamariac.github.io/my-cv/",
  },
  {
    title: "Project A complex table",
    src: "./projectImage/complextable.png",
    alt: "complex table",
    text: "This my first complex table sturcture made in HTML and CSS.",
    tech: ["html", "css"],
    code: "https://github.com/AnnaMariaC/table-2",
    demo: "https://annamariac.github.io/table-2/",
  },
  {
    title: "Project Start up",
    src: "./projectImage/Startup.png",
    alt: "startup page",
    text: "This is a start up page were I use boostrap for styling.",
    tech: ["html", "css", "boostrap"],
    code: "https://github.com/AnnaMariaC/startupPageZTM",
    demo: "https://annamariac.github.io/startupPageZTM/",
  },
  {
    title: "Project TVSeries",
    src: "./projectImage/tvseries.png",
    alt: "tv series",
    text: "This is a single page with description of TVSeries.",
    tech: ["html", "css", "boostrap"],
    code: "https://github.com/AnnaMariaC/tvseries",
    demo: "https://annamariac.github.io/tvseries/",
  },
  {
    title: "Project Portofolio",
    src: "./projectImage/portofolio.png",
    alt: "portofolio",
    text: "This is my portofolio web site.",
    tech: ["html", "css", "JavaScript"],
    code: "https://github.com/AnnaMariaC/portofolio",
    demo: "https://annamariac.github.io/portofolio/",
  },
  {
    title: "Project WeatherApp",
    src: "./projectImage/weatherapp.png",
    alt: "portofolio",
    text: "This is a wheather app made with react and the data source is https://openweathermap.org/.",
    tech: ["html", "css", "JavaScript", "React"],
    code: "https://github.com/AnnaMariaC/forecastweather",
    demo: "https://annamariac.github.io/forecastweather/",
  },
  {
    title: "Project Login/Register ",
    src: "./projectImage/login-register.png",
    alt: "portofolio",
    text: "This is a small project in React with a login and register page.",
    tech: ["html", "css", "JavaScript", "React"],
    code: "https://github.com/AnnaMariaC/assignment-react",
    demo: "https://annamariac.github.io/assignment-react/",
  },
  {
    title: "Project My Online Shop",
    src: "./projectImage/onlineshop.png",
    alt: "portofolio",
    text: "This is a complex React project with Json database were the product are show if you are login.",
    tech: ["html", "css", "JavaScript", "React"],
    code: "https://github.com/AnnaMariaC/reactFinalProject",
    demo: "https://annamariac.github.io/reactFinalProject/",
  },
];
const wrapCards = document.querySelector(".grid-wrapper");

totalProjects.forEach((project) => {
  const divBox = document.createElement("div");
  divBox.className = "box";
  wrapCards.appendChild(divBox);
  divBox.innerHTML = `
  <div class="flip-z">
    <div class="front">
      <h3>${project.title}</h3>
      <img src=${project.src} alt=${project.alt} />
    </div>
    <div class="back">
      <p>${project.text}</p>
      <h5>Build with:</h5>
      <ul id="listTech">
      <li>html</li>
      <li >css</li>
      </ul>
      <div class="down">
        <a href=${project.code}>GitHub Link</a>
        <a href=${project.demo}>Demo</a>
      </div>
    </div>
</div>

`;
});

// function addLi(totalProjects) {
//   totalProjects.forEach((project) =>
//     project.tech.forEach((tehno) => {
//       const ulTech = document.querySelector("#listTech");
//       const li = document.createElement("li");
//       ulTech.appendChild(li);
//       return (li.innerText = tehno);
//     })
//   );
// }
