import PropTypes from 'prop-types';
import './transactions.css'

export default function SingleTransaction({ type, amount, currency }) {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
};