import React, { Component } from "react";
import PropTypes from "prop-types";
import QR from "./QR";

export default class QRdelight extends Component {
  social(data) {
    let social = `Platform: ${data.platform} \n username: @${
      data.username
      } \n Link: ${data.link}`;
    return social;
  }

  text(data) {
    let text = `${data.text}`;
    return text;
  }

  link(data) {
    let link = `${data.url}`;
    return link;
  }

  email(data) {
    let mail = `mailto:${data.email}?body=${data.body}`;
    return mail;
  }

  sms(data) {
    let sms = `sms:${data.phone}?body=${data.body}`;
    return sms;
  }

  bankAccount(data) {
    let account = `Name: ${data.name} \n Bank: ${data.bank} \n Account: ${
      data.account
      } \n Swift Code: ${data.swift}`;
  }

  bankAccountTransaction(data) {
    let account = `Name: ${data.name} \n Bank: ${data.bank} \n Account: ${
      data.account
      } \n Swift Code: ${data.swift} \n Amount: ${data.amount} \n Currency: ${
      data.currency
      }`;
  }

  crypto(data) {
    let account = `Currency: ${data.currency} \n Wallet: ${data.wallet}`;
  }

  cryptoTransaction(data) {
    let account = `Currency: ${data.currency} \n Wallet: ${
      data.wallet
      } \n Amount: ${data.amount}`;
  }

  getType() {
    const type = this.props.type;
    const data = this.props.data;
    let qrtype;

    if (type === "social") {
      qrtype = this.social(data);
    } else if (type === "link") {
      qrtype = this.link(data);
    } else if (type === "sms") {
      qrtype = this.sms(data);
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
    return qrtype;
  }

  render() {
    const data = this.getType();
    let qr = QR.makeImage(data);
    return <img src={qr} />;
  }
}

QRdelight.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
