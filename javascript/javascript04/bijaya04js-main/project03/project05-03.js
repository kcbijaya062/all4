"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Bijaya Kc
      Date:   10/20/2023

      Filename: project05-03.js
*/


let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";
for (let child of sourceDoc.children) {
  if (child.nodeName === heading) {
    child.innerHTML = '<a name="doclink' + headingCount + '"></a>' + child.innerHTML;

    let listItem = document.createElement("li");
    let link = document.createElement("a");
    link.textContent = child.textContent;
    link.href = "#doclink" + headingCount;
    listItem.appendChild(link);
    toc.appendChild(listItem);

    headingCount++;
  }
}
