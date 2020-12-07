class TriviaGameShow {
    constructor(element, options ={}){
    }

    startGame(){
        this.updateScore();

        this.fetchCategories();
    }

    updateScore(change = 0) {
        $(".score-count").append(change);
   }

async fetchCategories () {

        let CategoryIds= [ 1892, 4483, 88, 218];
        
        for(let category of CategoryIds){
   
            const fetchCluesReq = await axios.get(`http://jservice.io/api/category?id=${category}`)
            console.log(fetchCluesReq.data.title)
            let column = document.createElement("div");
            column.classList.add("column");
            column.innerHTML = `<header>${fetchCluesReq.data.title}</header><ul></ul>`
            let clue = fetchCluesReq.data.clues;
            for(let i = 0; i < 5; i++){
                console.log(clue[i])
                const ulClues = column.querySelector("ul");
                ulClues.innerHTML += `<li><button data-clue-id=${clue[i].id}>${clue[i].value}</button></li>`
                $(".board").append(column);
            }

        }
        
    }

}



const game = new TriviaGameShow(document.querySelector(".app"), {})
game.startGame();
// game.fetchClues(categories);