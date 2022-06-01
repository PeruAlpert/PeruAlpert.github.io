/*
 *
 * akshay sharma 
 * fxn769@gmail.com
 * 5/7/2020
 * 
 */

var socialtags = [{
    img: "img/github.png",
    link: "https://github.com/PeruAlpert"
},
// {
// img: "img/linkedin.png",
// link: "https://www.linkedin.com/in/fgawly/"
// },
{
    img: "img/whatsapp.png",
    link: "https://wa.me/+201274932664"
}, {
    img: "img/mail.png",
    link: "mailto:peroalbert@gmail.com"
}, {
    img: "img/download.png",
    link: "PeruCV.pdf"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    element.classList.add("light-mode");
}

checkDayNight()
