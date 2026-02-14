"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Bijaya Kc
      Date:   10/19/2023

      Filename: project05-02.js
*/


const images = document.getElementsByTagName("img");
const photoBucket = document.getElementById("photo_bucket");
const photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++) {
  let image = images[i];  //it is used to store clicked image as a list
  image.onclick = function () {
    if (image.parentElement.id === "photo_bucket") {
      let newItem = document.createElement("li");
      newItem.appendChild(image);
      photoList.appendChild(newItem);
    } else {
      let oldItem = image.parentElement;
      photoBucket.appendChild(image);
      oldItem.parentElement.removeChild(oldItem);
    }
  };
}
