async function displayPokemon(){
    const x = 30;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit="+x, {method: "GET"});
    const json = await response.json();
    console.log(json);

    for(let i = 0; i < x; i++){
        const res = await fetch(json.results[i].url, {method: "GET"});
        const js = await res.json();
        console.log(js);   

        let div = document.createElement("div");
        let img = document.createElement("img");
        let number = document.createElement("span");
        let name = document.createElement("span");
        let type = document.createElement("span");

        if(js.types[0].type.name == "grass"){
            div.style.background = "#00FF00";
        }else if(js.types[0].type.name == "fire"){
            div.style.background = "#ff6b00";
        }else if(js.types[0].type.name == "water"){
            div.style.background = "#2d219b";
        }else if(js.types[0].type.name == "bug"){
            div.style.background = "#808080";
        }else if(js.types[0].type.name == "normal"){
            div.style.background = "#cfd8c0";
        }else if(js.types[0].type.name == "poison"){
            div.style.background = "#d40435";
        }else if(js.types[0].type.name == "electric"){
            div.style.background = "#e3ff00";
        }else if(js.types[0].type.name == "ground"){
            div.style.background = "#b64c2f";
        }else{
            div.style.background = "ffffff";
        }

        div.style.display = "inline-block";
        div.style.padding = "40px";
        div.style.textAlign = "center";
        div.style.marginTop = "20px";
        div.style.marginLeft = "20px";
        div.style.width = "90px";
        div.style.height = "160px";
        
        img.setAttribute("src", js.sprites.front_shiny)
        number.innerText = `${js.id}: `;
        name.innerText = js.name;
        type.innerText = `type: ${js.types[0].type.name}`;

        document.body.appendChild(div);
        div.appendChild(number);
        div.appendChild(name);
        div.appendChild(img);
        div.appendChild(type);
    }
    // return json;
}

// async function displayPikachu(){
//     const data = await fetchData();
//     console.log(data);
//     for(let i = 0; i < 30; i++){
//         const res = await fetch(data.results[i].url, {method: "GET"});
//         const js = await res.data();
//         console.log(js);         
//     }
//     let number = document.getElementById("number");
//     let name = document.getElementById("name");
//     let type = document.getElementById("type");
//     let div = document.getElementById("container");

//     div.style.background = "#FFFF00";
//     div.style.display = "inline-block";

//     number.innerHTML = `${data.id}: `;
//     name.innerHTML = data.name;
//     document.getElementById("img").src = data.sprites.front_shiny;
//     type.innerHTML = `type: ${data.types[0].type.name}`;
// }