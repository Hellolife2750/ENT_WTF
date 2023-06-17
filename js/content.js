const PAGE_TITLE = "RocoKali ENT"; //titre page onglet
const PLAY_SOUND_ON_SPACE = true; //jouer un son quand la barre d'espace est pressée
const AUDIO_PLAYED = "/res/sound/ph_sound.mp3"; //audio joué lors clic espace
const FONT_LINK = "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"; //lien google fonts de la font à charger sur la page
const USERNAME = "RocoKali"; //nom d'utilisateur affiché sur Webmail
const SHORTCUT_ICON = "/res/img/entIcon.png"; //icone de l'onglet
const MAIN_LOGO = '/res/img/entLogo.png'; //logo s'afffichant en haut à gauche de la page
const MAIN_PIC = '/res/img/ph.gif'; //image s'affichant dans la zone de messsages vide
const BG_COLOR = 'black'; //couleur de l'arrière plan
const FG_COLOR = '#FF9000'; //couleur du texte

const RELOAD_TICK = 500; //temps en ms du rafraichissement de l'extension tant que la page n'est pas complètment chargée 1000
const RELOAD_TRIES = 25; //nombre de tentatives de rafraichissement de l'extension 5

//fonction pour cliquer sur un lien automatiqquement sur la page
function clickOn(theLink) {
    if (theLink) {
        theLink.click();
    }
}

url = location.toString();
if (url.includes("https://moodle1.u-bordeaux.fr")) { //ouverture de moodle
    let connexionBtn = document.querySelector("span.login > a[href='https://moodle1.u-bordeaux.fr/login/index.php']");
    clickOn(connexionBtn);
} /*else if (url.includes("idp-ubx.u-bordeaux.fr/WMOODLE")) {// == "https://idp-ubx.u-bordeaux.fr/WMOODLE/wayf.php?entityID=https%3A%2F%2Fmoodle1.u-bordeaux.fr%2Fauth%2Fshibboleth&return=https%3A%2F%2Fmoodle1.u-bordeaux.fr%2FShibboleth.sso%2FWAYF%3FSAMLDS%3D1%26target%3Dcookie%253A1682702992_5eb0") {
    let selectBtn = document.querySelector("input[name='Select']");
    clickOn(selectBtn);
} else if (url.toString().includes("cas.u-bordeaux.fr/cas/login")) { //"https://cas.u-bordeaux.fr/cas/login?service=https%3A%2F%2Fidp-ubx.u-bordeaux.fr%2Fidp%2FAuthn%2FExtCas%3Fconversation%3De1s1&entityId=https%3A%2F%2Fmoodle1.u-bordeaux.fr%2Fauth%2Fshibboleth") {
    let idInput;
    let connectBtn;

    let timer = setInterval(function () {
        connectBtn = document.querySelector("input[name='submit']");
        idInput = document.getElementById("username");

        if (idInput) {
            clickOn(idInput)
            console.log(idInput.value)
            if (idInput.value != "") {
                clickOn(connectBtn)
                clearInterval(timer);
            }
        }
        //console.log(connectBtn)
        //console.log(idInput)
    }, 1000);

} else if (url == "https://moodle1.u-bordeaux.fr/my/") {
    let courseBtn = document.querySelector("a[href='https://moodle1.u-bordeaux.fr/course']");
    clickOn(courseBtn);
} else if (url == "https://ent.u-bordeaux.fr/uPortal/f/welcome/normal/render.uP") {
    var connectBtn;
    var idInput;

    let timer = setInterval(function () {
        connectBtn = document.querySelector("input.btn-submit");
        idInput = document.querySelector("input#username");

        if (idInput) {
            if (idInput.value != "") {
                clickOn(connectBtn)
                clearInterval(timer);
            }
        }

        console.log(connectBtn)
        console.log(idInput)
    }, 1000);

}*/else if (url.includes("https://ent.u-bordeaux.fr/uPortal/f/welcome-lo/normal/render.uP")) {//(url == "https://ent.u-bordeaux.fr/uPortal/f/welcome-lo/normal/render.uP" || url == "https://ent.u-bordeaux.fr/uPortal/f/welcome-lo/normal/render.uP?u_redirectToDefault=true") {
    var mailBtn;
    let timer = setInterval(function () {
        //var mailBtn = document.querySelector("a[href='https://webmel.u-bordeaux.fr/?app=mail&view=msg']");
        mailBtn = document.querySelector("#uPfname_mailBx a")
        //console.log(mailBtn)
        if (mailBtn) {
            mailBtn.setAttribute('target', '_self');
            clickOn(mailBtn)
            clearInterval(timer);
        }
    }, 250);
} else if (url.includes("https://webmel.u-bordeaux.fr")) {

    var bg;
    var uselessDate;
    var toursBoucle = 0;
    var shortcutIcon;
    var username;
    var audio = new Audio(chrome.runtime.getURL(AUDIO_PLAYED));

    if (PLAY_SOUND_ON_SPACE) {
        document.addEventListener("keydown", function (event) {
            if (event.code === "Space") {
                audio.play();
            }
        });
    }

    let timer = setInterval(function () {
        bg = document.getElementById('zv__TV-main__MSG');
        uselessDate = document.getElementById("DWT48");
        //console.log(bg)
        if (bg) {
            const elementsWithColor = document.querySelectorAll('*'); // sélectionne tous les éléments de la page
            const colorsToMatch = ['rgb(255, 255, 255)', "rgb(0, 124, 175)", "rgb(255, 144, 0)", "rgb(0, 90, 149)"]; // la couleur à rechercher
            const bgColorsToMatch = ["rgb(255, 144, 0)", "rgb(0, 124, 175)", "rgb(0, 90, 149)"]
            let elementsMatchingColor = [];

            elementsWithColor.forEach(element => {
                const color = getComputedStyle(element).getPropertyValue('background-color'); // obtient la couleur de texte de chaque élément
                if (colorsToMatch.includes(color)) {
                    elementsMatchingColor.push(element); // ajoute l'élément à la liste s'il correspond à la couleur recherchée
                }
            });

            elementsMatchingColor.forEach((el) => {
                el.style.backgroundColor = BG_COLOR;
                el.style.color = BG_COLOR;
            })

            elementsMatchingColor = [];

            elementsWithColor.forEach(element => {
                const color = getComputedStyle(element).getPropertyValue('color'); // obtient la couleur de texte de chaque élément
                //console.log(color)
                if (bgColorsToMatch.includes(color)) {
                    //console.log("là")
                    elementsMatchingColor.push(element); // ajoute l'élément à la liste s'il correspond à la couleur recherchée
                }
            });

            elementsMatchingColor.forEach((el) => {
                el.style.color = BG_COLOR;
                el.style.backgroundColor = BG_COLOR;
            })

            const elementsWithText = document.querySelectorAll('body *:not(script)'); // sélectionne tous les éléments qui contiennent du texte, en excluant les balises <script>
            elementsWithText.forEach(element => {
                element.style.color = FG_COLOR; // applique la couleur de texte rouge à chaque élément
                element.style.fontWeight = "bold";
                element.style.fontFamily = "Arial";
            });


            //bg.style.backgroundColor = "pink";
            bg.style.backgroundImage = `url('${chrome.runtime.getURL(MAIN_PIC)}')`;
            bg.style.backgroundRepeat = "no-repeat";
            bg.style.backgroundSize = "100% auto";

            // Sélectionne toutes les images de la page
            const logo = document.querySelector("div.ImgAppBanner")
            if (logo) {
                logo.style.backgroundImage = `url('${chrome.runtime.getURL(MAIN_LOGO)}')`;
                logo.style.backgroundRepeat = "no-repeat";
                logo.style.backgroundSize = "90% auto";
                logo.style.margin = "20px";
                //logo.remove();
            }
            //logo.innerHTML = `<img src="/troll.jpg">`;
            const images = document.querySelectorAll('img');

            const t = document.getElementById("skin_container_toast");
            //console.log(getComputedStyle(t).getPropertyValue('color'))
            //console.log(getComputedStyle(t).getPropertyValue('background-color'))
            t.style.color = "red";
            //console.log(getComputedStyle(t).getPropertyValue('color'))

            const unselessSearchBar = document.getElementById("skin_spacing_search");
            if (unselessSearchBar) {
                //uselessDate.style.display = "none";
                unselessSearchBar.remove()
            };
            //const uselessDate = document.getElementById("DWT48");

            const unselessDateContainer = document.getElementById("skin_container_tree_footer");
            const unselessDateContainer2 = document.getElementById("skin_tr_tree_footer");
            const unContainer = document.querySelector(".skin_layout_row.skin_layout_filler")
            if (uselessDate) {
                uselessDate.remove();
                //unselessDateContainer.style.display = "none";
                unselessDateContainer.remove();
                unselessDateContainer2.remove();
                unContainer.style.height = "800px !important";
            }

            // Parcourt toutes les images de la page
            images.forEach(image => {
                // Crée une nouvelle image avec l'image troll.jpg
                //const newImage = new Image();
                //newImage.src = chrome.runtime.getURL('/troll.jpg');

                // Remplace l'image d'origine par l'image troll.jpg
                //image.src = newImage.src;
            });

            shortcutIcon = document.querySelector("link[rel='SHORTCUT ICON']");
            if (shortcutIcon) {
                shortcutIcon.href = chrome.runtime.getURL(SHORTCUT_ICON);
            }

            /*var allTds = document.querySelectorAll("#ztb__TV-main_items td");

            allTds.forEach(td => {
                td.style.backgroundColor = "white";
            })*/

            var allMenusTds = document.querySelectorAll("td[id*='zb__App__']:not([id*='icon']):not([id*='dropdown'])");
            allMenusTds.forEach(td => {
                //console.log(allMenusTds);
                td.style.backgroundColor = "white";
                td.style.marginLeft = "20px";
                td.style.borderRadius = "1rem";
                td.style.paddingLeft = "20px";
                td.style.paddingRight = "20px";
            });

            allMenusTds.forEach(td => {
                td.addEventListener('mouseenter', function () {
                    td.style.backgroundColor = "black";
                });

                td.addEventListener('mouseleave', function () {
                    td.style.backgroundColor = "white";
                    td.style.marginLeft = "20px";
                    td.style.borderRadius = "1rem";
                    td.style.paddingLeft = "20px";
                    td.style.paddingRight = "20px";
                });
            });

            document.getElementById('z_userName').innerText = USERNAME;

            document.querySelector("title").innerText = PAGE_TITLE;

            changePolice();

            toursBoucle++;
            if (toursBoucle > RELOAD_TRIES) {
                clearInterval(timer);
            }

        }
    }, RELOAD_TICK);

} else if (url.includes("notes.iut.u-bordeaux.fr")) {
    let counter = 0;
    let studentPic;
    let studentPic2;
    let timer = setInterval(function () {
        studentPic = document.querySelector("img");
        studentPic2 = document.querySelector("section.etudiant img");
        let cadre = document.querySelectorAll(".etudiant");
        let h1 = document.querySelector("h1");
        if (cadre[0]) {
            //console.log(cadre)
            h1.innerText = "Relevé de taules";
            counter++;
            const newImage = new Image();
            newImage.src = chrome.runtime.getURL("res/img/troll.jpg");
            studentPic.src = newImage.src;
            //studentPic2.src = newImage.src;

            counter++;
            if (counter > RELOAD_TRIES) {
                clearInterval(timer);
            }

        }
        //console.log(studentPic)
    }, RELOAD_TICK);

} /*else if (url == "https://fr.wikipedia.org/wiki/Poule") {
    let studentPic;
    let timer = setInterval(function () {
        studentPic = document.querySelector("img");
        if (studentPic) {
            const newImage = new Image();
            newImage.src = chrome.runtime.getURL("/troll.jpg");
            studentPic.src = newImage.src;
            clearInterval(timer);
        }
        console.log(studentPic)
    }, 1000);
}*/

function changePolice() {
    /*var style = document.createElement('style');
    style.innerHTML = `
      @font-face {
        font-family: 'Ubuntu';
        src: url('${chrome.runtime.getURL('/ubuntu.ttf')}') format('truetype');
      }
      body {
        font-family: 'Ubuntu', sans-serif !important;
      }
    `;
    document.head.appendChild(style);
    document.body.style.fontFamily = 'Ubuntu';*/

    var allElements = document.querySelectorAll("*");
    /*allElements.forEach(el => {
        el.style.fontFamily = "src('ubuntu.ttf')";
    })*/

    var fontLink = document.createElement("link");
    fontLink.href = FONT_LINK;
    //fontLink.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Phudu:wght@500&family=Ubuntu:wght@300&display=swap";

    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    allElements.forEach(el => {
        el.style.fontFamily = "Ubuntu";
    })
}
