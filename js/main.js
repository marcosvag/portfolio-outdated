const sections = document.querySelectorAll("section");
const menu = document.querySelectorAll(".menu-item");
const sects = ["home", "about", "projects", "contact"];
const pairsOfSectNav = [
  [sects[0], "nav-home"],
  [sects[1], "nav-about"],
  [sects[2], "nav-projects"],
  [sects[3], "nav-contact"],
];
let currentSection = 0;
const active = {
  add: function () {
    pairsOfSectNav[currentSection].forEach((element) => {
      document.getElementById(element).classList.add("active");
    });
  },
  remove: function () {
    pairsOfSectNav[currentSection].forEach((element) => {
      document.getElementById(element).classList.remove("active");
    });
  },
};
const moveSect = {
  ArrowLeft: function () {
    if (!currentSection) {
      active.remove();
      currentSection = pairsOfSectNav.length - 1;
      active.add();
    } else {
      active.remove();
      currentSection--;
      active.add();
    }
  },
  ArrowRight: function () {
    if (currentSection === pairsOfSectNav.length - 1) {
      active.remove();
      currentSection = 0;
      active.add();
    } else {
      active.remove();
      currentSection++;
      active.add();
    }
  },
};
document
  .querySelector("#navList")
  .addEventListener("click", changeSectionMouse);
document.body.addEventListener("keydown", changeSectionKeyboard);

function changeSectionMouse(event) {
  if (
    !event.target.classList.contains("active") &&
    event.target.classList.contains("menu-item")
  ) {
    active.remove();
    currentSection = sects.indexOf(event.target.dataset.id);
    active.add();
  }
}
function changeSectionKeyboard(event) {
  if (event.key == "ArrowLeft" || event.key == "ArrowRight" && event.composedPath()[1] !== document.querySelector("form")) moveSect[event.key]();
  console.log()
}
