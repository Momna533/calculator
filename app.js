
const screen = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn)=>{
	btn.addEventListener("click",()=>{
		if(btn.innerHTML === "="){
			screen.value = eval(screen.value);
		}else{
			screen.value += btn.innerHTML;
		}
	})
})
clear.addEventListener("click",()=>{
	screen.value = '';
})
screen.addEventListener("keypress",(e)=>{
	if(e.key === "Enter"){
		screen.value = eval(screen.value);
	}
})
