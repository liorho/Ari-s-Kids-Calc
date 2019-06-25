let num1, num2, operator, result;

// Random number between 0-10
const randomNum = function () {
    return (Math.round(Math.random() * 10));
}

// Random IMG to display
const randomImg = function () {
    let num;
    do { num = randomNum(); }
    while (num === 10 || num === 0 || num===8 || num===9);
    img = `img/${num}.png`;
    return img;
}

// Inserting NUMBER element to the DOM
const insertNum = function (num, loc) {
    const location = document.getElementById(loc);
    const numElement = document.createElement("div");
    numElement.innerHTML = num.toString();
    location.appendChild(numElement);
}

// Random operator (+ or -) and RESULT
const randomOperator = function () {
    let num = randomNum();
    if (num > 5) {
        operator = "+";
        result = num1 + num2;
    }
    else {
        operator = "-";
        result = num1 - num2;
    }
}

// Inserting the OPERATOR to the DOM
const setOperator = function (operator) {
    document.getElementById("operator").innerHTML = operator;
}


// Inserting the IMGs to the DOM
const inserImg = function (num, loc) {
    const location = document.getElementById(loc);
    for (let i = 1; i <= num; i++) {
        let img = randomImg();
        let numImg = document.createElement("img");
        numImg.src = img;
        numImg.style.height = "23%";
        numImg.style.width = "21%";
        numImg.style.padding = "0.6vw";
        location.appendChild(numImg);
    }
}

// Displaying ERROR Massage
const errorRespond = function (result) {
    const errorSign = document.createElement("div");
    errorSign.style.height = "100%";
    errorSign.style.margin = "0";
    errorSign.innerHTML = `<span style="font-size:7vw">WRONG ANSWER.</span><br> THE CORRECT ANSWER IS: <span style="font-size:11vw; color:red">` + result + "</span>.<br> TRY AGAIN";
    errorSign.style.backgroundColor = "black";
    errorSign.style.color = "white";
    errorSign.style.textAlign = "center";
    errorSign.style.fontSize = "5.5vw";
    errorSign.style.fontFamily = "'Gloria Hallelujah', cursive";
    document.body.innerHTML = '';
    document.body.appendChild(errorSign);
}

// Displaying CORRECT Massage
const correctRespond = function () {
    const correctSign = document.createElement("div");
    correctSign.style.height = "100";
    correctSign.style.margin = "0";
    correctSign.innerHTML = `<span style="font-size:6vw">CORRECT ANSWER !!!</span><br>YOU ARE AMAZING, COME ON AND MAKE MY DAY AGAIN`;
    correctSign.style.color = "rgb(67,14,151)";
    correctSign.style.textAlign = "center";
    correctSign.style.fontSize = "4vw";
    correctSign.style.fontFamily = "'Gloria Hallelujah', cursive";
    document.body.innerHTML = '';
    document.body.appendChild(correctSign);
    for (let i=0;i<6;i++){
    let img = randomImg();
    let numImg = document.createElement("img");
    numImg.src = img;
    numImg.style.height = "15%";
    numImg.style.width = "15%";
    numImg.style.padding = "0.6vw";
    numImg.style.marginRight = "auto";

    document.body.appendChild(numImg);
    }
}


// CHecking if user RESULT is true and execute a RESPOND
const checkResult = function () {
    let userResult = Number(document.getElementById("result_user").value);
    console.log(userResult)
    if (userResult === result) {
        correctRespond();
    } else {
        errorRespond(result);

    }
}

// Operating the PROGRAM

num1 = randomNum();
num2 = randomNum();

insertNum(num1, "num1_num");
insertNum(num2, "num2_num");

inserImg(num1, "num1_img");
inserImg(num2, "num2_img");

randomOperator();
setOperator(operator);


console.log(result);

// Unabling the ENTER key 
document.getElementById('container').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        checkResult();
    }
})


