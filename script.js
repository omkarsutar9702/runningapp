let entries = [];
const goal= 25;
const entrieswarrper= document.querySelector("#last7days");
document.querySelector("#target").innerHTML=goal;
function addnewentry(newentry) {
    entrieswarrper.removeChild(entrieswarrper.firstElementChild);
    const listitem = document.createElement("li");
    const listvalue = document.createTextNode(newentry);
    listitem.appendChild(listvalue);
    entrieswarrper.appendChild(listitem);
}

function reducer(total , currentvalue) {
    return total + currentvalue
}
function coltotal(entries) {
    const totalvalues = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerHTML = totalvalues;
    document.getElementById('totalprogress').innerHTML= totalvalues;
}

function calaverage (){
    const average = (entries.reduce(reducer) /entries.length).toFixed(1);
    document.getElementById('average').innerHTML = average;
}

function high(){
    const high = Math.max(...entries);
    document.getElementById("high").innerHTML=high;
}

function calgoals(){
    const totalvalues = entries.reduce(reducer).toFixed(1);
    const completedpercent = totalvalues /(goal / 100);
    const progesscircle = document.querySelector("#circle");
    if(completedpercent > 100) completedpercent === 100; 
    circle.style.background =`conic-gradient(#317212 ${completedpercent}%, #161616 ${completedpercent}% 100%)`;
}
function handlerSubmit(event){
    event.preventDefault();
    const entry =Number(document.querySelector("#entry").value);
    if (!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addnewentry(entry);
    coltotal(entries);
    calaverage(entries);
    high(entries);
    calgoals(entries);
}

const form = document.querySelector("form").addEventListener("submit",handlerSubmit);

