var count  = 0;
var List = "Abcaaddefxghi";
function vowelNumber(word){
for(var i = 0;i<=length();i++)
    if(word.indexOf([i]) == "A" || word.indexOf([i]) == "e" || word.indexOf([i]) == "O" || word.indexOf([i]) == "I")
        count++;
    console.log("The Number Of the Vowel Charcters:"+count);
}

function consonantsNumber(word){
    for(var i = 0;i<=length();i++)
    if(word.indexOf([i]) != "A" || word.indexOf([i]) != "e" || word.indexOf([i]) != "O" || word.indexOf([i]) != "I")
        console.log("The Number Of the Consonants Chars:"+count2++);
}
vowelNumber(List);
consonantsNumber(List);
