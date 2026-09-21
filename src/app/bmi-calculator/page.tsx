"use client"
import { useState } from "react";
import styles from "../bmi-calculator/Bmi.module.css"
import RelatedTools from "../components/Related Tools/RelatedTools";

const BMICalculator = () => {

    const [active, setactive] = useState("button1");
    const [weight, setweight] = useState<number>(20);
    const [height, setheight] = useState<number>(50);
    const [result, setresult] = useState<number>(0);

    const calculatebmimetric = () => {
        const heightInMeter = height / 100;
        const bmi = weight / (heightInMeter * heightInMeter);
        
        setresult(Number(bmi.toFixed(2)));
    }
  const calculatebmiimperial = () => {
    const bmi = (weight / (height * height)) * 703;

    setresult(Number(bmi.toFixed(2)));
}

    // BMI ke hisab se line ki position
    const markerPosition = Math.min(
        Math.max((result / 40) * 100, 0),
        100
    );

    return (
        <>
            <div className={styles.pageheader}>
                <h1>BMI Calculator</h1>
                <p>
                    Enter your height and weight to get your Body Mass Index
                    and see where it falls on the standard scale.
                </p>
            </div>

            <div className={styles.tabs}>
                <button
                    onClick={() => setactive("button1")}
                    className={active === "button1" ? styles.active : ""}
                >
                    Metric (cm,kg)
                </button>

                <button
                    onClick={() => setactive("button2")}
                    className={active === "button2" ? styles.active : ""}
                >
                    Imperial (In,lb)
                </button>
            </div>

            <div className={styles.toollayout}>

                <div className={styles.panel}>
                    <div className={styles.paneltitle}>
                        Your measurements
                    </div>
                    {active === "button1" && <div className={styles.inputrow}>

                        <div className={styles.inputgroup}>
                            <label htmlFor="height">Height (cm)</label>
                            <input
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) =>
                                    setheight(Number(e.target.value))
                                }
                            />
                        </div>

                        <div className={styles.inputgroup}>
                            <label htmlFor="weight">Weight (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={(e) =>
                                    setweight(Number(e.target.value))
                                }
                            />
                        </div>

                    </div>}

                    {active === "button2" && <div className={styles.inputrow}>

                        <div className={styles.inputgroup}>
                            <label htmlFor="height">Height (In)</label>
                            <input
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) =>
                                    setheight(Number(e.target.value))
                                }
                            />
                        </div>

                        <div className={styles.inputgroup}>
                            <label htmlFor="weight">Weight (lb)</label>
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={(e) =>
                                    setweight(Number(e.target.value))
                                }
                            />
                        </div>
                    </div>}
                    {
                        active === "button1" ? <button onClick={calculatebmimetric}>
                            Calculate BMI
                        </button> : <button onClick={calculatebmiimperial}>
                            Calculate BMI
                        </button>
                    }


                </div>

                <div className={styles.panel}>

                    <div className={styles.resultbox}>
                        <p>
                            {result ? <strong> {result.toFixed(0)}</strong> : <strong>Result --</strong>}
                        </p>
                    </div>

                    <div className={styles.bmiscale}>

                        <div className={styles.scalebar}>

                            <span className={styles.under}></span>
                            <span className={styles.normal}></span>
                            <span className={styles.over}></span>
                            <span className={styles.obese}></span>

                            {/* Moving line */}
                            <div
                                className={styles.marker}
                                style={{
                                    left: `${markerPosition}%`
                                }}
                            >
                                <span className={styles.markerarrow}></span>
                            </div>

                        </div>

                        <div className={styles.scalelabels}>
                            <span>Under</span>
                            <span>Normal</span>
                            <span>Over</span>
                            <span>Obese</span>
                        </div>

                    </div>

                </div>

            </div>

            <RelatedTools />
        </>
    )
}

export default BMICalculator;