### Bank Transactions

** Usage **

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      name: "John Doe",
      bank: "Access Bank",
      account: 02874637473,
      swift: "ACL8348475",
      amount: 300000,
      currency: "dollar"
    };
    return <QRdelight type="bank-transaction" data={data} />;
  }
}
```
