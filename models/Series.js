export class Series {
   #id 
   #title
   #description
   #url
   #thumbnail
   #character=[]
   #creators= []
   #stories=[]
   #comic=[]


setId(id){this.#id=id}
getId(){return this.#id}

setTitle(title){this.#title=title}
getTitle(){return this.#title}


setDescription(description){this.#description=description}
getDescription(){return this.#description}


setUrl(url){this.#url=url}
getUrl(){return this.#url}


setThumbnail(thumbnail){this.#thumbnail=thumbnail}
getThumbnail(){return this.#thumbnail}


addCharacter(character){this.#character=character}
getCharacter(){return this.#character}

addCreators(creator){this.#creators=creator}
getCreators(){return this.#creators}

addStories(stories){this.#stories=stories}
getStories(){return this.#stories}


addComic(comic){this.#comic=comic}
getComic(){return this.#comic}
}