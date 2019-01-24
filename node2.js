const nemlibrary = require('nem-library');
const NetworkTypes  = nemlibrary.NetworkTypes;
const Account = nemlibrary.Account;
const Address = nemlibrary.Address;
const TimeWindow = nemlibrary.TimeWindow;
const XEM = nemlibrary.XEM;
const PlainMessage = nemlibrary.PlainMessage;
const TransferTransaction = nemlibrary.TransferTransaction;
const TransactionHttp = nemlibrary.TransactionHttp;
nemlibrary.NEMLibrary.bootstrap(NetworkTypes.MAIN_NET);

const PRIVATE_KEY = "";
const address = "";
const amount = 0.1;
const message = "send test";

// 送金トランザクションを作成
const transferTransaction = TransferTransaction.create(
  TimeWindow.createWithDeadline(),
  new Address(address),
  new XEM(amount),
  PlainMessage.create(message)
);

const account = Account.createWithPrivateKey(PRIVATE_KEY);

// トランザクションを署名
const signedTransaction = account.signTransaction(transferTransaction);
const transactionHttp = new TransactionHttp();

// 送金実行
transactionHttp.announceTransaction(signedTransaction)
  .subscribe(
    value => {console.log(value.message);},
    err => {console.log(err.toString());}
);