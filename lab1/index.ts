class MainClass {


    inputFieldNumber: number;
    constructor() {
        const inputFieldNumber: HTMLInputElement = document.querySelector('#inputFieldNumber');
        inputFieldNumber.addEventListener('input', (event: Event) => 
        { 
            const target = event.target as HTMLInputElement;
            this.inputFieldNumber = Number(target.value);
            new generateNumberInput().GenerateBody(this.inputFieldNumber);
        });
   
    }
    
}
class generateNumberInput {
    inputArray: HTMLInputElement[] =[];
     GenerateBody(inputFieldNumber: number) {
        console.log("ok");
        let mainDiv: HTMLDivElement = document.createElement("div");
        for(let i = inputFieldNumber;i>=1;i--) {

            let div: HTMLDivElement = document.createElement("div");

            let deleteBtn=<HTMLButtonElement> document.createElement("button");
            let input:HTMLInputElement = document.createElement("input");
            deleteBtn.innerText="delete";
            input.type = "number";
            div.id="MainDiv" + i;
            
            this.inputArray.push(input);
            input.addEventListener('input',() => 
            {let sum:number = 0;
                this.inputArray.forEach(element => {
                    
                        sum += Number(element.value);
                    
                    console.log(element);
                    console.log(sum);
                });
                let mathHelper = new MathHelper();
                let result = "Sum= " +sum + "<BR> Average= " + sum/this.inputArray.length +"<BR> Min=" 
                    + mathHelper.GetMinValue(this.inputArray.map(x =>Number(x.value))) + "<BR> Max= " 
                        + mathHelper.GetMaxValue(this.inputArray.map(x =>Number(x.value)));
                let rDiv =<HTMLDivElement> document.querySelector("#result");
                rDiv.innerHTML = result;
            });
            deleteBtn.addEventListener('click', () => {
                let index = this.inputArray.indexOf(input);
                this.inputArray.splice(index);
                this.GenerateBody(inputFieldNumber-1);
            });
            div.appendChild(input);
            div.appendChild(deleteBtn);
            mainDiv.appendChild(div);
        };
        console.log(mainDiv);
        let main = document.querySelector("#main");
        main.innerHTML = '';
        main.appendChild(mainDiv);
}
}
class MathHelper {
    GetMaxValue(numbers:number[]) {
        return Math.max(...numbers);
    }
    GetMinValue(numbers:number[]) {
        return Math.min(...numbers);
    }
}
new MainClass();

