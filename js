const charizard = document.querySelector('#charizard');
const blastoise = document.querySelector('#blastoise');
const venusaur = document.querySelector('#venusaur');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const grass = document.querySelector('#grass');
const blaziken = document.querySelector('#blaziken');
const swampert = document.querySelector('#swampert');
const sceptile = document.querySelector('#sceptile');
const kantoStarters = document.querySelector('#gen1');
const johtoStarters = document.querySelector('#gen2');
const hoennStarters = document.querySelector('#gen3');

document.querySelector('#kanto').addEventListener('click', kanto);
document.querySelector('#johto').addEventListener('click', johto);
document.querySelector('#hoenn').addEventListener('click', hoenn);
document.querySelector('#charizard').addEventListener('click', charTheBest);
document.querySelector('#blastoise').addEventListener('click', blastTheBest);
document.querySelector('#venusaur').addEventListener('click', venuTheBest);
document.querySelector('#fire').addEventListener('click', thyTheBest);
document.querySelector('#water').addEventListener('click', feraTheBest);
document.querySelector('#grass').addEventListener('click', megaTheBest);
document.querySelector('#blaziken').addEventListener('click', blazeTheBest);
document.querySelector('#swampert').addEventListener('click', swampTheBest);
document.querySelector('#sceptile').addEventListener('click', sceptTheBest);


function kanto(){
    kantoStarters.classList.toggle('hidden');
}
function johto(){
    johtoStarters.classList.toggle('hidden');
}
function hoenn(){
    hoennStarters.classList.toggle('hidden');
}
function charTheBest(){
    blastoise.style.display = 'none';
    venusaur.style.display = 'none';
}
function blastTheBest(){
    charizard.style.display = 'none';
    venusaur.style.display = 'none';
}
function venuTheBest(){
    charizard.style.display = 'none';
    blastoise.style.display = 'none';
}
function thyTheBest(){
   water.style.display = 'none';
   grass.style.display = 'none';
}
function feraTheBest(){
    fire.style.display = 'none';
    grass.style.display = 'none';
}
function megaTheBest(){
   fire.style.display = 'none';
    water.style.display = 'none';
}
function blazeTheBest(){
    swampert.style.display = 'none';
    sceptile.style.display = 'none';
}
function swampTheBest(){
    blaziken.style.display = 'none';
    sceptile.style.display = 'none';
}
function sceptTheBest(){
    blaziken.style.display = 'none';
    swampert.style.display = 'none';
}
