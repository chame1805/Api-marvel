import { Series } from "../models/Series.js";
import { Comic } from "../models/comic.js";
import { Creators } from "../models/creators.js";
import { Stories } from "../models/stories.js";
import { listseries } from "./dependencia.js";



const datos = document.getElementById("car-dat");
datos.addEventListener("click", function() {
    const url ="https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=4de666fa026fabff214a0a48a4247413&hash=84d969deeea2d5e6c644f83b7cb129dd";
    console.log(url);
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
       console.log(data);
       data.data.results.forEach(element => {
        let series = new Series();
        series.setId(element.id)
        series.setTitle(element.title)
        series.setDescription(element.description)
        series.setThumbnail(element.thumbnail.path + "." + element.thumbnail.extension);
       

        element.creators.items.forEach(item =>{
            let creators = new Creators()
            creators.setName(item.name)
            creators.setRole(item.role)
            series.addCreators(creators)

      
        })

        element.stories.items.forEach(element => {
            let stories = new Stories()
            stories.setName(element.name)
            stories.setType(element.type)
            series.addStories(stories)
            
        })


        element.comics.items.forEach(element => {
            let comic = new Comic()
            comic.setName(element.name)
            series.addComic(comic)
           
            

        })

        listseries.addSeries(series)
        console.log(series);


        
       });
            
            })  
        });



        const mostrar = document.getElementById("mos-dat");
        mostrar.addEventListener("click", function() {
            const cards = document.getElementById("cards");
        
            listseries.getSeries().forEach(element => {
                const divcard = document.createElement("div");
        
                // Crear elemento de imagen
                let thumbnail = document.createElement("img");
                thumbnail.src = element.getThumbnail();

                let id = document.createElement("p")
                id.innerHTML = "ID :" + element.getId()
                
                let title = document.createElement("p")
                title.innerHTML = "Title :" + element.getTitle()

                let description = document.createElement("p")
                description.innerHTML = "Description :" + element.getDescription()


                
                
                divcard.appendChild(thumbnail);
                divcard.appendChild(id)
                divcard.appendChild(title)
                divcard.appendChild(description)
                console.log(divcard);
                
                cards.appendChild(divcard);
            });
        });
        
    