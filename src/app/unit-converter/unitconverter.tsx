"use client";

import { useState } from "react";
import styles from "./unitconverter.module.css";
import Pageheader from "./pageheader";
import Resultsection from "./reultsection";


type Category = "Length" | "Weight" | "Temperature";

// All values are relative to the base unit (Meter / Kilogram)
const lengthUnits: Record<string, number> = {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Millimeter: 0.001,
    Mile: 1609.344,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
};

const weightUnits: Record<string, number> = {
    Kilogram: 1,
    Gram: 0.001,
    Milligram: 0.000001,
    Pound: 0.45359237,
    Ounce: 0.028349523125,
    Ton: 1000,
};

const CATEGORIES: Record<
    Category,
    { defaultFrom: string; defaultTo: string; units: string[] }
> = {
    Length: {
        defaultFrom: "Meter",
        defaultTo: "Kilometer",
        units: Object.keys(lengthUnits),
    },
    Weight: {
        defaultFrom: "Kilogram",
        defaultTo: "Gram",
        units: Object.keys(weightUnits),
    },
    Temperature: {
        defaultFrom: "Celsius",
        defaultTo: "Fahrenheit",
        units: ["Celsius", "Fahrenheit", "Kelvin"],
    },
};

const toCelsius = (value: number, unit: string) => {
    if (unit === "Fahrenheit") return ((value - 32) * 5) / 9;
    if (unit === "Kelvin") return value - 273.15;
    return value;
};

const fromCelsius = (value: number, unit: string) => {
    if (unit === "Fahrenheit") return (value * 9) / 5 + 32;
    if (unit === "Kelvin") return value + 273.15;
    return value;
};

const convert = (
    category: Category,
    value: number,
    from: string,
    to: string
): number => {
    if (category === "Length") {
        return (value * lengthUnits[from]) / lengthUnits[to];
    }
    if (category === "Weight") {
        return (value * weightUnits[from]) / weightUnits[to];
    }
    return fromCelsius(toCelsius(value, from), to);
};

// Removes floating point noise like 0.30000000000000004
const formatResult = (n: number) =>
    Number.isFinite(n) ? parseFloat(n.toPrecision(10)) : 0;

const UnitConverter = () => {
    const [active, setActive] = useState<Category>("Length");
    const [fromValue, setFromValue] = useState<number | "">(1);
    const [fromUnit, setFromUnit] = useState("Meter");
    const [toUnit, setToUnit] = useState("Kilometer");

    // Derived value: no need for separate state + useEffect
    const result =
        fromValue === ""
            ? 0
            : formatResult(convert(active, fromValue, fromUnit, toUnit));

    const changeCategory = (category: Category) => {
        setActive(category);
        setFromUnit(CATEGORIES[category].defaultFrom);
        setToUnit(CATEGORIES[category].defaultTo);
    };

    const swapUnits = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
    };

    const units = CATEGORIES[active].units;

    return (
        <>

            <Pageheader />
            <div className={styles.tabmenu}>
                {(Object.keys(CATEGORIES) as Category[]).map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`${styles.menubtn} ${active === category ? styles.active : ""
                            }`}
                        onClick={() => changeCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.toolpanel}>
                <div className={styles.converterrow}>
                    {/* FROM */}
                    <div className={styles.convertfrompart}>
                        <label htmlFor="from-value">From</label>

                        <input
                            id="from-value"
                            type="number"
                            value={fromValue}
                            onChange={(e) =>
                                setFromValue(
                                    e.target.value === "" ? "" : Number(e.target.value)
                                )
                            }
                        />

                        <select
                            aria-label="From unit"
                            value={fromUnit}
                            onChange={(e) => setFromUnit(e.target.value)}
                        >
                            {units.map((unit) => (
                                <option key={unit} value={unit}>
                                    {unit}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* SWAP BUTTON */}
                    <div>
                        <button
                            type="button"
                            className={styles.swapbtn}
                            onClick={swapUnits}
                            aria-label="Swap units"
                        >
                            ⇄
                        </button>
                    </div>

                    {/* TO */}
                    <div className={styles.convertfrompart}>
                        <label htmlFor="to-value">To</label>

                        <input
                            id="to-value"
                            type="number"
                            value={fromValue === "" ? "" : result}
                            readOnly
                        />

                        <select
                            aria-label="To unit"
                            value={toUnit}
                            onChange={(e) => setToUnit(e.target.value)}
                        >
                            {units.map((unit) => (
                                <option key={unit} value={unit}>
                                    {unit}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* RESULT EQUATION */}
                <Resultsection fromValue={fromValue}
                    fromUnit={fromUnit}
                    result={result}
                    toUnit={toUnit}
                />
            </div>
        </>
    );
};

export default UnitConverter;
