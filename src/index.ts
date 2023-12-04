const netGSMConfig = {
  usercode: "8503097269",
  password: "v5-d1TL7",
  msgheader: "Balance As",
  message: "9999123",
  gsmno: "+905456631949",
};

export type netGSMConfigType = {
  usercode: string;
  password: string;
  msgheader: string;
  message: string;
  gsmno: string;
};

export const sendMessage = async (netGSMConfig: netGSMConfigType) => {
  const formData = new FormData();
  formData.append("usercode", netGSMConfig.usercode);
  formData.append("password", netGSMConfig.password);
  formData.append("msgheader", netGSMConfig.msgheader);
  formData.append("message", netGSMConfig.message);
  formData.append("gsmno", netGSMConfig.gsmno);

  return await fetch("https://api.netgsm.com.tr/sms/send/get", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Something went wrong!! Error code: ", response.status);
        const htmlError: Promise<string> = response.text();
        console.error("HTML Error:", htmlError);
        throw new Error("Response not OK");
      }

      return response.text();
    })
    .then((responseData: string) => {
      console.log("Non-JSON Response:", responseData);
      return responseData;
    })
    .catch((err: Error) => {
      console.error("Error: " + err);
    });
};
