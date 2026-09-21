"use client";

import { useState } from "react";
import styles from "../age-calculator/AgeCalculator.module.css";
import RelatedTools from "../components/Related Tools/RelatedTools";

const Agecalculater = () => {
    const [birthdate, setbirthdate] = useState("");
    const [todaydate, settodaydate] = useState("");

    const [years, setyeras] = useState(0);
    const [months, setmonths] = useState(0);
    const [days, setdays] = useState(0);
    const [totaldays, settotaldays] = useState(0);
    const [nextbirthday, setnextbirthday] = useState(0);

    const agecalculate = () => {
        const birth = new Date(birthdate);
        const today = new Date(todaydate);

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;

            days += new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const difference = today.getTime() - birth.getTime();

        const totalDays = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        setyeras(years);
        setmonths(months);
        setdays(days);
        settotaldays(totalDays);

        const nextBirthday = new Date(
            today.getFullYear(),
            birth.getMonth(),
            birth.getDate()
        );

        if (nextBirthday <= today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        const birthdayDifference =
            nextBirthday.getTime() - today.getTime();

        const daysUntilBirthday = Math.ceil(
            birthdayDifference / (1000 * 60 * 60 * 24)
        );

        setnextbirthday(daysUntilBirthday);
    };

    return (
        <>
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

            <div className={styles.calculator}>
                <div className={styles.inputSection}>

                    <label htmlFor="birthdate">
                        Date of Birth
                    </label>

                    <input
                        className={styles.dateInput}
                        type="date"
                        id="birthdate"
                        value={birthdate}
                        onChange={(e) =>
                            setbirthdate(e.target.value)
                        }
                    />

                    <label htmlFor="todaydate">
                        Age at the Date of
                    </label>

                    <input
                        className={styles.dateInput}
                        type="date"
                        id="todaydate"
                        value={todaydate}
                        onChange={(e) =>
                            settodaydate(e.target.value)
                        }
                    />

                    <button
                        className={styles.calbtn}
                        onClick={agecalculate}
                    >
                        Calculate
                    </button>

                </div>

                <div className={styles.resultSection}>

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

                    </div>

                    <div className={styles.totaldays}>
                        <p>Total Days Lived</p>
                        <strong>{totaldays}</strong>
                    </div>
                    <div className={styles.totaldays}>
                    <p>Next Birthday In</p>
                    <strong>{nextbirthday} Days</strong>
                </div>

                </div>
                
            </div>

             <RelatedTools />
        </>
    );
};

export default Agecalculater;
