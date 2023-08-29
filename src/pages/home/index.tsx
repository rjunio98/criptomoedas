import styles from './home.module.css'

import { Link } from 'react-router-dom'

import { BiSearch } from 'react-icons/bi'


export function Home(){
    return (
        <main className={styles.container}>
            <form className={styles.form}>
                <input placeholder='Digite o simbolo da moeda: BTC...' />

                <button type='submit'>
                    <BiSearch size={30} color="#fff"/>
                </button>
            </form>


            <table>
                <thead>
                    <tr>
                        <th scope='col'>Moeda</th>
                        <th scope='col'>Valor mercado</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'>Volume</th>
                    </tr>
                </thead>

                <tbody id='tbody'>
                    <tr className={styles.tr}>
                        <td className={styles.tdLabel} data-label="Moeda">
                            <Link to="/detail/btc" className={styles.link}>
                                <span>Bitcoin</span> | BTC
                            </Link>
                        </td>

                        <td className={styles.tdLabel} data-label="Mercado">
                            R$ 1928
                        </td>

                        <td className={styles.tdLabel} data-label="Preço">
                            R$ 40.5985
                        </td>

                        <td className={styles.tdProfit} data-label="Volume">
                            <span>-5.4</span>
                        </td>
                    </tr>
                </tbody>
            </table>

        </main>
    )
}