"use strict";
/* JavaScript 7th Edition
   Chapter 6
   Chapter case

   Order Form Code
   Author: Bijaya Kc
   Date: 10/30/2023

   Filename: assignment6.js
*/
const queryStr = location.search;
const param = new URLSearchParams(queryStr);
const num1 = parseFloat(param.get('num1')); 
const num2 = parseFloat(param.get('num2'));
const tbody = document.querySelector('tbody');

const arithmeticoperations = [
  { operation: `${num1} + ${num2}`, result: num1 + num2 },
  { operation: `${num1} - ${num2}`, result: num1 - num2 },
  { operation: `${num1} * ${num2}`, result: num1 * num2 },
  { operation: `${num1} / ${num2}`, result: num1 / num2 }
  //{ operation: `${num1} % ${num2}`, result: num1 % num2 } //only 4 needed 
];

for (let i = 0; i < arithmeticoperations.length; i++) {
  const tr = document.createElement('tr');
  const tdOperation = document.createElement('td');
  tdOperation.textContent = arithmeticoperations[i].operation;
  const tdResult = document.createElement('td');
  tdResult.textContent = arithmeticoperations[i].result;

  tr.appendChild(tdOperation);
  tr.appendChild(tdResult);
  tbody.appendChild(tr);
}
