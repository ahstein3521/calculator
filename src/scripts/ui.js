(function(){
	const screen = document.getElementById("screen");
	const buttons = document.querySelectorAll("button");
	
	const calculator = new Calculator();

	const updateDisplay = () => screen.innerHTML = `<h3>${calculator.displayVal}</h3>`
   
	function clickHandler(){
		const callback = this.dataset.onclick;
		//relevant calculator method name is stored as a data-* attribute 
		
		const args = /append/.test(callback)? this.innerText : null;
		//provide necessary args (always present within innerText) to Calculator class method
		
		calculator[callback](args);
		updateDisplay();
		//call method then update display to reflect new state
	}
	
	buttons.forEach((btn,i) => btn.addEventListener("click", clickHandler))	
}())
