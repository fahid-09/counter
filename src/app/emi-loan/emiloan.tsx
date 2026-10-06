"use client";

import { useState } from "react";
import styles from "../emi-loan/emi.module.css";

const EmiLoan = () => {
    const [loanvalue, setloanvalue] = useState(100000);
    const [intrestrate, setintrestrate] = useState(5);
    const [tenure, settenure] = useState(12);
    const [result, setresult] = useState<number>();
    const [totalpayment, settotalpayment] = useState(0);
    const [totalinterest, settotalinterest] = useState(0);
    const [principalpercentage, setprincipalpercentage] = useState(100000);
const [interestpercentage, setinterestpercentage] = useState(5);


   const calculateEMI = () => {
    const monthlyRate = intrestrate / 12 / 100;

    const emi =
        monthlyRate === 0
            ? loanvalue / tenure
            : (loanvalue *
                  monthlyRate *
                  (1 + monthlyRate) ** tenure) /
              ((1 + monthlyRate) ** tenure - 1);

    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - loanvalue;

    const principalPercentage =
        (loanvalue / totalPayment) * 100;

    const interestPercentage =
        (totalInterest / totalPayment) * 100;

    setresult(emi);
    settotalpayment(totalPayment);
    settotalinterest(totalInterest);
    setprincipalpercentage(principalPercentage);
    setinterestpercentage(interestPercentage);
};

    return (
        <div className={styles.toolpanel}>

            {/* LEFT SIDE */}
            <div className={styles.toolpanelleft}>
                <div className={styles.leftpaneltitle}>
                    LOAN DETAILS
                </div>

                <div className={styles.inputgroup}>
                    <div className={styles.fixedlables}>
                        <span className={styles.fieldlabel}>
                            Loan Amount
                        </span>
                        <span className={styles.fieldliveval}>
                            Rs. {loanvalue.toLocaleString()}
                        </span>
                    </div>

                    <input
                        type="number"
                        value={loanvalue}
                        className={styles.numinput}
                        onChange={(e) =>
                            setloanvalue(Number(e.target.value))
                        }
                    />

                    <input
                        type="range"
                        className={styles.slider}
                        min="0"
                        max="1000000"
                        value={loanvalue}
                        onChange={(e) =>
                            setloanvalue(Number(e.target.value))
                        }
                    />
                </div>

                <div className={styles.inputgroup}>
                    <div className={styles.fixedlables}>
                        <span className={styles.fieldlabel}>
                            Interest Rate
                        </span>
                        <span className={styles.fieldliveval}>
                            {intrestrate}%
                        </span>
                    </div>

                    <input
                        type="number"
                        value={intrestrate}
                        className={styles.numinput}
                        onChange={(e) =>
                            setintrestrate(Number(e.target.value))
                        }
                    />

                    <input
                        type="range"
                        className={styles.slider}
                        min="0"
                        max="25"
                        step="0.1"
                        value={intrestrate}
                        onChange={(e) =>
                            setintrestrate(Number(e.target.value))
                        }
                    />
                </div>

                <div className={styles.inputgroup}>
                    <div className={styles.fixedlables}>
                        <span className={styles.fieldlabel}>
                            Tenure
                        </span>
                        <span className={styles.fieldliveval}>
                            {tenure} months
                        </span>
                    </div>

                    <input
                        type="number"
                        value={tenure}
                        className={styles.numinput}
                        onChange={(e) =>
                            settenure(Number(e.target.value))
                        }
                    />

                    <input
                        type="range"
                        className={styles.slider}
                        min="1"
                        max="360"
                        value={tenure}
                        onChange={(e) =>
                            settenure(Number(e.target.value))
                        }
                    />
                </div>

                <button
                    className={styles.calbtn}
                    onClick={calculateEMI}
                >
                    Calculate EMI
                </button>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.toolpanelright}>

                <div className={styles.resultheading}>
                    <span>Monthly EMI</span>

                    <div className={styles.resulttitle}>
                        {result !== undefined
                            ? `Rs. ${result.toLocaleString("en-PK", {
                                maximumFractionDigits: 0,
                            })}`
                            : "Rs. 0"}
                    </div>

                    <div className={styles.permonth}>
                        per month
                    </div>
                </div>

                <div className={styles.breakdownsection}>
                    <div className={styles.sectiontitle}>
                        Payment Breakdown
                    </div>

                   <div className={styles.breakdownbar}>
    <div
        className={styles.barprincipal}
        style={{ width: `${principalpercentage}%` }}
    ></div>

    <div
        className={styles.intrest}
        style={{ width: `${interestpercentage}%` }}
    ></div>
</div>

                    <div className={styles.legendrow}>
                        <div className={styles.legenditem}>
                            <span
                                className={styles.circleprincipal}
                            ></span>
                            Principal
                        </div>

                        <div className={styles.legenditem}>
                            <span
                                className={styles.circleintrest}
                            ></span>
                            Interest
                        </div>
                    </div>
                </div>

                <div className={styles.summary}>

                    <div className={styles.summarybox}>
                        <div className={styles.lable}>Total Interest</div>
                        <div className={styles.value}>
                            Rs. {totalinterest.toLocaleString("en-PK", {
                                maximumFractionDigits: 0
                            })}
                        </div>
                    </div>

                    <div className={styles.summarybox}>
                        <div className={styles.lable}>Total Payment</div>
                        <div className={styles.value}>
                            Rs. {totalpayment.toLocaleString("en-PK", {
                                maximumFractionDigits: 0
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EmiLoan;