let para1 = document.getElementById('entier');
let para2 = document.getElementById('flottant');
let para3 = document.getElementById('non-numerique');
let para4 = document.getElementById('random');
let para5 = document.getElementById('trunc');
let para6 = document.getElementById('replace');
let op = 10;

para1.innerHTML = (parseInt(para1.innerHTML) * op).toString();

para2.innerHTML = (parseFloat(para2.innerHTML) * 10 + parseInt(para1.innerHTML)).toString();

// 3
if (isNaN(parseInt(para3.innerHTML))){
    para3.innerHTML = "0";
}

// 4 random between 0 to 100
para4.innerHTML = Math.trunc(Math.random() * 100).toString();

// 5
para5.innerHTML = Math.trunc(parseFloat(para5.innerHTML)).toString();

// 6
para6.innerHTML = para6.innerHTML.replace('world','Bataille Sylvie');
