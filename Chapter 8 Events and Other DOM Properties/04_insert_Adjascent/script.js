let first = document.getElementById("first");

//beforebegin
first.insertAdjacentHTML("beforebegin", '<div class="test">Before Begin</div>');

//beforeend
first.insertAdjacentHTML("beforeend", '<div class="test">Before End</div');

//afterbegin
first.insertAdjacentHTML("afterbegin", '<div class="test">After Begin</div');

//afterend
first.insertAdjacentHTML("afterend", '<div class="test">After End</div');

div.insertAdjacentHTML("beforebegin", "<p>Hello</p>");
div.insertAdjacentHTML("beforeend", "<p>Bye</p>");

first.remove();
