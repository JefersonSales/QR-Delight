### SMS

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      phone: "+1234567890",
      body: "This is sample text"
    };
    return <QRdelight type="sms" data={data} />;
  }
}
```
