function clickOn(theLink) {
    if (theLink) {
        theLink.click();
    }
}

url = location
if (url.toString().includes("https://moodle1.u-bordeaux.fr")) {
    let connexionBtn = document.querySelector("span.login > a[href='https://moodle1.u-bordeaux.fr/login/index.php']");
    clickOn(connexionBtn);
} else if (url.toString().includes("idp-ubx.u-bordeaux.fr/WMOODLE")) {// == "https://idp-ubx.u-bordeaux.fr/WMOODLE/wayf.php?entityID=https%3A%2F%2Fmoodle1.u-bordeaux.fr%2Fauth%2Fshibboleth&return=https%3A%2F%2Fmoodle1.u-bordeaux.fr%2FShibboleth.sso%2FWAYF%3FSAMLDS%3D1%26target%3Dcookie%253A1682702992_5eb0") {
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

} else if (url.toString() == "https://moodle1.u-bordeaux.fr/my/") {
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

} else if (url == "https://ent.u-bordeaux.fr/uPortal/f/welcome-lo/normal/render.uP" || url == "https://ent.u-bordeaux.fr/uPortal/f/welcome-lo/normal/render.uP?u_redirectToDefault=true") {
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



} else if (url.toString().includes("https://webmel.u-bordeaux.fr")) {

    var bg;
    var uselessDate;
    var toursBoucle = 0;

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
                el.style.backgroundColor = "black";
                el.style.color = "black";
            })

            elementsMatchingColor = [];

            elementsWithColor.forEach(element => {
                const color = getComputedStyle(element).getPropertyValue('color'); // obtient la couleur de texte de chaque élément
                console.log(color)
                if (bgColorsToMatch.includes(color)) {
                    console.log("là")
                    elementsMatchingColor.push(element); // ajoute l'élément à la liste s'il correspond à la couleur recherchée
                }
            });

            elementsMatchingColor.forEach((el) => {
                el.style.color = "black";
                el.style.backgroundColor = "black";
            })

            const elementsWithText = document.querySelectorAll('body *:not(script)'); // sélectionne tous les éléments qui contiennent du texte, en excluant les balises <script>
            elementsWithText.forEach(element => {
                element.style.color = '#FF9000'; // applique la couleur de texte rouge à chaque élément
                element.style.fontWeight = "bold";
                element.style.fontFamily = "Arial";
            });


            //bg.style.backgroundColor = "pink";
            //bg.style.backgroundImage = `url('${chrome.runtime.getURL('/troll.jpg')}')`;

            // Sélectionne toutes les images de la page
            const logo = document.querySelector("div.ImgAppBanner")
            if (logo) {
                logo.remove();
            }
            //logo.innerHTML = `<img src="/troll.jpg">`;
            const images = document.querySelectorAll('img');

            const t = document.getElementById("skin_container_toast");
            console.log(getComputedStyle(t).getPropertyValue('color'))
            console.log(getComputedStyle(t).getPropertyValue('background-color'))
            t.style.color = "red";
            console.log(getComputedStyle(t).getPropertyValue('color'))

            const unselessSearchBar = document.getElementById("skin_spacing_search");
            if (unselessSearchBar) unselessSearchBar.remove();
            //const uselessDate = document.getElementById("DWT48");
            //if (uselessDate) uselessDate.remove()

            // Parcourt toutes les images de la page
            images.forEach(image => {
                // Crée une nouvelle image avec l'image troll.jpg
                const newImage = new Image();
                newImage.src = chrome.runtime.getURL('/troll.jpg');

                // Remplace l'image d'origine par l'image troll.jpg
                image.src = newImage.src;
            });

            toursBoucle++;
            if (toursBoucle > 5) {
                clearInterval(timer);
            }

        }
    }, 1000);

} else if (url == "https://notes.iut.u-bordeaux.fr/") {
    let counter = 0;
    let studentPic;
    let timer = setInterval(function () {
        studentPic = document.querySelector("img");
        if (studentPic) {
            counter++;
            const newImage = new Image();
            newImage.src = chrome.runtime.getURL("/troll.jpg");
            studentPic.src = newImage.src;
            counter++;
            if (counter > 5) {
                clearInterval(timer);
            }

        }
        //console.log(studentPic)
    }, 1000);

} else if (url == "https://fr.wikipedia.org/wiki/Poule") {
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
}
