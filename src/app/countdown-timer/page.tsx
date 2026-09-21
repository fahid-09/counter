"use client";

import { useState } from "react";
import styles from "../countdown-timer/countdown.module.css";
import RelatedTools from "../components/Related Tools/RelatedTools";

const Agecalculater = () => {
    const [resulttext, setresulttext] = useState(false)
    const [timefor, settimefor] = useState("");
    const [targetdate, settargetdate] = useState("");
    const [years, setyears] = useState(0);
    const [months, setmonths] = useState(0);
    const [days, setdays] = useState(0);
    const [hours, sethours] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [seconds, setseconds] = useState(0);

    const calculatedate = () => {
        setresulttext(true)
        const target = new Date(targetdate);
        const today = new Date();
        if (target <= today) {
            setyears(0);
            setmonths(0);
            setdays(0);
            sethours(0);
            setminutes(0);
            setseconds(0);
            return;
        }

        let yearsDifference = target.getFullYear() - today.getFullYear();
        let monthsDifference = target.getMonth() - today.getMonth();
        let daysDifference = target.getDate() - today.getDate();

        let hoursDifference = target.getHours() - today.getHours();
        let minutesDifference = target.getMinutes() - today.getMinutes();
        let secondsDifference = target.getSeconds() - today.getSeconds();

        if (secondsDifference < 0) {
            secondsDifference += 60;
            minutesDifference--;
        }

        if (minutesDifference < 0) {
            minutesDifference += 60;
            hoursDifference--;
        }

        if (hoursDifference < 0) {
            hoursDifference += 24;
            daysDifference--;
        }

        if (daysDifference < 0) {
            const previousMonth = new Date(
                target.getFullYear(),
                target.getMonth(),
                0
            );

            daysDifference += previousMonth.getDate();
            monthsDifference--;
        }

        if (monthsDifference < 0) {
            monthsDifference += 12;
            yearsDifference--;
        }

        setyears(yearsDifference);
        setmonths(monthsDifference);
        setdays(daysDifference);
        sethours(hoursDifference);
        setminutes(minutesDifference);
        setseconds(secondsDifference);
    };

    return (
        <>
            <div className={styles.pageheader}>
                <h1>Countdown Calculator</h1>

                <p>
                    Pick any future date — a wedding, an exam, a deadline,
                    New Year's — and see exactly how much time is left.
                </p>
            </div>

            <div className={styles.calculator}>

                <div className={styles.inputSection}>

                    <label>Set the Date</label>

                    <label>What it's for (optional)</label>

                    <input
                        className={styles.dateInput}
                        type="text"
                        placeholder="e.g. My wedding day"
                        onChange={(e) => { settimefor(e.target.value) }}
                    />

                    <label htmlFor="targetdate">
                        Target Date
                    </label>

                    <input
                        className={styles.dateInput}
                        type="date"
                        id="targetdate"
                        onChange={(e) =>
                            settargetdate(e.target.value)
                        }
                    />

                    <button
                        onClick={calculatedate}
                        className={styles.calbtn}
                    >
                        Calculate
                    </button>

                </div>

                <div className={styles.resultSection}>
                    {resulttext && <h2 style={{ textAlign: "center" }}>{timefor} in</h2>}
                    <div className={styles.resultRow}>

                        <div className={styles.resultBox}>
                            <span className={styles.resultNumber}>
                                {years}
                            </span>
                            <span className={styles.resultLabel}>
                                Years
                            </span>
                        </div>

                        <div className={styles.resultBox}>
                            <span className={styles.resultNumber}>
                                {months}
                            </span>
                            <span className={styles.resultLabel}>
                                Months
                            </span>
                        </div>

                        <div className={styles.resultBox}>
                            <span className={styles.resultNumber}>
                                {days}
                            </span>
                            <span className={styles.resultLabel}>
                                Days
                            </span>
                        </div>

                        <div className={styles.resultBox}>
                            <span className={styles.resultNumber}>
                                {hours}
                            </span>
                            <span className={styles.resultLabel}>
                                Hours
                            </span>
                        </div>

                        <div className={styles.resultBox}>
                            <span className={styles.resultNumber}>
                                {minutes}
                            </span>
                            <span className={styles.resultLabel}>
                                Minutes
                            </span>
                        </div>

                        <div className={styles.resultBox}>
                            <span className={styles.resultNumber}>
                                {seconds}
                            </span>
                            <span className={styles.resultLabel}>
                                Seconds
                            </span>
                        </div>

                    </div>

                </div>

            </div>
            <RelatedTools />
        </>
    );
};

export default Agecalculater;
