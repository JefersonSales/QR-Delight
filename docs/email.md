### Email

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      email: "sample@example.com",
      body: "This is sample text"
    };
    return <QRdelight type="email" data={data} />;
  }
}
```
