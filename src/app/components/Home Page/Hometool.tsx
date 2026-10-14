"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import styles from "../Home Page/Homepage.module.css";
import Link from "next/link";

const Hometool = () => {
    const [active, setactive] = useState("All");
    const [search, setSearch] = useState("");

    const alltabs = [
        "All",
        "Calculator",
        "Converter",
        "Text Tool",
        "Generator & Pickers",
        "Business Tool",
    ];

    const tools = [
        { name: "Age Calculator", description: "Years, months, days", category: "Calculator", href: "/age-calculator" },
        { name: "BMI Calculator", description: "Height & weight → BMI", category: "Calculator", href: "/bmi-calculator" },
        { name: "CountDown Timer", description: "Days until any date", category: "Calculator", href: "/countdown-timer" },
        { name: "GPA Calculator", description: "Weighted 4.0 scale", category: "Calculator", href: "/gpa-calculator" },
        { name: "Percentage Calculator", description: "3 common % problems", category: "Calculator", href: "/percentage-calculator" },
        { name: "EMI Loan", description: "EMI loan amount", category: "Calculator", href: "/emi-loan" },

        { name: "Lorem Ipsum", description: "Generate text for mockups", category: "Generator & Pickers", href: "/lorem-ipsum" },
        { name: "QR Code", description: "Get downloadable QR of any text", category: "Generator & Pickers", href: "/qrcode-generator" },
        { name: "Random Picker", description: "Pick items randomly", category: "Generator & Pickers", href: "/random-picker" },

        { name: "Resume Builder", description: "Ready-to-print resume", category: "Business Tool", href: "/resume-builder" },
        { name: "Invoice Generator", description: "Ready-to-print invoice", category: "Business Tool", href: "/invoice-generator" },

        { name: "Unit Converter", description: "Length, weight, temperature", category: "Converter", href: "/unit-converter" },
        { name: "Color Picker", description: "HEX, RGB, HSL", category: "Converter", href: "/color-picker" },

        { name: "Word Counter", description: "Count words as you type", category: "Text Tool", href: "/word-counter" },
        { name: "Case Converter", description: "Switch between uppercase and lowercase", category: "Text Tool", href: "/case-converter" },
    ];

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase();
    };

    // Search aur category dono apply honge
    const filteredTools = tools.filter((tool) => {
        const matchesCategory =
            active === "All" || tool.category === active;

        const matchesSearch =
            tool.name.toLowerCase().includes(search.toLowerCase()) ||
            tool.description.toLowerCase().includes(search.toLowerCase()) ||
            tool.category.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // All tab mein category-wise sections show honge
    const categoriesToShow =
        active === "All"
            ? alltabs.slice(1)
            : [active];

    return (
        <>
            {/* Search Box */}
            <div className={styles.search_box}>
                <span>
                    <Search
                        className={styles.search_icon}
                        strokeWidth={1}
                    />
                </span>

                <input
                    type="text"
                    className={styles.search_input}
                    id="searchInput"
                    placeholder='Search tools — try "age", "qr" or "invoice"'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Category Tabs */}
            <div className={styles.tabs}>
                {alltabs.map((tab) => (
                    <button
                        type="button"
                        key={tab}
                        onClick={() => setactive(tab)}
                        className={`${styles.tabbutton} ${
                            active === tab ? styles.active : ""
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tools Grid */}
            {categoriesToShow.map((category) => {
                const categoryTools = filteredTools.filter(
                    (tool) => tool.category === category
                );

                if (categoryTools.length === 0) {
                    return null;
                }

                return (
                    <section key={category}>
                        <h2 className={styles.toolcategory}>
                            {category}
                        </h2>

                        <div className={styles.tools_grid}>
                            {categoryTools.map((tool) => (
                                <div
                                    className={styles.toolcard}
                                    key={tool.name}
                                >
                                    <span className={styles.icon}>
                                        {getInitials(tool.name)}
                                    </span>

                                    <div className={styles.toolcontent}>
                                        <Link
                                            href={tool.href}
                                            className={styles.toolname}
                                        >
                                            {tool.name}
                                        </Link>

                                        <div className={styles.tooldesc}>
                                            {tool.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            })}

            {/* No Results Message */}
            {filteredTools.length === 0 && (
                <div className={styles.no_results}>
                    No tools found. Try another search.
                </div>
            )}
        </>
    );
};

export default Hometool;