/**
* Basic script for zoom thumbnail images 
* @version v1.0.0
* Copyright (c) 2021 mentamarino
* License MIT
*/

function aplyStyles_fn(TorF){
  var position = ['top', 'bottom'];
  const StylesArray = [`${position[ TorF ]}: 1px`,"position: absolute", "width: 250px","left: 50px", "border-radius: 5px", "border: white solid 5px", "z-index:99999"]
  return StylesArray.join('; ')
}

window.addEventListener("mouseover", function(evt){

    const imgPath = '/imagepath';

    if  (evt.target.attributes.src 
        && (evt.target.attributes.src).value.toString().includes(imgPath)
        && !(evt.target).classList.contains("zommie") ){

        var img_src = evt.target.attributes.src
        var tempEl = document.createElement("img");
        tempEl.setAttribute("src", img_src.value );
        tempEl.setAttribute("class", "zommie");
        tempEl.setAttribute("style",  aplyStyles_fn(0) );

        (evt.target.parentNode).appendChild(tempEl);

        var dimensions = tempEl.getBoundingClientRect();

        if(  JSON.stringify(dimensions).includes("-") || (dimensions.bottom > (window.innerHeight) ) ) {
          tempEl.removeAttribute ("style");
          tempEl.setAttribute ("style",  aplyStyles_fn(1) );
        }

    }else{
       if( document.querySelector(".zommie")  )   document.querySelector(".zommie").remove()
    }

}) 