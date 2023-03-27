/*window.onload = function (){
	var elements = document.getElementsByTagName("button");
	var screen = document.querySelector(".screen");
	var clear =   document.getElementById('clear');
	
	for(var i=0;i<elements.length;i+=1){
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("click", calculate(i));
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	
	function addtocurrentvalue (i){
		return function(){
			if (elements[i].innerHTML === "÷") {
               screen.innerHTML  +=  "/ " ;
      }else if(elements[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   screen.innerHTML  += elements[i].innerHTML;
		   }
	  };
   }

   clear.onclick = function () {
    screen.innerHTML = '';
  }; 

 function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
};*/

const elements = document.getElementsByTagName("button");
const screen = document.getElementById("screen");
const clear = document.getElementById("clear");

for(var i = 0; i < elements.length; i++){
	if(elements[i].innerHTML === "="){
		elements[i].addEventListener("click",calculate(i))
	}else{
		elements[i].addEventListener("click",addToCurrentValue(i))
	}
}

function addToCurrentValue(i){
return  function(){
		screen.innerHTML += elements[i].innerHTML;
	
}

}
function calculate(i){
	return  function(){
		screen.innerHTML = eval(screen.innerHTML);
	}
}
clear.addEventListener("click",()=>{
	screen.innerHTML = ''
})
console.log(screen)
