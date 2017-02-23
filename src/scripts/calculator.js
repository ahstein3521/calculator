class Calculator{
	
	constructor(){
		this.expression = [];
		this.displayVal = "";
		this.powerOn = false;
		this.calculated = false;
	}

	appendDigit(digit){
		if(!this.powerOn) return;
		
		if(this.calculated){
			this.calculated = false;
			this.displayVal = "";
			this.expression = [];
		}//clear previous calculation if one exists 

		if(this.displayVal != 0 || this.displayVal == '-'){
			this.displayVal += digit;
		}else{
			this.displayVal = digit;
		}
	}
	appendExpression(operator){
		if(!Number(this.displayVal)){
			if(operator != '-') return;
			else return this.appendDigit("-")
		}
		
		if(this.calculated) this.calculated = false;

		this.expression = [...this.expression, +this.displayVal, operator];
		this.displayVal = "";
	}
	
	fitToScreen(){

	}

	togglePower(){
		this.expression = [];
		this.powerOn = !this.powerOn;
		this.calculated = false;
		this.displayVal = this.powerOn? "0" : "";
	}
	
	evaluate(){
		console.log(this,"Error");
		if(!this.expression.length || this.displayVal == "") return;
		//exit if theres no equation to calculate or the last button press was an operator

		const equation = [...this.expression, this.displayVal];
		this.displayVal = eval(equation.join(""))
		this.expression = [];
		this.calculated = true;

		//temp solution
	}

	removeDigit(){
		if(this.calculated){
			this.displayVal = "0";
			this.calculated = false;
			return
		}
		if(!this.displayVal) return;
		this.displayVal = this.displayVal.slice(0,-1); 
	}

	handleDecimal(){
		if(!this.displayVal.match(".")) this.displayVal += "."
	}
}