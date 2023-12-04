# netGSM SMS Sender

## Installation:

First, install the package in your project using the following command:

```
npm install sms-netgsm
```

## Usage:

Firstly do not forget that:
You cannot send the same message to the same number over and over again.

To use the package in your project, follow these steps:

```
import { netGSMConfigType, sendMessage } from 'sms-netgsm';

const netGSMConfig: netGSMConfigType = {
usercode: "YOUR_USER_CODE",
password: "YOUR_PASSWORD",
msgheader: "COMPANY_NAME_OR_TITLE",
message: "MESSAGE_CONTENT",
gsmno: "NUMBER",
};

sendMessage(netGSMConfig)
.then(response => {
console.log("Message sent successfully:", response);
})
.catch(error => {
console.error("Error sending message:", error);
});
```

## API Reference:

- netGSMConfigType

  This type defines the configuration to be sent to the NetGSM API.

```
type netGSMConfigType = {
usercode: string;
password: string;
msgheader: string;
message: string;
gsmno: string;
};
```

- sendMessage Function

This function sends a message to the NetGSM API.

```
    /**
     * @param netGSMConfig - NetGSM API configuration
     * @returns Promise<string> - API response (JSON or text)
     */
    declare const sendMessage: (netGSMConfig: netGSMConfigType) => Promise<string>;
```

### Notes:

- This package is designed to send messages to the NetGSM API.
- The API response can be in JSON or text format.
- Errors and successful cases are handled separately.
