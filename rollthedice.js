"use strict"
let dice1 = document.getElementById('dice-1')
let dice2 = document.getElementById('dice-2')
let dice3 = document.getElementById('dice-3')
let dice4 = document.getElementById('dice-4')
let dice5 = document.getElementById('dice-5')
let dice6 = document.getElementById('dice-6')
let p1current = document.getElementById('p1current')
let p2current = document.getElementById('p2current')
let curplayer = 1
let plays = 0
let hold = document.getElementById('hold')


let isclicked = false
function diceheld() {
    isclicked = true
}

function DiceClick() {
    if (plays === 3 && curplayer === 1) {
        curplayer = 2
        plays = 0
        console.log('switched to player 2')
    }
    if (plays === 3 && curplayer === 2) {
        curplayer = 1
        plays = 0
        console.log('switched to player 1')
    }

    let x = Math.floor(Math.random() * 6) + 1;
    console.log('rolled number: ' + x)
    dice1.style.visibility = 'hidden'
    dice2.style.visibility = 'hidden'
    dice3.style.visibility = 'hidden'
    dice4.style.visibility = 'hidden'
    dice5.style.visibility = 'hidden'
    dice6.style.visibility = 'hidden'

    if (x === 1) {
        dice1.style.visibility = 'visible'
        if (curplayer === 2) {
            p2current.innerText = '1'
        }
        if (curplayer === 1) {
            p1current.innerText = '1'
        }
    }
    if (x === 2) {
        dice2.style.visibility = 'visible'
        if (curplayer === 2) {
            p2current.innerText = '2'
        }
        if (curplayer === 1) {
            p1current.innerText = '2'
        }
    }
    if (x === 3) {
        dice3.style.visibility = 'visible'
        if (curplayer === 2) {
            p2current.innerText = '3'
        }
        if (curplayer === 1) {
            p1current.innerText = '3'
        }
    }
    if (x === 4) {
        dice4.style.visibility = 'visible'
        if (curplayer === 2) {
            p2current.innerText = '4'
        }
        if (curplayer === 1) {
            p1current.innerText = '4'
        }
    }
    if (x === 5) {
        dice5.style.visibility = 'visible'
        if (curplayer === 2) {
            p2current.innerText = '5'
        }
        if (curplayer === 1) {
            p1current.innerText = '5'
        }
    }
    if (x === 6) {
        dice6.style.visibility = 'visible'
        if (curplayer === 2) {
            p2current.innerText = '6'
        }
        if (curplayer === 1) {
            p1current.innerText = '6'
        }
    }
    ++plays
}
