"use strict";


let input_text = document.getElementById('search-text');
let search_btn = document.getElementById('search-btn');

search_btn.onclick = function() {

	let src = "https://duckduckgo.com/?q=" + input_text.value;
	window.open(src,"_self");

}

