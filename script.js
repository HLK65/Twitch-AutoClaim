// ==UserScript==
// @name         AutoClaim
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatically claim twitch bonus points
// @author       hlk
// @include      https://www.twitch.tv/*
// @include      https://twitch.tv/*
// @exclude      https://www.twitch.tv/*/*
// @exclude      https://twitch.tv/*/*
// @grant        none
// inspired by https://github.com/ran-su/Netflix-marathon
// ==/UserScript==


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function find() {
    if (document.getElementsByClassName('claimable-bonus__icon').length !== 0) {
      console.log('AutoClaim: Found claimable bonus.');
      await sleep(200);
      document.getElementsByClassName('claimable-bonus__icon')[0].firstElementChild.click()
      await sleep(5*60*1000)
    }
    else {
      //console.log('AutoClaim: 404 keep looking.');
    }
}


var intervalId = window.setInterval(find, 5000);
