"use client";
import { useState } from "react";
import styles from "../random-picker/random.module.css";
import RelatedTools from "../components/Related Tools/RelatedTools";
import Pageheader from "./pageheader";
import Resultsection from "./resultsection";

const RandomPicker = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(2);
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const pickRandomly = () => {
        const names = name
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item !== "");

        if (names.length === 0) return;

        const pickCount = Math.min(number, names.length);
        const shuffled = [...names].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, pickCount);

        setSelectedNames(selected);

        const remaining = names.filter(
            (item) => !selected.includes(item)
        );

        setName(remaining.join("\n"));
    };

    const clearAll = () => {
        setName("");
        setNumber(2);
        setSelectedNames([]);
    };

    const remainingCount = name
        .split("\n")
        .filter((item) => item.trim() !== "").length;

    return (
        <>
            {/* *****page header***** */}
            <Pageheader />

            <div className={styles.QRrow}>
                <div className={styles.QRcol}>
                    <div className={styles.QRleft}>
                        <textarea
                            value={name}
                            placeholder="Enter one name per line..."
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="number"
                            min="1"
                            value={number}
                            onChange={(e) =>
                                setNumber(Number(e.target.value))
                            }
                            placeholder="How many names?"
                        />

                        <div className={styles.buttonrow}>
                            <button
                                onClick={pickRandomly}
                                className={styles.generateQR}
                            >
                                Pick Randomly
                            </button>

                            <button
                                onClick={clearAll}
                                className={styles.cleartext}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
                {/* ****result section**** */}
                <Resultsection
                    selectedNames={selectedNames}
                    remainingCount={remainingCount} />
            </div>

            <RelatedTools />
        </>
    );
};

export default RandomPicker;
