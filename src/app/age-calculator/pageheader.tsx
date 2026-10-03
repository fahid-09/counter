import styles from "../age-calculator/AgeCalculator.module.css";

const Pageheader = ()=>{
    return(
 <div className={styles.pageheader}>
                <h1>Age Calculator</h1>

                <p>
                    One date in, three numbers out: years, months and days —
                    calculated exactly, down to the day. Age Calculator also
                    tracks your total days lived and counts down to your next
                    birthday, turning a simple date of birth into a handful of
                    small, satisfying facts.
                </p>
            </div>
    )
}
export default Pageheader;