const sections = document.querySelectorAll("section");
const sectionNames = ["home", "about", "projects", "contact"];
const pairsOfSections = [
  [sectionNames[0], "nav-home"],
  [sectionNames[1], "nav-about"],
  [sectionNames[2], "nav-projects"],
  [sectionNames[3], "nav-contact"],
];
let currentSection = 0;

const activeSection = {
  add: function () {
    pairsOfSections[currentSection].forEach((element) => {
      document.getElementById(element).classList.add("active");
    });
  },
  remove: function () {
    pairsOfSections[currentSection].forEach((element) => {
      document.getElementById(element).classList.remove("active");
    });
  },
};

const moveSectionKeyboard = {
  ArrowLeft: function () {
    if (!currentSection) {
      activeSection.remove();
      currentSection = pairsOfSections.length - 1;
      activeSection.add();
    } else {
      activeSection.remove();
      currentSection--;
      activeSection.add();
    }
  },
  ArrowRight: function () {
    if (currentSection === pairsOfSections.length - 1) {
      activeSection.remove();
      currentSection = 0;
      activeSection.add();
    } else {
      activeSection.remove();
      currentSection++;
      activeSection.add();
    }
  },
};
document.querySelector("#navList").addEventListener("click", mouseEvents);
document.body.addEventListener("keydown", keyboardEvents);

function mouseEvents(event) {
  if (event.target.id == "theme") {
    switchTheme(event);
  }
  else if (
    !event.target.classList.contains("active") &&
    event.target.classList.contains("menu-item")
  ) {
    activeSection.remove();
    currentSection = sectionNames.indexOf(event.target.dataset.id);
    activeSection.add();
  }
}

function keyboardEvents(event) {
  if (event.key == "ArrowLeft" || event.key == "ArrowRight" && event.composedPath()[1] !== document.querySelector("form")) moveSectionKeyboard[event.key]();
}

function switchTheme(event) {
  document.body.classList.toggle("light-theme");
  if (event.target.classList.contains("fa-moon")) {
    event.target.classList = "fa-solid fa-sun menu-item centerXY";
  } else {
    event.target.classList = "fa-solid fa-moon menu-item centerXY";
  }
}
