"use client";

import { useState } from "react";
import styles from "../random-picker/random.module.css";

const RandomPicker = () => {
    const [name, setname] = useState("");
    const [number, setNumber] = useState(2);
    const [selectedNames, setSelectedNames] = useState<string[]>([]);

    const pickRandomly = () => {
        const names = name
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item !== "");

        if (names.length === 0) return;

        // Agar number names se zyada ho
        const pickCount = Math.min(number, names.length);

        // Names shuffle
        const shuffled = [...names].sort(() => Math.random() - 0.5);

        // User ke number ke according names select
        const selected = shuffled.slice(0, pickCount);

        // Selected names show
        setSelectedNames(selected);

        // Selected names ko textarea se remove
        const remaining = names.filter(
            (item) => !selected.includes(item)
        );

        setname(remaining.join("\n"));
    };

    const clearAll = () => {
        setname("");
        setNumber(2);
        setSelectedNames([]);
    };

    return (
        <>
            <div className={styles.pageheader}>
                <h1>Random Picker</h1>

                <p>
                    Drop in a list of names or items, one per line, and choose
                    how many you want to pick randomly.
                </p>
            </div>

            <div className="row">
                <div className={styles.QRrow}>

                    {/* LEFT SIDE */}
                    <div className={styles.QRcol}>
                        <div className={`${styles.QRleft} col-6`}>

                            <textarea
                                value={name}
                                placeholder="Enter one name per line..."
                                onChange={(e) => setname(e.target.value)}
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

                            <div className="row">

                                <div className="col-6">
                                    <button
                                        onClick={pickRandomly}
                                        className={styles.generateQR}
                                    >
                                        Pick Randomly
                                    </button>
                                </div>

                                <div className="col-6">
                                    <button
                                        onClick={clearAll}
                                        className={styles.cleartext}
                                    >
                                        Clear
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={styles.QRcol}>
                        <div className={`${styles.QRleft} col-6`}>

                            <h3>Selected Values</h3>

                            {selectedNames.length === 0 ? (
                                <p>
                                    Selected values will appear here.
                                </p>
                            ) : (
                                <div>
                                    {selectedNames.map((item, index) => (
                                        <h2 key={index}>
                                            🎉 {item}
                                        </h2>
                                    ))}
                                </div>
                            )}

                            <hr />

                            <p>
                                Remaining values:{" "}
                                {
                                    name
                                        .split("\n")
                                        .filter(
                                            (item) => item.trim() !== ""
                                        ).length
                                }
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default RandomPicker;