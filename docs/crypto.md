### Cryptocurrency

** Bitcoin **

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      currency: "Bitcoin",
      wallet: "24748-4875783-4857385-3847"
    };
    return <QRdelight type="crypto" data={data} />;
  }
}
```

** Ethereum **

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      currency: "Ethereum",
      wallet: "93745-4875783-4857385-3847"
    };
    return <QRdelight type="crypto" data={data} />;
  }
}
```
