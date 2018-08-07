"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _QR = require("./QR");

var _QR2 = _interopRequireDefault(_QR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QRdelight = function (_Component) {
  _inherits(QRdelight, _Component);

  function QRdelight() {
    _classCallCheck(this, QRdelight);

    return _possibleConstructorReturn(this, (QRdelight.__proto__ || Object.getPrototypeOf(QRdelight)).apply(this, arguments));
  }

  _createClass(QRdelight, [{
    key: "social",
    value: function social(data) {
      var social = "Platform: " + data.platform + " \n username: @" + data.username + " \n Link: " + data.link;
      return social;
    }
  }, {
    key: "text",
    value: function text(data) {
      var text = "" + data.text;
      return text;
    }
  }, {
    key: "link",
    value: function link(data) {
      var link = "" + data.url;
      return link;
    }
  }, {
    key: "email",
    value: function email(data) {
      var mail = "mailto:" + data.email + "?body=" + data.body;
      return mail;
    }
  }, {
    key: "sms",
    value: function sms(data) {
      var sms = "sms:" + data.phone + "?body=" + data.body;
      return sms;
    }
  }, {
    key: "bankAccount",
    value: function bankAccount(data) {
      var account = "Name: " + data.name + " \n Bank: " + data.bank + " \n Account: " + data.account + " \n Swift Code: " + data.swift;
    }
  }, {
    key: "bankAccountTransaction",
    value: function bankAccountTransaction(data) {
      var account = "Name: " + data.name + " \n Bank: " + data.bank + " \n Account: " + data.account + " \n Swift Code: " + data.swift + " \n Amount: " + data.amount + " \n Currency: " + data.currency;
    }
  }, {
    key: "crypto",
    value: function crypto(data) {
      var account = "Currency: " + data.currency + " \n Wallet: " + data.wallet;
    }
  }, {
    key: "cryptoTransaction",
    value: function cryptoTransaction(data) {
      var account = "Currency: " + data.currency + " \n Wallet: " + data.wallet + " \n Amount: " + data.amount;
    }
  }, {
    key: "getType",
    value: function getType() {
      var type = this.props.type;
      var data = this.props.data;
      var qrtype = void 0;

      if (type === "social") {
        qrtype = this.social(data);
      } else if (type === "link") {
        qrtype = this.link(data);
      } else if (type === "email") {
        qrtype = this.email(data);
      } else if (type === "text") {
        qrtype = this.text(data);
      } else if (type === "bank") {
        qrtype = this.bankAccount(data);
      } else if (type === "bank-transaction") {
        qrtype = this.bankAccountTransaction(data);
      } else if (type === "crypto") {
        qrtype = this.cryptoAccount(data);
      } else if (type === "crypto-transaction") {
        qrtype = this.cryptoTransaction(data);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.social(this.props.data);
      var qr = _QR2.default.makeImage(data);
      return _react2.default.createElement("img", { src: qr });
    }
  }]);

  return QRdelight;
}(_react.Component);

exports.default = QRdelight;


QRdelight.propTypes = {
  type: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object.isRequired
};