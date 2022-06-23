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
    
   // const row = document.createElement('div');
    //row.append(tile)
  //  body.append(row);

//if(i % 2 === 0){
   // tile.style.backgroundColor = 'black';
//}else{
    //tile.style.backgroundColor = 'red';
//}
    for(let j = 1; j <= 8; j++){
    
        //const row = document.createElement('div');
        const tile = document.createElement('div');
        tile.style.float = 'left';
        tile.style.width = '12.5%';
        tile.style.paddingBottom = '12.5%';
        
        //tile.style.borderBlockColor = "1px black"
        //const row = document.createElement('div');

        body.append(tile);
        //ow.append(tile);
        //body.append(row);
        //console.log(row)
        
    
        if(j % 2 === 0 && i % 2 === 0){
            tile.style.backgroundColor = 'black';          
        }else if(j % 2 === 0 && i % 2 === 1){
            tile.style.backgroundColor = 'red';
        }else if(j % 2 === 1 & i % 2 === 0){
            tile.style.backgroundColor = 'red';
        }else{
            tile.style.backgroundColor = 'black';
        }
       
        }
    }
}

