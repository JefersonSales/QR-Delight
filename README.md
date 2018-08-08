## QR Delight

Delightful ways to use QR code with React.JS

[QR Delight Demo](https://codesandbox.io/s/349lz614nm)

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

<a href="https://codesandbox.io/s/349lz614nm">
  <img alt="Edit 349lz614nm" src="qr-delight.png">
</a>

**Contributors**

[Olalekan Animashaun](https://github.com/kimolalekan)
