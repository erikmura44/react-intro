"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Alien = function () {
  function Alien(name) {
    _classCallCheck(this, Alien);

    this.name = name;
  }

  _createClass(Alien, [{
    key: "blarb",
    value: function blarb() {
      return "Blarb blarb, I am " + this.name;
    }
  }]);

  return Alien;
}();

module.exports = Alien;