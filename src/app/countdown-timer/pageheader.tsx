import styles from "../countdown-timer/countdown.module.css"

const Pageheader = ()=> {
    return (<>
      <div className={styles.pageheader}>
            <h1>Countdown Calculator</h1>
            <p>
                Pick any future date — a wedding, an exam, a deadline,
                New Year's — and see exactly how much time is left.
            </p>
        </div></>)
}
export default Pageheader