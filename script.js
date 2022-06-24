// Your JS goes here
/*
* Each tile should be a `div`
* Each tile's width is `11.1%`
* Set each tile's `float` property to `left`
* Each tile's paddingBottom is `11.1%` */
checkerBoard()
function checkerBoard(){

const body = document.body;

for(let i = 1; i <= 8; i++){
    for(let j = 1; j <= 8; j++){
    
        //create random color
        let random = Math.ceil(Math.random() * 255);
        let random1 = Math.ceil(Math.random() * 255);
        let random2 = Math.ceil(Math.random() * 255);
        
        //const row = document.createElement('div');
        const tile = document.createElement('div');
        tile.style.float = 'left';
        tile.style.width = '12.5%';
        tile.style.paddingBottom = '12.5%';
        tile.style.backgroundColor = `rgb(${random},${random1}, ${random2})`
        //tile.style.borderBlockColor = "1px black"
        //const row = document.createElement('div');

        body.append(tile);
        //ow.append(tile);
        //body.append(row);asd
        //console.log(row)
        
    
        // if(j % 2 === 0 && i % 2 === 0){
        //     tile.style.backgroundColor = 'black';          
        //  }else if(j % 2 === 0 && i % 2 === 1){
        //     tile.style.backgroundColor = 'red';
        // }else if(j % 2 === 1 & i % 2 === 0){
        //     tile.style.backgroundColor = 'red';
        // }else{
        //     tile.style.backgroundColor = 'black';
        // }
       
        }
    }
}
// finished product
