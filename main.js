const aBtn = document.querySelector('.allBtn')
const tBtn = document.getElementsByClassName('.topBtn').onclick = testTrial
const bBtn = document.querySelector('.bottomBtn')
const sBtn = document.querySelector('.shoeBtn')
const assecerBtn = document.querySelector('.accessBtn')

function testTrial(btn){
    console.log(`This a test when I click this button`)
}

testTrial(tBtn)