
import styles from "../emi-loan/emi.module.css";
const Description = ()=>{
    return(<>
    <div className={styles.description}>
        <h3>Description</h3>
        <p>EMI Calculator works out the fixed monthly payment for a loan based on the amount borrowed, the yearly interest rate and the repayment period. It also splits the total repayment into principal and interest, so you can see exactly how much of what you pay is the bank's cost of lending.</p>
    </div>
    </>)
}
export default Description;