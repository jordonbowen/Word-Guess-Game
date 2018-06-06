words = {};
wordList = [];

main = {};
mainWordArray = [];
mainWordUArray = [];

mainLives = 4;
mainNumInWordBank = wordList.length;

mainWord = "Welcome Young Padawan";
mainWordU ="";

// Everything begins right here

mainPullWord = function(){
   mainword = wordList[(Math.floor(Math.random()*mainNumInWordBank))];
}

mainSetUnderline = function(){
    mainPullWord();
    for(i=0; i< mainWordLength; i++){
        mainWordArray[i] = mainWord.charAt(i);
    mainWordUArray[i] = "_";    
}
mainWordU = mainWordUArray.join("");
document.getElementByID("WORD").innerHTML = mainWordU;
document.getElementById("numLetters").innerHTML = mainwordLength;
}

mainUpdateLetter = function(letter){
    main.Changes = 0;
    for(i=0; i < mainWordLength; i++){
        mainWordArray[i] = mainWord.charAt(i);
        if(mainWord.charAt(i) == letter){
            mainWordUArray [i] = letter;
            mainChanges += 1;
            
        }
    }
    if(mainChanges < 1){
        mainLives -=1;
        document.getElementById("lives").innerHTML = mainLives;
    }
    mainWordU = mainWordUArray.join("");
    document.getElementById("Word").innerHTML = mainWordU;

    mainWord1 = mainWordArray.join("");
    mainWord2 = mainWordUArray.join("");

    if(mainWord1 == mainWord2){
        alert("The Force is Strong Within You");
        window.location.reload();

    }
    if(mainLives < 1){
        document.getElementById("Word").innerHTML == mainWord1;
        alert("You Disappoint Young Jedi Try Again");
        window.location.reload();
    }
}

mainPullWord();
mainSetUnderline();





wordList[0] = "";
wordList[1] = "";
wordList[2] = "";
wordList[3] = "";
wordList[4] = "";
wordList[5] = "";
wordList[6] = "";
wordList[7] = "";
wordList[8] = "";
wordList[9] = "";



wordList[0] = "vader";
wordList[1] = "anakin";
wordList[2] = "yoda";
wordList[3] = "light";
wordList[4] = "dark";
wordList[5] = "master";
wordList[6] = "padawan";
wordList[7] = "saber";
wordList[8] = "monster";
wordList[9] = "princess";

wordList[10] = "leia";
wordList[11] = "chewy";
wordList[12] = "han";
wordList[13] = "solo";
wordList[14] = "force";
wordList[15] = "darth";
wordList[16] = "sith";
wordList[17] = "empire";
wordList[18] = "republic";
wordList[19] = "rebels";


wordList[20] = "storm";
wordList[21] = "trooper";
wordList[22] = "planet";
wordList[23] = "universe";
wordList[24] = "obiwan";
wordList[25] = "emporer";
wordList[26] = "sidius";
wordList[27] = "kylo";
wordList[28] = "ren";
wordList[29] = "death";


wordList[30] = "choke";
wordList[31] = "push";
wordList[32] = "pull";
wordList[33] = "skywalker";
wordList[34] = "awaken";
wordList[35] = "last";
wordList[36] = "jedi";
wordList[37] = "order";
wordList[38] = "empire";
wordList[39] = "padme";


wordList = wordList.length;