'use strict';

(function () {
  ymaps.ready(init);

  function init() {
    let myMap = new ymaps.Map('ymap', {
        center: [59.93854725, 30.32301664],
        zoom: 16,
        controls: []
      },{
        suppressMapOpenBlock: true
      },{
        searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(([59.93854725, 30.32301664]), {

      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/mappin.svg',
        // Размеры метки.
        iconImageSize: [80, 80],
        // Смещение левого верхнего угла иконки относительно
        // её 'ножки' (точки привязки).
        iconImageOffset: [-47, -50]
      });
    myMap.geoObjects.add(myPlacemark);
    myMap.options.set('scrollZoomSpeed', 3);
  };
})();
