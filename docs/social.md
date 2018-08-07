### Social

**Facebook**

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

**Twitter**

```javascript
import React, { Component } from "react";
import QRdelight from "qr-delight";

export default class MyQRcode extends Component {
  render() {
    const data = {
      platform: "Twitter",
      username: "developers",
      link: "https://twitter.com/developers"
    };
    return <QRdelight type="social" data={data} />;
  }
}
```
