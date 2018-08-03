### Text

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      text: "Delightful ways to use"
    };
    return <QRdelight type="text" data={data} />;
  }
}
```
