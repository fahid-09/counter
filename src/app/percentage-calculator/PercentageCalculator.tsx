"use client";

import { useState } from "react";
import styles from "../percentage-calculator/percentage.module.css";
import RelatedTools from "../components/Related Tools/RelatedTools";
import Pageheader from "./pageheader";
import PercentageResult from "./result";

const PercentageCalculator = () => {
    const [active, setActive] = useState("button1");
    const [X, setX] = useState<number>(0);
    const [Y, setY] = useState<number>(0);
    const [result, setResult] = useState<number | null>(null);

    const percentage = () => {
        setResult((X / 100) * Y);
    };

    const isWhatPercentage = () => {
        if (Y === 0) return;
        setResult((X * 100) / Y);
    };

    const percentageChange = () => {
        if (X === 0) return;
        setResult(((Y - X) / X) * 100);
    };

    return (
        <>
        {/* ****page header****  */}
          <Pageheader/>

            <div className={styles.tabs}>
                <button
                    onClick={() => setActive("button1")}
                    className={`${styles.tabbutton} ${
                        active === "button1" ? styles.active : ""
                    }`}
                >
                    What is X% of Y?
                </button>

                <button
                    onClick={() => setActive("button2")}
                    className={`${styles.tabbutton} ${
                        active === "button2" ? styles.active : ""
                    }`}
                >
                    X is what % of Y?
                </button>

                <button
                    onClick={() => setActive("button3")}
                    className={`${styles.tabbutton} ${
                        active === "button3" ? styles.active : ""
                    }`}
                >
                    % change from X to Y
                </button>
            </div>

            <div className={styles.toollayout}>
                {active === "button1" && (
                    <div className={styles.panel}>
                        <div className={styles.paneltitle}>
                            Enter Values
                        </div>

                        <div>
                            What is{" "}
                            <input
                                type="number"
                                value={X}
                                onChange={(e) =>
                                    setX(Number(e.target.value))
                                }
                            />{" "}
                            % of{" "}
                            <input
                                type="number"
                                value={Y}
                                onChange={(e) =>
                                    setY(Number(e.target.value))
                                }
                            />
                            ?
                        </div>

                        <button onClick={percentage}>
                            Calculate
                        </button>
                    </div>
                )}

                {active === "button2" && (
                    <div className={styles.panel}>
                        <div className={styles.paneltitle}>
                            Enter Values
                        </div>

                        <div>
                            <input
                                type="number"
                                value={X}
                                onChange={(e) =>
                                    setX(Number(e.target.value))
                                }
                            />{" "}
                            is what % of{" "}
                            <input
                                type="number"
                                value={Y}
                                onChange={(e) =>
                                    setY(Number(e.target.value))
                                }
                            />
                            ?
                        </div>

                        <button onClick={isWhatPercentage}>
                            Calculate
                        </button>
                    </div>
                )}

                {active === "button3" && (
                    <div className={styles.panel}>
                        <div className={styles.paneltitle}>
                            Enter Values
                        </div>

                        <div>
                            Change from{" "}
                            <input
                                type="number"
                                value={X}
                                onChange={(e) =>
                                    setX(Number(e.target.value))
                                }
                            />{" "}
                            to{" "}
                            <input
                                type="number"
                                value={Y}
                                onChange={(e) =>
                                    setY(Number(e.target.value))
                                }
                            />
                            ?
                        </div>

                        <button onClick={percentageChange}>
                            Calculate
                        </button>
                    </div>
                )}

               <PercentageResult result = {result} />
            </div>

            <RelatedTools />
        </>
    );
};

export default PercentageCalculator;