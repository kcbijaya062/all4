"use strict";
/* JavaScript 7th Edition
   Chapter 6
   Chapter case

   Order Form Code
   Author: Bijaya Kc
   Date:10/31/2023

   Filename: assignment6.js
*/

const form2 = document.getElementById('create-account');
form2.onclick= function(){
    const state = document.getElementById('state');
    const agree = document.getElementById('agree');
    const membershipRadios = document.querySelectorAll("input[name='membership']");

    if (state.value === 'Choose...') {
        state.setCustomValidity('Choose a state');
    } else {
        state.setCustomValidity(''); 
    }

    if (!agree.checked) {
        agree.setCustomValidity('Please agree the terms/conditions');
    } else {
        agree.setCustomValidity(''); 
    }

    let selected = false;
    for (let i = 0; i < membershipRadios.length; i++) {
        if (membershipRadios[i].checked) {
            selected = true;
            break;
        }
    }

    if (selected) {
        form2.querySelectorAll("input[name='membership']").forEach((radio) => {
            radio.setCustomValidity('');
        });
    } else {
        form2.querySelectorAll("input[name='membership']").forEach((radio) => {
            radio.setCustomValidity('Select a membership.');
        });
    }
};
