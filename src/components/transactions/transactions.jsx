import PropTypes from 'prop-types';
import './transactions.css';
import SingleTransaction from './transaction-row';

export default function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>       
            <tbody>
                {items.map(item => {
                    return (
                        <SingleTransaction
                            key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}
