const container = tagGenrator("div","id","mainContainer",document.body);
const input = tagGenrator ("input","class","input",mainContainer)
const calculatorContainer = tagGenrator("div","id","calculator",mainContainer,null,null,"click");
const cancelBtn = tagGenrator("button","class","cancelBtn",calculator,"AC");
const delBtn = tagGenrator("button","class","delBtn",calculator,"DEL");
const modularBtn = tagGenrator("button","class","modularBtn",calculator,"%","%");
const devideBtn = tagGenrator("button","class","devideBtn",calculator,"/","/");
const seventBtn = tagGenrator("button","class","seventBtn btn",calculator,"7","7");
const eightBtn = tagGenrator("button","class","eightBtn btn",calculator,"8","8");
const nineBtn = tagGenrator("button","class","nineBtn btn",calculator,"9","9");
const multiBtn = tagGenrator("button","class","multiBtn",calculator,"*","*");
const fourBtn = tagGenrator("button","class","fourBtn btn",calculator,"4","4");
const fiveBtn = tagGenrator("button","class","fiveBtn btn",calculator,"5","5");
const sixBtn = tagGenrator("button","class","sixBtn btn",calculator,"6","6");
const subBtn = tagGenrator("button","class","subBtn",calculator,"-","-");
const oneBtn = tagGenrator("button","class","oneBtn btn",calculator,"1","1");
const twoBtn = tagGenrator("button","class","twoBtn btn",calculator,"2","2");
const threeBtn = tagGenrator("button","class","threeBtn btn",calculator,"3","3");
const plusBtn = tagGenrator("button","class","plusBtn btn",calculator,"+","+");
const zeroBtn = tagGenrator("button","class","zeroBtn btn",calculator,"0","0");
const dZeroBtn = tagGenrator("button","class","dZeroBtn btn",calculator,"00","00");
const doutBtn = tagGenrator("button","class","doutBtn btn",calculator,".",".")
const equalBtn = tagGenrator("button","class","equalBtn",calculator,"=")


function tagGenrator(tag,attName,attValue,parent,text,value,event){
    let elemetn = document.createElement(tag);

    if(!!attName&&attValue){
        elemetn.setAttribute(attName,attValue);
    }
    if(!!parent){
        parent.append(elemetn);
    }
    if(!!text){
        elemetn.innerText = text
    }
    if(!!value){
        elemetn.value = value;
    }
    
    if(!!event){
        elemetn.addEventListener(event,eventFn)
        function eventFn(e){
            e.preventDefault();
            e.stopPropagation();
 
            
            let currentValue = e.target.value;
            
            if(e.target.tagName != "BUTTON"){
                return
            }
            console.log(e)
            
            if(Object.is(Number(currentValue),NaN)===false){
                input.value += e.target.value
            }
            

            if(e.target.classList[0]== "cancelBtn"){
                input.value = ""
            }
            let str = input.value;
            let index = str.length-1;


            if(e.target.classList[0] == "delBtn"){
                input.value = str.substring(0, str.length - 1);
            }
            else if(Object.is(Number(str[index]),NaN)===true){
                return;
            }
            

            if(e.target.classList[0] === "equalBtn"){
                if(input.value == ""){
                    input.value = "0";
                }
                input.value = eval(input.value);
            }

            if(Object.is(Number(currentValue),NaN)===true){
                input.value += e.target.value
            }
            
        }
    }
    return elemetn;
}