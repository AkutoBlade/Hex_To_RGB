function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form>
    <h1>Hex To RGB</h1>
    <label>Hex Value:
    <input id="hex" type="text" placeholder="hex value">
     
    </input>
    <br>
    <br>
    </label>
    <label>Red:
         <input id="Red" type="text" placeholder="red">
         
        </input>
        </label>
        <br>
        <br>
        <label>Green:
         <input id="Green" type="text" placeholder="green">
         
        </input>
        </label>
        <br>
        <br>
        <label>Blue:
         <input id="Blue" type="text" placeholder="blue">
         
        </input>
        </label>
        <br>
        <br>
        <div id="Output" >
        </div>
        <br>
        <br>
        <button id="Button" type="button" onclick="Converter()">Converter</button>
    </form>`
    
    }
    
    Create()



const btnDisplay = document.querySelector('#Button');

function slice(hexcode,start,end){
    return hexcode.slice(start,end);
}

btnDisplay.addEventListener('click',()=>{

    let hexcode = document.querySelector('#hex').value;

    let redcode = slice(hexcode,1,3);
    let greencode = slice(hexcode,3,5);
    let bluecode = slice(hexcode,5,7);

    document.querySelector('#Red').value = parseInt(redcode, 16)
    document.querySelector('#Green').value = parseInt(greencode, 16)
    document.querySelector('#Blue').value = parseInt(bluecode, 16)
    document.querySelector('#Output').innerHTML = 'rgb(' + parseInt(redcode, 16) + ', ' + parseInt(greencode, 16) + ', ' + parseInt(bluecode, 16) + ')'

    let clrpane = document.querySelector('#Output');
    let value = 'rgb(' + parseInt(redcode, 16) + ', ' + parseInt(greencode, 16) + ', ' + parseInt(bluecode, 16) + ')';
    clrpane.style = `background-color: ${value}`;

})





// const rgbToHex = (r, g, b) =>
//   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);   RGB TO HEX

// rgbToHex(0, 51, 255);