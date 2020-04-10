'use strict';

(function () {
  var select = document.querySelector('.select');
  var selectCurrent = select.querySelector('.select__current');
  var selectItem = select.querySelectorAll('.select__item');

  var chooseItem = function (item) {
    var itemText = item.innerHTML;
    selectCurrent.innerHTML = itemText;
    item.removeEventListener('click', function() {
      chooseItem(item);
    });
  };

  select.addEventListener('click', function() {
    select.classList.toggle('select--opened');
    if (select.classList.contains('select--opened')) {
      select.style = 'border-radius: 4px;';
    } else {
      select.style = 'border-radius: 25px;';
    }
  });

  selectItem.forEach(function (item) {
    item.addEventListener('click', function() {
      chooseItem(item);
    });
  });
})();