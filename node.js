const nemlibrary = require('nem-library');
const NetworkTypes  = nemlibrary.NetworkTypes;
const AccountHttp  = nemlibrary.AccountHttp;
const Address = nemlibrary.Address;
nemlibrary.NEMLibrary.bootstrap(NetworkTypes.MAIN_NET);

const address = "アドレスを入力";
const accountHttp = new AccountHttp();
 
// アカウント情報の取得
accountHttp.getFromAddress(new Address(address))
  .subscribe(accountInfoWithMetaData => { 
    console.log(accountInfoWithMetaData); 
  }
);