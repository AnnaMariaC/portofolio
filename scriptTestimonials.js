const btn = document.querySelector(".btn");
const nameInput = document.querySelector("#fullName");
const commentInput = document.querySelector("#comment");
const jobInput = document.querySelector("#jobTitle");
const wrapComment = document.querySelector(".testimonialsWrap");
const li = document.querySelectorAll("li");
let commentList = [];
// adauga testiomnial nou intr-o lista de testimoniale, fiecare testiomonial este un obiect
// si pune in local storage lista de testiomoniale
function addComment() {
  // citeste valorile scrise in inputuri si le curata de spatii libere la inceput si final daca sunt.
  const fullName = nameInput.value.trim();
  const comment = commentInput.value.trim();
  const jobTitle = jobInput.value.trim();
  // realizam obiectul care trebuie adaugat in lista  cu id, comment, fullName si jobTitle
  let id = commentList.length + 1;
  if (comment !== " ") {
    commentList.push({
      id: id,
      comment: comment,
      fullName: fullName,
      jobTitle: jobTitle,
    });
    console.log(commentList);
    //goleste imputurile
    nameInput.value = "";
    commentInput.value = "";
    jobInput.value = "";
    // salveaza in local storage  commentList cu lista de testiomoniale
    localStorage.setItem("commentList", JSON.stringify(commentList));
    appendComment();
  }
}
function appendComment() {
  //verifica daca este deja ceva salvat in local storage
  //daca exista populeaza commentList cu comentarii
  if (JSON.parse(localStorage.getItem("commentList"))?.length) {
    commentList = JSON.parse(localStorage.getItem("commentList"));
  } else {
    commentList = [];
  }
  let commentObject = {};
  // itereaza prin lista de testiomoniale pentru a le afisa pe fiecare
  for (var i = 0; i < commentList.length; i++) {
    //adaugam in pagina testiomonialul formatat
    wrapComment.innerHTML += `<ul class="wrapModel">
<li>
<span class="quote">"</span>
${commentList[i].comment}
</li>
<li class="toRight">
<p>${commentList[i].fullName}</p>
<p>${commentList[i].jobTitle}</p>
</li>
</ul>`;
  }
}
// event  pentru apasare buton
btn.addEventListener("click", () => {
  addComment();
});
//event pentru apasare tasta enter in ultimul input
jobInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    addComment();
  }
});
// pentru a verifica daca este ceva salvat in local storage si sa afisam inainte de a posta altceva
appendComment();
