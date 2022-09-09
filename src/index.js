import "./styles.css";

document.getElementById("app").innerHTML = `

`;
if (document.readyState !== "loading") {
  initializecode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializecode();
  });
}

function initializecode() {
  const addbutton1 = document.getElementById("my-button");

  addbutton1.addEventListener("click", function () {
    document.getElementById("my-button").innerHTML = console.log(
      "hello world!"
    );
    document.getElementById("my-header").innerHTML = "My notebook.";
  });

  const addbutton2 = document.getElementById("add-data");

  let clickcounter = 0;

  addbutton2.addEventListener("click", function () {
    if (clickcounter === 0) {
      const ul = document.getElementById("my-list");
      const newli = document.createElement("LI");
      newli.appendChild(document.createTextNode("dog"));
      ul.appendChild(newli);
      clickcounter++;
    } else {
      const ul = document.getElementById("my-list");
      const texts = document.getElementById("my-textarea").value;
      const newli = document.createElement("LI");
      newli.appendChild(document.createTextNode(texts));
      ul.appendChild(newli);
    }
  });
}
