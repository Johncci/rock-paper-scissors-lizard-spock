$(document).ready(function () {

    const userScoretext = $("#userscore");
    const botScoretext = $("#botscore");
    const player = $("#player");
    const bot = $("#bot");
    const rock = $("#rock");
    const paper = $("#paper");
    const scissors = $("#scissors");
    const lizard = $("#lizard");
    const spock = $("#spock");

    let userScore = 0;
    let botScore = 0;

    botScoretext.text("0");

    paper.click(function () {
        userScoretext.text("");
    })


    rock.click(function () {
        alert("test")


    });
















});