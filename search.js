const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "78a198c0edmshfc7972957faa84cp1060fejsn663dc93fdacd",
        "X-RapidAPI-Host": "youtube-v38.p.rapidapi.com"
    }
};

document.getElementById("search").addEventListener("click", () => {
    document.getElementById("ax").innerHTML = "";

    let input = document.getElementById("search-input").value;

    fetch(`https://youtube-v38.p.rapidapi.com/search/?q=${input}%20for%20kids&hl=en&gl=US`, options)
        .then((response) => response.json())
        .then((data) => {
            for (let i of data.contents.slice(0, 12)) {
                let card = document.createElement("div");
                card.classList.add("card");

                let imgContainer = document.createElement("div");
                imgContainer.classList.add("container");

                let image = document.createElement("img");
                image.setAttribute("src", i.image);
                imgContainer.appendChild(image);
                card.appendChild(imgContainer);

                let container = document.createElement("div");
                container.classList.add("container");

                let name = document.createElement("h5");
                name.classList.add("product-name");

                imgContainer.appendChild(name);

                card.appendChild(container);
                document.getElementById("ax").appendChild(card);

                name.innerText = i.video.title;
                image.src = i.video.thumbnails[0].url;
            }
        });
});

document.getElementById("search").click();
