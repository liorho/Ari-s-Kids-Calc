let num1, num2, operator, result;

const pressKey = function (func, id) {
   setTimeout( function(){$(`#${id}`).keypress(function (e) {
        let code = e.keyCode || e.which;
        if(code === 13) func();
    })}, 100);
}

const restartGame = () => window.location.reload(true);

// Random Number between 0-10
const randomNum = () => Math.round(Math.random() * 10);

const displayNum = (num, id) => $(`#${id}`).append(`<div>${num}</div>`);

const randomImg = function () {
    let num;
    do { num = randomNum(); }
    while (num > 7 || num === 0);
    img = `img/${num}.png`;
    return img;
}

const displayImg = function (num, id) {
    for (let i = 1; i <= num; i++) {
        let img = randomImg();
        let numImg = $(`<img src=${img}></img>`);
        $(numImg).css({
            "height": "33%",
            "width": "21%",
            "padding": "0.6vw"
        });
        $(`#${id}`).append(numImg);
    }
}

// Random Operator (+ or -) & calculating Result
const randomOperator = function () {
    let num = randomNum();
    if (num > 5) {
        operator = "+";
        result = num1 + num2;
    } else {
        operator = "-";
        result = num1 - num2;
    }
}

const displayOperator = function (operator) {
    $(`#operator`).html(operator);
}

const displayErrorMessage = function (result) {
    const errorSign = $(`<div></div>`);
    errorSign.html(`<span style="font-size:8vw">WRONG ANSWER.</span>
                    <br> THE CORRECT ANSWER IS: 
                    <span style="font-size:11vw; color:red; font-family: 'Montserrat', sans-serif">
    ${result}</span>.<br> TRY AGAIN`);
    errorSign.css({
        "width": "100vw",
        "height": "100vh",
        "background-color": "black",
        "color": "white",
        "text-align": "center",
        "font-size": "6.1vw",
        "font-family": `'Gloria Hallelujah', cursive`
    });
    $("body").html("");
    $("body").append(errorSign);

    pressKey(restartGame,"body");
    $("div").click(restartGame);
}

const displayCorrectMessage = function () {
    const correctSign = $(`<div></div>`);
    correctSign.html(`<span style="font-size:6vw;">CORRECT ANSWER !!!</span><br>
                      YOU ARE AMAZING. GO AHEAD, MAKE MY DAY (AGAIN)`);
    correctSign.css({
        "color" : "rgb(67,14,151)",
        "text-align" : "center",
        "font-size" : "4vw",
        "font-family" : `'Gloria Hallelujah', cursive`
    })
    $("body").html(``);
    $("body").append(correctSign);
    for (let i = 0; i < 6; i++) {
        let img = randomImg();
        let numImg = $(`<img src=${img}></img>`);
        numImg.css({
            "height" : "15%",
            "width" : "15%",
            "padding" : "0.6vw"
        })
      $("#body").append(numImg);
    }

    pressKey(restartGame, "body");
    $("div").click(restartGame);
    $("img").click(restartGame);
}

const checkUserResult = function () {
    let userResult = Number($("input").val());
    if (userResult === result) displayCorrectMessage();
    else displayErrorMessage(result);
}

setCursor = () => $('input').focus();

// ************ Operating the PROGRAM ******************

num1 = randomNum();
num2 = randomNum();

displayNum(num1, "num1_num");
displayNum(num2, "num2_num");

displayImg(num1, "num1_img");
displayImg(num2, "num2_img");

randomOperator();

displayOperator(operator);

setCursor();

// Able ENTER key to apply result
pressKey(checkUserResult, "container");