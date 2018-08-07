## QR Delight

Delightful ways to use QR code with React.JS.

**Installation**

```bash
npm i qr-delight
```

**Docs**

[View Docs](./docs/_sidebar.md)

**Usage**

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      platform: "Facebook",
      username: "developers",
      link: "https://fb.me/developers"
    };
    return <QRdelight type="social" data={data} />;
  }
}
```

**Contributors**

[Olalekan Animashaun](https://github.com/kimolalekan)
