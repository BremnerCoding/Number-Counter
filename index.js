let number = 0

document.getElementById("higher").onclick = function() {
   number = document.getElementById("number").innerHTML;
   console.log(number);
   number = Number(number);
   number++;
   document.getElementById("number").innerHTML = number;
   if(number === 69) {
    window.alert("hahahha you got to the funny number");
   };
};

document.getElementById("lower").onclick = function() {
    number = document.getElementById("number").innerHTML;
    console.log(number);
    number = Number(number);
    number--;
    document.getElementById("number").innerHTML = number;
    if(number === -69) {
        window.alert("haha reverse funny number");
    };
};

document.getElementById("reset").onclick = function() {
    number = document.getElementById("number").innerHTML;
    number = Number(number);
    number = 0;
    document.getElementById("number").innerHTML = number;
 };

