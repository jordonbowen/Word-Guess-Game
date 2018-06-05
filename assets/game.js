Words = {};
Words.List = [];

Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;
Main.NumInWordBank= Words.Length;

Main.Word = "Welcome Young Padawan";
Main.WordU="";

// Everything begins right here

Main.PullWord = function(){
    Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];
}

Main.SetUnderline = function(){
    Main.PullWord();
    for(i=0; i<Main.Word.length; i++){
        Main.WordArray[i] = Main.Word.charAt(i);
    Main.WordUArray[i] = "_";    
}
Main.WordU = Main.WordUArray.join("");
document.getElementByID("WORD").innerHTML = Main.WordU;
document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter){
    Main.Changes = 0;
    for(i=0; i<Main.Word.length; i++){
        Main.WordArray[i] = Main.Word.charAt(i);
        if(Main.Word.charAt(i) == letter){
            Main.WordUArray [i] = letter;
            Main.Changes += 1;
            
        }
    }
    if(Main.Changes < 1){
        Main.Lives -=1;
        document.getElementById("lives").innerHTML = Main.Lives;
    }
    Main.WordU = Main.WordUArray.join("");
    document.getElementById("Word").innerHTML = Main.WordU;

    Main.Word1 = Main.WordArray.join("");
    Main.Word2 = Main.WordUArray.join("");

    if(Main.Word1 == Main.Word2){
        alert("The Force is Strong Within You");
        window.location.reload();

    }
    if(Main.Lives < 1){
        document.getElementById("Word").innerHTML == Main.Word1;
        alert("You Disappoint Young Jedi Try Again");
        window.location.reload();
    }
}

Main.PullWord();
Main.SetUnderline();





Words.List[0] = "";
Words.List[1] = "";
Words.List[2] = "";
Words.List[3] = "";
Words.List[4] = "";
Words.List[5] = "";
Words.List[6] = "";
Words.List[7] = "";
Words.List[8] = "";
Words.List[9] = "";



Words.List[0] = "vader";
Words.List[1] = "anakin";
Words.List[2] = "yoda";
Words.List[3] = "light";
Words.List[4] = "dark";
Words.List[5] = "master";
Words.List[6] = "padawan";
Words.List[7] = "saber";
Words.List[8] = "monster";
Words.List[9] = "princess";

Words.List[10] = "leia";
Words.List[11] = "chewy";
Words.List[12] = "han";
Words.List[13] = "solo";
Words.List[14] = "force";
Words.List[15] = "darth";
Words.List[16] = "sith";
Words.List[17] = "empire";
Words.List[18] = "republic";
Words.List[19] = "rebels";


Words.List[20] = "storm";
Words.List[21] = "trooper";
Words.List[22] = "planet";
Words.List[23] = "universe";
Words.List[24] = "obiwan";
Words.List[25] = "emporer";
Words.List[26] = "sidius";
Words.List[27] = "kylo";
Words.List[28] = "ren";
Words.List[29] = "death";


Words.List[30] = "choke";
Words.List[31] = "push";
Words.List[32] = "pull";
Words.List[33] = "skywalker";
Words.List[34] = "awaken";
Words.List[35] = "last";
Words.List[36] = "jedi";
Words.List[37] = "order";
Words.List[38] = "empire";
Words.List[39] = "padme";


Words.Length = Words.List.length;