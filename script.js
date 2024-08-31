let list = [];

/*
list= [{
    "name":"Kaguya-Sama",
    "length":"38",
    "score":"9",
    "image":"https://cdn.myanimelist.net/images/anime/1295/106551.jpg"
},
{
    "name":"Shirogane-Sama",
    "length":"1008",
    "score":"5.4",
    "image":"https://cdn.myanimelist.net/images/anime/1295/106551.jpg"
}]

localStorage.setItem("list", JSON.stringify(list))
*/


function saveData(){
        localStorage.setItem("list", JSON.stringify(data))
        console.log(JSON.parse(localStorage.getItem("list")))
}

function loadData(){
    data = JSON.parse(localStorage.getItem("list"));
    for (const i in data) {
        addLinkDiv(data[i])
}
}

function addLinkDiv(stuff) {
    const newLink = document.createElement("a");
    newLink.href = "https://www.google.com"

    const newDiv = document.createElement("div");
    newDiv.id = "option-div";
    newLink.appendChild(newDiv);

    const newAnimeImgDiv = document.createElement("div");
    newAnimeImgDiv.id = "option-img-div";
    newDiv.appendChild(newAnimeImgDiv);

    const newAnimeImg = document.createElement("img");
    newAnimeImg.id = "option-img";
    newAnimeImg.src = stuff["image"];
    newAnimeImgDiv.appendChild(newAnimeImg);

    const newAnimeTitle = document.createElement("h3");
    newAnimeTitle.textContent = stuff["name"];
    newAnimeTitle.id = "div-title";
    newDiv.appendChild(newAnimeTitle);

    const newAnimeInfo = document.createElement("p");
    newAnimeInfo.innerHTML = "Length: " + stuff["length"] +" episodes</br>MAL score: "+stuff["score"];
    newAnimeInfo.id = "div-contents";
    newDiv.appendChild(newAnimeInfo);

    const release_container = document.getElementById("Releases");
    release_container.appendChild(newLink);
}

function ButtonTemp() {
    let aniName = prompt("Enter new anime name:","");
    if (aniName != null) {
        let aniLength = prompt("Enter the number of episodes in this anime:")
        if (aniLength != null) {
            let aniScore = prompt("Enter the mal score of this anime:")
            if (aniLength != null) {
                let aniImg = prompt("Enter a image of this anime from a link:")
                addLinkDiv({"name":aniName,"length":aniLength,"score":aniScore,"image":aniImg});
                data.push({"name":aniName,"length":aniLength,"score":aniScore,"image":aniImg});
            }
        }
    }
}


loadData()

