let list;

fetch('./data.json')
    .then(response => {return response.json();})
    .then(data => {
    console.log(data.list);
    for (const i in data.list) {
        addLinkDiv(data.list[i])
    }
    })


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

function appendJSON(diction) {
    fetch('./data.json')
    .then(response => {return response.json();})
    .then(data => {
        data.list.push(diction)
        console.log(data.list);
    })

}

function ButtonTemp() {
    let aniName = prompt("Enter new anime name:","");
    if (aniName != null) {
        let aniLength = prompt("Enter the number of episodes in this anime:")
        if (aniLength != null) {
            let aniScore = prompt("Enter the mal score of this anime:")
            if (aniLength != null) {
                let aniImg = prompt("Enter a image of this anime from a link:")
                console.log(aniName + aniLength+aniScore+aniImg);
                addLinkDiv({"name":aniName,"length":aniLength,"score":aniScore,"image":aniImg})
                appendJSON({"name":aniName,"length":aniLength,"score":aniScore,"image":aniImg})
            }
        }
    }
}

