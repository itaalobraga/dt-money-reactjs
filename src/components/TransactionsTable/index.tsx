import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { TableContainer } from './styles';


export function TransactionsTable() {
    const {transactions} = useContext(TransactionsContext);

    return (
        <TableContainer>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {transaction.type === 'deposit'
                                    ? new Intl.NumberFormat('pt-BR', {
                                          style: 'currency',
                                          currency: 'BRL',
                                      }).format(transaction.amount)
                                    : `- ${new Intl.NumberFormat('pt-BR', {
                                          style: 'currency',
                                          currency: 'BRL',
                                      }).format(transaction.amount)}`}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableContainer>
    );
}
