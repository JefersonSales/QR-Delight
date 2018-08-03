### Link

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      url: "http://www.example.com"
    };
    return <QRdelight type="link" data={data} />;
  }
}
```
