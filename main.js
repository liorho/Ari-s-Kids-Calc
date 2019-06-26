// Declare Variables
let num1, num2, operator, result;

// Unable key queue
const enterKey = function(func, tag, keyNum){
     document.getElementById(tag).addEventListener('keypress', function (event) {
        if (event.keyCode == keyNum) {
            func();
        }
    })
}

// Restart the Game
const restartGame = () => window.location.reload(true);

// Random Number between 0-10
const randomNum = () => Math.round(Math.random() * 10);

// Display Number
const insertNum = function (num, loc) {
    const location = document.getElementById(loc);
    const numElement = document.createElement("div");
    numElement.innerHTML = num.toString();
    location.appendChild(numElement);
}

// Random IMG
const randomImg = function () {
    let num;
    do { num = randomNum(); }
    while (num === 10 || num === 0 || num === 8 || num === 9);
    img = `img/${num}.png`;
    return img;
}

// Display IMGs
const inserImg = function (num, loc) {
    const location = document.getElementById(loc);
    for (let i = 1; i <= num; i++) {
        let img = randomImg();
        let numImg = document.createElement("img");
        numImg.src = img;
        numImg.style.height = "33%";
        numImg.style.width = "21%";
        numImg.style.padding = "0.6vw";
        location.appendChild(numImg);
    }
}

// Random Operator (+ or -) & calculating Result
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

// Display OPERATOR
const setOperator = function (operator) {
    document.getElementById("operator").innerHTML = operator;
}

// Displaying ERROR Massage
const errorRespond = function (result) {
    const errorSign = document.createElement("div");
    errorSign.style.minHeight = "100%";
    errorSign.style.overflow = "auto";
    errorSign.style.top = "0";
    errorSign.style.left = "0";
    errorSign.style.bottom = "0";
    errorSign.style.right = "0";
    errorSign.style.position = "fixed";
    errorSign.style.margin = "0";
    errorSign.innerHTML = `<span style="font-size:8vw">WRONG ANSWER.</span>
                        <br> THE CORRECT ANSWER IS: 
                        <span style="font-size:11vw; color:red; font-family: 'Montserrat', sans-serif">`
        + result + "</span>.<br> TRY AGAIN";
    errorSign.style.backgroundColor = "black";
    errorSign.style.color = "white";
    errorSign.style.textAlign = "center";
    errorSign.style.fontSize = "6.1vw";
    errorSign.style.fontFamily = "'Gloria Hallelujah', cursive";

    document.body.innerHTML = '';

    document.body.appendChild(errorSign);

    enterKey(restartGame, "body", 32);
    document.getElementById("body").addEventListener("click", restartGame);
}

// Displaying CORRECT Massage
const correctRespond = function () {
    const correctSign = document.createElement("div");
    correctSign.style.height = "100";
    correctSign.style.margin = "0";
    correctSign.innerHTML = `<span style="font-size:6vw;">CORRECT ANSWER !!!</span><br>
                            YOU ARE AMAZING. GO AHEAD, MAKE MY DAY (AGAIN)`;
    correctSign.style.color = "rgb(67,14,151)";
    correctSign.style.textAlign = "center";
    correctSign.style.fontSize = "4vw";
    correctSign.style.fontFamily = "'Gloria Hallelujah', cursive";

    document.body.innerHTML = '';

    document.body.appendChild(correctSign);
    for (let i = 0; i < 6; i++) {
        let img = randomImg();
        let numImg = document.createElement("img");
        numImg.src = img;
        numImg.style.height = "15%";
        numImg.style.width = "15%";
        numImg.style.padding = "0.6vw";
        numImg.style.marginRight = "auto";
        document.body.appendChild(numImg);
    }

    enterKey(restartGame, "body", 32);
    document.getElementById("body").addEventListener("click", restartGame);
}


// Check if user RESULT is true and execute a RESPOND
const checkResult = function () {
    let userResult = Number(document.getElementById("result_user").value);
    console.log(userResult)
    if (userResult === result) {
        correctRespond();
        // Refresh();
    } else {
        errorRespond(result);
        // Refresh();
    }
}


// Set cursor 
setCursor = () => $('input').focus();




// ************ Operating the PROGRAM ******************

// Pick 2 random Numbers
num1 = randomNum();
num2 = randomNum();

// Display Numbers
insertNum(num1, "num1_num");
insertNum(num2, "num2_num");

// Display Number's Images
inserImg(num1, "num1_img");
inserImg(num2, "num2_img");

// Pick a random Operator
randomOperator();

// Display Operator
setOperator(operator);

// Set cursor 
setCursor();


// Unable ENTER key to append result
enterKey(checkResult, "container", 13);



