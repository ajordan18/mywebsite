console.log("Hello World");

function myAlert(){
    console.log('THIS IS AN ALERT!');
}; 

function buttonAlert(){
    console.log('BUTTON PRESSED!');
};

function add(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2;
    console.log(result);
};