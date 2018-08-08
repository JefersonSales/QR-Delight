## QR Delight

Delightful ways to use QR code with React.JS.

**Installation**

```bash
//Use npm
npm i qr-delight

//Use yarn
yarn add qr-delight
```

**Docs**

[View Docs](https://kimolalekan.github.io/qr-delight/)

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
