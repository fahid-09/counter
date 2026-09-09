"use client";

import { useState } from "react";
import styles from "../LoremIpsum/loremipsum.module.css";

const LoremIpsum = () => {

    const [activeTab, setActiveTab] = useState("paragraph");

    const [amount, setAmount] = useState(3);
    const [startClassic, setStartClassic] = useState(false);
    const [result, setResult] = useState("");

    const loremWords = `
        lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat duis aute irure dolor in reprehenderit voluptate velit esse
        cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat
        non proident sunt in culpa qui officia deserunt mollit anim id est laborum
    `.trim().split(/\s+/);


    // Generate Words
    const generateWords = (count: number) => {

        let words: string[] = [];

        for (let i = 0; i < count; i++) {
            words.push(loremWords[i % loremWords.length]);
        }

        let text = words.join(" ");

        if (startClassic) {
            text = "Lorem ipsum dolor sit amet " + text;
        }

        return text.charAt(0).toUpperCase() + text.slice(1) + ".";
    };


    // Generate Sentences
    const generateSentences = (count: number) => {

        const sentences = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            "Deserunt mollit anim id est laborum.",
        ];

        let result: string[] = [];

        for (let i = 0; i < count; i++) {
            result.push(sentences[i % sentences.length]);
        }

        let text = result.join(" ");

        if (startClassic) {
            text =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                text;
        }

        return text;
    };


    // Generate Paragraphs
    const generateParagraphs = (count: number) => {

        let paragraphs: string[] = [];

        for (let i = 0; i < count; i++) {

            const paragraph = generateSentences(5);

            paragraphs.push(paragraph);
        }

        let text = paragraphs.join("\n\n");

        if (startClassic) {
            text =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                text;
        }

        return text;
    };


    // Generate button
    const handleGenerate = () => {

        let generatedText = "";

        if (activeTab === "paragraph") {
            generatedText = generateParagraphs(amount);
        }

        if (activeTab === "sentences") {
            generatedText = generateSentences(amount);
        }

        if (activeTab === "words") {
            generatedText = generateWords(amount);
        }

        setResult(generatedText);
    };


    // Copy button
    const handleCopy = async () => {

        if (!result) return;

        await navigator.clipboard.writeText(result);

        alert("Text copied!");
    };


    // Clear button
    const handleClear = () => {
        setResult("");
    };


    // Tab change
    const handleTabChange = (tab: string) => {

        setActiveTab(tab);

        if (tab === "paragraph") {
            setAmount(3);
        }

        if (tab === "sentences") {
            setAmount(5);
        }

        if (tab === "words") {
            setAmount(50);
        }
    };


    return (
        <>
            <div className={styles.pageheader}>
                <h1>Lorem Ipsum Generator</h1>

                <p>
                    Generate clean placeholder text for mockups, layouts and drafts —
                    choose how much you need and copy it straight into your project.
                </p>
            </div>


            <div className="row">

                {/* LEFT SIDE */}
                <div className={`${styles.loremipsumleft} col-5`}>

                    <span className={styles.paneltitel}>
                        SETTINGS
                    </span>


                    <div className={styles.pills}>

                        <button
                            className={`${styles.pill} ${activeTab === "paragraph"
                                ? styles.active
                                : ""
                                }`}
                            onClick={() => handleTabChange("paragraph")}
                        >
                            Paragraph
                        </button>


                        <button
                            className={`${styles.pill} ${activeTab === "sentences"
                                ? styles.active
                                : ""
                                }`}
                            onClick={() => handleTabChange("sentences")}
                        >
                            Sentences
                        </button>


                        <button
                            className={`${styles.pill} ${activeTab === "words"
                                ? styles.active
                                : ""
                                }`}
                            onClick={() => handleTabChange("words")}
                        >
                            Words
                        </button>

                    </div>


                    {/* FORM */}
                    <div className={styles.formarea}>

                        {activeTab === "paragraph" && (
                            <div>

                                <label>
                                    Number of paragraphs
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    value={amount}
                                    onChange={(e) =>
                                        setAmount(Number(e.target.value))
                                    }
                                />

                            </div>
                        )}


                        {activeTab === "sentences" && (
                            <div>

                                <label>
                                    Number of sentences
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    value={amount}
                                    onChange={(e) =>
                                        setAmount(Number(e.target.value))
                                    }
                                />

                            </div>
                        )}


                        {activeTab === "words" && (
                            <div>

                                <label>
                                    Number of words
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    value={amount}
                                    onChange={(e) =>
                                        setAmount(Number(e.target.value))
                                    }
                                />

                            </div>
                        )}

                    </div>


                    {/* CHECKBOX */}
                    <label className={styles.checkboxrow}>

                        <input
                            type="checkbox"
                            id="startClassic"
                            checked={startClassic}
                            onChange={(e) =>
                                setStartClassic(e.target.checked)
                            }
                        />

                        Start with "Lorem ipsum dolor sit amet..."

                    </label>


                    {/* GENERATE BUTTON */}
                    <div>

                        <button
                            className={styles.generatetext}
                            onClick={handleGenerate}
                        >
                            Generate Text
                        </button>

                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className={`${styles.loremipsumright} col-7`}>

                    <h2 className={styles.paneltitel}>
                        Result
                    </h2>


                    <div className={styles.textresult}>

                        {result ? result : "Your generated text will appear here."}

                    </div>


                    {/* COPY / CLEAR */}
                    {result && (
                        <div className="mt-3">

                            <button
                                className="btn btn-primary me-2"
                                onClick={handleCopy}
                            >
                                Copy
                            </button>

                            <button
                                className="btn btn-secondary"
                                onClick={handleClear}
                            >
                                Clear
                            </button>

                        </div>
                    )}

                </div>

            </div>
        </>
    );
};

export default LoremIpsum;