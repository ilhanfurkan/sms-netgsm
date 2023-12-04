// index.d.ts

export type netGSMConfigType = {
  usercode: string;
  password: string;
  msgheader: string;
  message: string;
  gsmno: string;
};

export declare const sendMessage: (
  netGSMConfig: netGSMConfigType
) => Promise<string>;
