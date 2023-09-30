/** @format */
const space = document.querySelector(".space");
const btn = document.querySelector(".btn");
const herifler = document.querySelector(".herifler");
const shansScreen = document.querySelector(".shans");
const screenLose = document.querySelector(".screenLose");

const hangmanGame = [
  {
    name: "genesis",
    picture: "genesis.jpg",
    song: "Illegal Alien",
    preview:
      "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8",
  },

  {
    name: "madonna",
    picture: "madonna.jpg",
    song: "Material Girl",
    preview:
      "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c",
  },

  {
    name: "todo",
    picture: "toto.jpg",
    song: "Rosanna",
    preview:
      "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317",
  },

  {
    name: "queen",
    picture: "queen.jpg",
    song: "Princes of the Universe",
    preview:
      "https://p.scdn.co/mp3-preview/b84f24300476f3d3f20056d2388cc51db2e3891f",
  },
  {
    name: "uu",
    picture: "u2.jpg",
    song: "With or Without You",
    preview:
      "https://p.scdn.co/mp3-preview/28365dff1890075c1371628371cd0e5bbff9a3a3",
  },
  {
    name: "metallica",
    picture: "metallica.jpg",
    song: "Master of Puppets",
    preview:
      "https://p.scdn.co/mp3-preview/60e6f8dab43f176dd9fb5e795d4e6459bad52e9e",
  },
  {
    name: "journey",
    picture: "journey.jpg",
    song: "Don't Stop Believin'",
    preview:
      "https://p.scdn.co/mp3-preview/21b9abd3cd2eea634e17a917196fdd5ba2e82670",
  },
  {
    name: "inxs",
    picture: "inxs.jpg",
    song: "Need You Tonight",
    preview:
      "https://p.scdn.co/mp3-preview/61b17a335d5afc1c4086b1b08e2400f0da147977",
  },
  {
    name: "poison",
    picture: "poison.jpg",
    song: "Fallen Angel",
    preview:
      "https://p.scdn.co/mp3-preview/0365ad1f152f1834b42b857c4625191cebf9f987",
  },
  {
    name: "rush",
    picture: "rush.jpg",
    song: "Limelight",
    preview:
      "https://p.scdn.co/mp3-preview/154987dfb07f2fc5ed7aa4d76b80c5dc08ff4d6b",
  },
  {
    name: "blondie",
    picture: "blondie.jpg",
    song: "Call Me",
    preview:
      "https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90",
  },
];

// !--------------------------------------------------------------
let clickUser = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let randomIndexHangman = Math.floor(Math.random() * 10);
let randomTextHangman = hangmanGame[randomIndexHangman].name;
let spaceScreen = [];
let shans = 10;
let sehfSecilmishHerifler = [];
let result = [];
let bool = true;

window.addEventListener("keyup", (e) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (e.key.toLocaleLowerCase() == alphabet[i]) {
      clickUser = e.key.toLocaleLowerCase();
      if (bool) {
        herifleriYoxlamaFunc(clickUser, randomTextHangman);
      }
    }
  }
});

function herifleriYoxlamaFunc(user, komp) {
  if (shans) {
    shans--;
    shansScreen.innerHTML = shans;
  }
  if (shans !== 0) {
    for (let i = 0; i < komp.length; i++) {
      if (result == komp && shans !== 0) {
        bool = false;
        let container = document.createElement("div");
        let text = document.createElement("h1");
        let theEnd = "You Won :))";
        container.append(text);
        text.append(theEnd);
        console.log(container);
        screenLose.innerHTML = container.outerHTML;
        return;
      }
      if (user == komp[i]) {
        spaceScreen.splice(i, 1, komp[i]);
        result = space.innerHTML = spaceScreen.join("").toLowerCase();
      } else if (user !== komp[i]) {
        sehfSecilmishHerifler.push(user.toUpperCase());
        let a = [...new Set(sehfSecilmishHerifler)];
        herifler.innerHTML = a;
      }
    }
  } else {
    bool = false;
    let container = document.createElement("div");
    let text = document.createElement("h1");
    let theEnd = "The End";
    container.append(text);
    text.append(theEnd);
    console.log(container);
    screenLose.innerHTML = container.outerHTML;
    return;
  }
}

function randomTextFunc(randomTextHangman) {
  for (let i = 0; i < randomTextHangman.length; i++) {
    spaceScreen.push("-");
  }
}
randomTextFunc(randomTextHangman);
console.log("randomTextHangman:", randomTextHangman);
space.innerHTML = spaceScreen.join("");

btn.addEventListener("click", () => {
  window.location.reload();
});

// !--------------------------------------------------------------
