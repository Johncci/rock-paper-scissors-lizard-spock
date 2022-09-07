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

    const options = {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        LIZARD: 3,
        SPOCK: 4,
    }

    let userScore = 0;
    let botScore = 0;

    botScoretext.text("0");

    paper.click(function () {
        playBotTurn();
    });

    scissors.click(function () {
        playBotTurn();
    });

    rock.click(function () {
        playBotTurn();
    });

    lizard.click(function () {
        playBotTurn();
    });

    spock.click(function () {
        playBotTurn();
    });

    function playBotTurn() {
        let random = Math.floor(Math.random() * 5);
        let randomOptionImage = getOptionImage(random);
        bot.attr("id", randomOptionImage);

    }

    function getOptionImage(option) {
        switch (option) {
            case options.ROCK:
                return "assets/images/rock.icon.jpg";
            case options.PAPER:
                return "assets/images/paper.icon.jpg";
            case options.SCISSORS:
                return "assets/images/scissors.icon.jpg";
            case options.LIZARD:
                return "assets/images/lizard.icon.jpg";
            case options.SPOCK:
                return "assets/images/spock..jpg";
            default:
                return "";
        }

    }


});