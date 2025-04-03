import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface Transaction {
  id: string;
  walletAddress: string;
  category: 'Investment' | 'Withdrawal' | 'Deposit' | 'Transfer';
  amount: string;
  timestamp: string;
}

// Example transactions
const allTransactions: Transaction[] = [
  {
    id: '1',
    walletAddress: '0x1234...5678',
    category: 'Investment',
    amount: '$50,000',
    timestamp: '2024-02-15 14:30:00'
  },
  {
    id: '2',
    walletAddress: '0x8765...4321',
    category: 'Withdrawal',
    amount: '$25,000',
    timestamp: '2024-02-14 09:15:00'
  },
  {
    id: '3',
    walletAddress: '0x9876...1234',
    category: 'Deposit',
    amount: '$100,000',
    timestamp: '2024-02-13 16:45:00'
  },
  {
    id: '4',
    walletAddress: '0x5432...8765',
    category: 'Transfer',
    amount: '$75,000',
    timestamp: '2024-02-12 11:20:00'
  },
  {
    id: '5',
    walletAddress: '0x1234...5678',
    category: 'Investment',
    amount: '$30,000',
    timestamp: '2024-02-11 13:10:00'
  },
  {
    id: '6',
    walletAddress: '0x8765...4321',
    category: 'Deposit',
    amount: '$60,000',
    timestamp: '2024-02-10 15:30:00'
  },
  {
    id: '7',
    walletAddress: '0x9876...1234',
    category: 'Withdrawal',
    amount: '$40,000',
    timestamp: '2024-02-09 10:45:00'
  },
  {
    id: '8',
    walletAddress: '0x5432...8765',
    category: 'Transfer',
    amount: '$85,000',
    timestamp: '2024-02-08 14:20:00'
  },
  {
    id: '9',
    walletAddress: '0x1234...5678',
    category: 'Investment',
    amount: '$70,000',
    timestamp: '2024-02-07 09:30:00'
  },
  {
    id: '10',
    walletAddress: '0x8765...4321',
    category: 'Deposit',
    amount: '$95,000',
    timestamp: '2024-02-06 16:15:00'
  }
];

const userTransactions = allTransactions.filter(tx => tx.walletAddress === '0x1234...5678');

export function Transactions() {
  const [viewMode, setViewMode] = useState<'all' | 'personal'>('all');
  const transactions = viewMode === 'all' ? allTransactions : userTransactions;

  const handleDownload = () => {
    const csv = [
      ['Transaction ID', 'Wallet Address', 'Category', 'Amount', 'Timestamp'],
      ...transactions.map(tx => [
        tx.id,
        tx.walletAddress,
        tx.category,
        tx.amount,
        tx.timestamp
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <div className="flex items-center gap-4">
          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as 'all' | 'personal')}
            className="bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
          >
            <option value="all">All Transactions</option>
            <option value="personal">My Transactions</option>
          </select>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors"
          >
            <Download className="h-5 w-5" />
            Download CSV
          </button>
        </div>
      </div>

      <div className="bg-[#201E29] rounded-xl border border-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-4 text-gray-400 font-medium">Transaction ID</th>
                <th className="text-left p-4 text-gray-400 font-medium">Wallet Address</th>
                <th className="text-left p-4 text-gray-400 font-medium">Category</th>
                <th className="text-left p-4 text-gray-400 font-medium">Amount</th>
                <th className="text-left p-4 text-gray-400 font-medium">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-gray-800 hover:bg-[#16141D]">
                  <td className="p-4">{tx.id}</td>
                  <td className="p-4">{tx.walletAddress}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      tx.category === 'Investment' ? 'bg-purple-500/10 text-purple-500' :
                      tx.category === 'Withdrawal' ? 'bg-red-500/10 text-red-500' :
                      tx.category === 'Deposit' ? 'bg-green-500/10 text-green-500' :
                      'bg-blue-500/10 text-blue-500'
                    }`}>
                      {tx.category}
                    </span>
                  </td>
                  <td className="p-4">{tx.amount}</td>
                  <td className="p-4 text-gray-400">{new Date(tx.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}