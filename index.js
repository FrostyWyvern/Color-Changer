var hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function createHex(){
    var a = "";
    for(let i = 0; i < 6; i++){
        var randomNum = hex[Math.floor(Math.random() * hex.length)]
        a += randomNum;
    }
    return "#" + a;
}   

document.querySelector("button").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor = createHex();
    document.querySelector(".btn").textContent = createHex();
});