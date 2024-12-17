class Tile{

    constructor(flippedClassName) {
        this.DomElement = document.createElement('div');
        this.flippedClassName = flippedClassName;

        this.DomElement.className = "tile";
        document.getElementById('app').appendChild(this.DomElement);

        this.DomElement.addEventListener('click', () => {
            this.callBack();
        })
    }

    callBack(){
        this.DomElement.classList.add(this.flippedClassName, "revealed");
        console.log('Du fik ' + this.value + ' point');
        
    }

}


class PointTile extends Tile {
    constructor () {
        super("green");
        this.value = 1;
    }

    callBack() {
        super.callBack();
        
    }
}

class BonusTile extends Tile {
    constructor () {
        super("gold");
        this.value = 10;
    }

    callBack() {
        super.callBack();
        
    }
}

class DestroyTile extends Tile {
    constructor () {
        super("red")
        this.value = 0;
    }

    callBack() {
        super.callBack();
        console.log("Destroyed!");
        
    }
}

function generateTile(amount){
    for(let i = 0; i < amount; i++){
        const randomChoice = Math.floor(Math.random() * 10);

        if (randomChoice <= 7) {
            new PointTile;
        }
        else if (randomChoice <= 9){
            new DestroyTile;
        }
        else{
            new BonusTile;
        }
    }
}

function bankPoints(){

}


generateTile(30);





// let tile1 = new DestroyTile();
// let tile2 = new PointTile();
// let tile3 = new BonusTile();



// class Green extends Tile {
//     constructor(element, event, tile, reveal) {
//         super(element, event, tile)
//         this.value = 1;
//         this.reveal = "green";
//     }
// }

// class Yellow extends Green {
//     constructor(element, event, tile, reveal) {
//         super(element, event, tile);
//         this.value = 10;
//         this.reveal = "yellow";
//     }
// }

// class Red extends Tile {
//     constructor(element, event, tile, reveal){
//         super(element, event, tile)
//         this.changeLife = changeLife;
//         this.reveal = "red";
//     }
// }