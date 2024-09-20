'use strict';

/**
 * preload
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preloaded]");

window.addEventListener("load",function (){
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});