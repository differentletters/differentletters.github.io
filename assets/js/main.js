"use strict";
"use strict";
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.height = document.querySelector('.column').offsetHeight * 2 - window.innerHeight + 'px';
});
document.querySelectorAll('.column').forEach(function (item) {
  createColumn(item, item.getAttribute('data-d'), item.getAttribute('data-s'), item.getAttribute('data-n'), item.getAttribute('data-l'));
});
window.addEventListener('scroll', function (e) {
  var scroll = window.pageYOffset / 2;
  document.querySelectorAll('.column').forEach(function (item) {
    var directionSign = item.getAttribute('data-d') == 'straight' ? '-' : '';
    var speed = item.getAttribute('data-s');
    item.style.setProperty('--slide', directionSign + scroll * speed + 'px');
  });
});

function createColumn(column, direction, speed, nums, letters) {
  for (var i = 0; i < speed * 36; i++) {
    if (nums.split(',').includes(i.toString())) {
      var idx = nums.split(',').indexOf(i.toString());
      column.innerHTML += "<div class=\"cell\">".concat(letters.split(',')[idx], "</div>");
    } else {
      // column.innerHTML += `<div class="cell">${i}</div>`
      column.innerHTML += "<div class=\"cell\">".concat(String.fromCharCode(getRandomInt(1040, 1071)), "</div>");
    }
  }

  if (direction == 'reverse') {
    column.style.bottom = 0;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}