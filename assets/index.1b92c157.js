
function display(val)
{
document.getElementById("input").value+=val

 }

function calc()
{
let x = document.getElementById("input").value
let y = eval(x)
document.getElementById("input").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("input").value = ""
}
function del() {
    var value = document.getElementById("input").value;
    document.getElementById("input").value = value.substr(0, value.length - 1);
}