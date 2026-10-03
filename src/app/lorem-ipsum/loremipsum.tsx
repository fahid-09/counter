"use client";

import { useState } from "react";
import styles from "../lorem-ipsum/loremipsum.module.css";
import Result from "./result";
import RelatedTools from "../components/Related Tools/RelatedTools";

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
    `
        .trim()
        .split(/\s+/);

    const generateWords = (count: number) => {
        const words: string[] = [];

        for (let i = 0; i < count; i++) {
            words.push(loremWords[i % loremWords.length]);
        }

        let text = words.join(" ");

        if (startClassic) {
            text = "Lorem ipsum dolor sit amet " + text;
        }

        return text.charAt(0).toUpperCase() + text.slice(1) + ".";
    };

    const generateSentences = (count: number) => {
        const sentences = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            "Deserunt mollit anim id est laborum.",
        ];

        const result: string[] = [];

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

    const generateParagraphs = (count: number) => {
        const paragraphs: string[] = [];

        for (let i = 0; i < count; i++) {
            paragraphs.push(generateSentences(5));
        }

        let text = paragraphs.join("\n\n");

        if (startClassic) {
            text =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                text;
        }

        return text;
    };

    const handleGenerate = () => {
        let generatedText = "";

        if (activeTab === "paragraph") {
            generatedText = generateParagraphs(amount);
        } else if (activeTab === "sentences") {
            generatedText = generateSentences(amount);
        } else if (activeTab === "words") {
            generatedText = generateWords(amount);
        }

        setResult(generatedText);
    };

    const handleCopy = async () => {
        if (!result) return;

        await navigator.clipboard.writeText(result);
        alert("Text copied!");
    };

    const handleClear = () => {
        setResult("");
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);

        if (tab === "paragraph") {
            setAmount(3);
        } else if (tab === "sentences") {
            setAmount(5);
        } else if (tab === "words") {
            setAmount(50);
        }
    };

    return (
        <>



            <div className={styles.toolpanel}>
                <div className={styles.loremipsumleft}>
                    <span className={styles.paneltitel}>Settings</span>

                    <div className={styles.pills}>
                        <button
                            className={`${styles.pill} ${activeTab === "paragraph" ? styles.active : ""
                                }`}
                            onClick={() => handleTabChange("paragraph")}
                        >
                            Paragraph
                        </button>

                        <button
                            className={`${styles.pill} ${activeTab === "sentences" ? styles.active : ""
                                }`}
                            onClick={() => handleTabChange("sentences")}
                        >
                            Sentences
                        </button>

                        <button
                            className={`${styles.pill} ${activeTab === "words" ? styles.active : ""
                                }`}
                            onClick={() => handleTabChange("words")}
                        >
                            Words
                        </button>
                    </div>

                    <div className={styles.formarea}>
                        <label>
                            Number of{" "}
                            {activeTab === "paragraph"
                                ? "paragraphs"
                                : activeTab === "sentences"
                                    ? "sentences"
                                    : "words"}
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                    </div>

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

                    <button
                        className={styles.generatetext}
                        onClick={handleGenerate}
                    >
                        Generate Text
                    </button>
                </div>
{/* ****result section****  */}
                <div className={styles.loremipsumright}>
                    <Result result={result}
                        handleCopy={handleCopy}
                        handleClear={handleClear} />
                </div>
            </div>

            <RelatedTools />
        </>
    );
};

export default LoremIpsum;