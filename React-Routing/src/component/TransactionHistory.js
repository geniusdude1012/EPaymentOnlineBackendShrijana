import React from 'react';
import "./../component/TransactionHistory.css"
import back2 from "./../component/assets/back6.avif";

const transactions = [
  { time: '2020-12-14 22:01:01', receipt: 'R000186', amount: 'MYR 100' },
  { time: '2020-12-08 10:19:26', receipt: 'R000184', amount: 'MYR 1000' },
  { time: '2020-12-08 01:09:10', receipt: 'R000175', amount: 'MYR 1441' },
  { time: '2020-12-08 01:08:51', receipt: 'R000174', amount: 'MYR 1000' },
  { time: '2020-12-07 23:44:16', receipt: 'R000170', amount: 'MYR 888' },
  { time: '2020-12-07 22:19:24', receipt: 'R000168', amount: 'MYR 100' },
];

const TransactionHistory = () => {
  return (
    <div className="transaction-history-container" style={{ backgroundImage: `url(${back2})`, backgroundSize: "cover" }}>
      <header className="header">
        <h1>e-pay</h1>
        <button className="menu-button">☰</button>
      </header>
      <h2 className="title"> Your Transaction History</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Transaction Time</th>
            <th>Receipt No.</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="red-text">{transaction.time}</td>
              <td>{transaction.receipt}</td>
              <td>{transaction.amount}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
