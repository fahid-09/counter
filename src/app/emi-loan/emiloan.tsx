"use client"

import { useState } from "react";
import styles from "../emi-loan/emi.module.css"
const EmiLoan = () => {
    const [loanvalue, setloanvalue] = useState(100000);
    const [intrestrate, setintrestrate] = useState(0);
    const [tenure, settenure] = useState(0);
    const [result, setresult] = useState<number>()

const calculateEMI =()=>{
    const emi = loanvalue * intrestrate * (1 + intrestrate)*tenure / ((1 + intrestrate)*tenure - 1)
    setresult(emi);
    console.log(result)
}
    return (<>
        <div className={styles.toolpanel}>
            <div className={styles.toolpanelleft}>
                <div className={styles.leftpaneltitle}>LOAN DETAILS</div>
                <div className={styles.fixedlables}>
                    <span className={styles.fieldlabel}> Loan Amount</span>
                    <span className={styles.fieldliveval}>{loanvalue}</span>
                </div>
                <input type="number" value={loanvalue} className={styles.numinput}
                    onChange={(e) => setloanvalue(Number(e.target.value))} />
                <input
                    type="range"
                    className={styles.slider}
                    min="0"
                    max="1000000"
                    value={loanvalue}
                    onChange={(e) => setloanvalue(Number(e.target.value))}
                />

                <div className={styles.fixedlables}>
                    <span className={styles.fieldlabel}> Interest rate (yearly %)</span>
                    <span className={styles.fieldliveval}>{intrestrate}</span>
                </div>
                <input type="number" value={intrestrate} className={styles.numinput}
                    onChange={(e) => setintrestrate(Number(e.target.value))} />
                <input
                    type="range"
                    className={styles.slider}
                    min="0"
                    max="25"
                    value={intrestrate}
                    onChange={(e) => setintrestrate(Number(e.target.value))}
                />

                <div className={styles.fixedlables}>
                    <span className={styles.fieldlabel}> Tenure (months)</span>
                    <span className={styles.fieldliveval}>{tenure}</span>
                </div>
                <input type="number" value={tenure} className={styles.numinput}
                    onChange={(e) => settenure(Number(e.target.value))} />
                <input
                    type="range"
                    className={styles.slider}
                    min="1"
                    max="360"
                    value={tenure}
                    onChange={(e) => settenure(Number(e.target.value))}
                />

                <button className={styles.calbtn} onClick={calculateEMI}>Calculate EMI</button>
            </div>
            <div className={styles.toolpanelright}></div>

        </div>
    </>)
}
export default EmiLoan;