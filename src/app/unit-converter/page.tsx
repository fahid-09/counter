"use client";

import { useState, useEffect } from "react";
import styles from "../unit-converter/unitconverter.module.css";

const UnitConverter = () => {
    const [active, setactive] = useState("Length");
    const [fromValue, setFromValue] = useState<number | "">(1);
    const [fromUnit, setFromUnit] = useState("Meter");
    const [toUnit, setToUnit] = useState("Kilometer");
    const [result, setResult] = useState(0);

    const lengthUnits: any = {
        Meter: 1,
        Kilometer: 1000,
        Centimeter: 0.01,
        Millimeter: 0.001,
        Mile: 1609.34,
        Yard: 0.9144,
        Foot: 0.3048,
        Inch: 0.0254
    };

    const weightUnits: any = {
        Kilogram: 1,
        Gram: 0.001,
        Milligram: 0.000001,
        Pound: 0.453592,
        Ounce: 0.0283495,
        Ton: 1000
    };

    const convertLength = () => {
        if (fromValue === "") return;

        const baseValue = fromValue * lengthUnits[fromUnit];
        const convertedValue = baseValue / lengthUnits[toUnit];

        setResult(convertedValue);
    };

    const convertWeight = () => {
        if (fromValue === "") return;

        const baseValue = fromValue * weightUnits[fromUnit];
        const convertedValue = baseValue / weightUnits[toUnit];

        setResult(convertedValue);
    };

    const convertTemperature = () => {
        if (fromValue === "") return;

        let convertedValue = 0;

        if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
            convertedValue = (fromValue * 9 / 5) + 32;
        }

        if (fromUnit === "Celsius" && toUnit === "Kelvin") {
            convertedValue = fromValue + 273.15;
        }

        if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
            convertedValue = (fromValue - 32) * 5 / 9;
        }

        if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
            convertedValue = (fromValue - 32) * 5 / 9 + 273.15;
        }

        if (fromUnit === "Kelvin" && toUnit === "Celsius") {
            convertedValue = fromValue - 273.15;
        }

        if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
            convertedValue = (fromValue - 273.15) * 9 / 5 + 32;
        }

        if (fromUnit === toUnit) {
            convertedValue = fromValue;
        }

        setResult(convertedValue);
    };

    useEffect(() => {
        if (fromValue === "") {
            setResult(0);
            return;
        }

        if (active === "Length") {
            convertLength();
        }

        if (active === "Weight") {
            convertWeight();
        }

        if (active === "Temperature") {
            convertTemperature();
        }
    }, [active, fromValue, fromUnit, toUnit]);

    return (
        <>
            <div className={styles.pageheader}>
                <h1>Unit Converter</h1>

                <p>
                    Length, weight or temperature — pick a category, enter a value,
                    and get the converted number instantly.
                </p>
            </div>

            <div className={styles.tabmenu}>
                <button
                    className={`${styles.menubtn} ${active === "Length" ? styles.active : ""}`}
                    onClick={() => {
                        setactive("Length");
                        setFromUnit("Meter");
                        setToUnit("Kilometer");
                    }}
                >
                    Length
                </button>

                <button
                    className={`${styles.menubtn} ${active === "Weight" ? styles.active : ""}`}
                    onClick={() => {
                        setactive("Weight");
                        setFromUnit("Kilogram");
                        setToUnit("Gram");
                    }}
                >
                    Weight
                </button>

                <button
                    className={`${styles.menubtn} ${active === "Temperature" ? styles.active : ""}`}
                    onClick={() => {
                        setactive("Temperature");
                        setFromUnit("Celsius");
                        setToUnit("Fahrenheit");
                    }}
                >
                    Temperature
                </button>
            </div>

            <div className={styles.toolpanel}>
                <div className={styles.converterrow}>

                    {/* FROM */}
                    <div className={styles.convertfrompart}>
                        <label>From</label>

                        <input
                            type="number"
                            value={fromValue}
                            onChange={(e) =>
                                setFromValue(
                                    e.target.value === ""
                                        ? ""
                                        : Number(e.target.value)
                                )
                            }
                        />

                        {active === "Length" && (
                            <select
                                value={fromUnit}
                                onChange={(e) => setFromUnit(e.target.value)}
                            >
                                <option value="Meter">Meter</option>
                                <option value="Kilometer">Kilometer</option>
                                <option value="Centimeter">Centimeter</option>
                                <option value="Millimeter">Millimeter</option>
                                <option value="Mile">Mile</option>
                                <option value="Yard">Yard</option>
                                <option value="Foot">Foot</option>
                                <option value="Inch">Inch</option>
                            </select>
                        )}

                        {active === "Weight" && (
                            <select
                                value={fromUnit}
                                onChange={(e) => setFromUnit(e.target.value)}
                            >
                                <option value="Kilogram">Kilogram</option>
                                <option value="Gram">Gram</option>
                                <option value="Milligram">Milligram</option>
                                <option value="Pound">Pound</option>
                                <option value="Ounce">Ounce</option>
                                <option value="Ton">Ton</option>
                            </select>
                        )}

                        {active === "Temperature" && (
                            <select
                                value={fromUnit}
                                onChange={(e) => setFromUnit(e.target.value)}
                            >
                                <option value="Celsius">Celsius</option>
                                <option value="Fahrenheit">Fahrenheit</option>
                                <option value="Kelvin">Kelvin</option>
                            </select>
                        )}
                    </div>

                    {/* SWAP BUTTON */}
                    <div>
                        <button>⇄</button>
                    </div>

                    {/* TO */}
                    <div className={styles.convertfrompart}>
                        <label>To</label>

                        <input
                            type="number"
                            value={fromValue === "" ? "" : result}
                            readOnly
                        />

                        {active === "Length" && (
                            <select
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                            >
                                <option value="Meter">Meter</option>
                                <option value="Kilometer">Kilometer</option>
                                <option value="Centimeter">Centimeter</option>
                                <option value="Millimeter">Millimeter</option>
                                <option value="Mile">Mile</option>
                                <option value="Yard">Yard</option>
                                <option value="Foot">Foot</option>
                                <option value="Inch">Inch</option>
                            </select>
                        )}

                        {active === "Weight" && (
                            <select
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                            >
                                <option value="Kilogram">Kilogram</option>
                                <option value="Gram">Gram</option>
                                <option value="Milligram">Milligram</option>
                                <option value="Pound">Pound</option>
                                <option value="Ounce">Ounce</option>
                                <option value="Ton">Ton</option>
                            </select>
                        )}

                        {active === "Temperature" && (
                            <select
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                            >
                                <option value="Celsius">Celsius</option>
                                <option value="Fahrenheit">Fahrenheit</option>
                                <option value="Kelvin">Kelvin</option>
                            </select>
                        )}
                    </div>
                </div>

                {/* RESULT EQUATION */}
                {fromValue !== "" && (
                    <div className={styles.resultline}>
                        <span className={styles.resultequation}>
                            {fromValue} {fromUnit} = {result} {toUnit}
                        </span>
                    </div>
                )}
            </div>
        </>
    );
};

export default UnitConverter;
