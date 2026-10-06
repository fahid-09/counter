import styles from "../emi-loan/emi.module.css"

const Pageheader = () => {
    return (<>
        <div className={styles.pageheader}>
            <h1>EMI Calculator</h1>

            <p>
                Enter the loan amount, interest rate and tenure to see your monthly installment, and how much of it is interest.
            </p>
        </div>
    </>)
}
export default Pageheader;