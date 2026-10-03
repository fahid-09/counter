"use client";

import { useState } from "react";
import styles from "../Case Tool/CaseTool.module.css";

const CaseTool = () => {
    const [text, setText] = useState("");
    const [textCopied, setTextCopied] = useState(false);

    const titleCase = (text: string) => {
        return text
            .toLowerCase()
            .split(" ")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(" ");
    };

    const sentenceCase = (text: string) => {
        return text
            .toLowerCase()
            .replace(
                /(^\s*\w|[.!?]\s+\w)/g,
                (match) => match.toUpperCase()
            );
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        setTextCopied(true);

        setTimeout(() => {
            setTextCopied(false);
        }, 2000);
    };

    return (
        <div className={styles.casetool}>
            <textarea
                className={styles.mainText}
                placeholder="Type something to convert..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="row" id={styles.casebtns}>
                <div className="col-3 p-0">
                    <button
                        onClick={() => setText(text.toUpperCase())}
                        className={styles.casebtn}
                    >
                        UPPERCASE
                    </button>
                </div>

                <div className="col-3 p-0">
                    <button
                        onClick={() => setText(text.toLowerCase())}
                        className={styles.casebtn}
                    >
                        lowercase
                    </button>
                </div>

                <div className="col-3 p-0">
                    <button
                        onClick={() => setText(titleCase(text))}
                        className={styles.casebtn}
                    >
                        Title Case
                    </button>
                </div>

                <div className="col-3 p-0">
                    <button
                        onClick={() => setText(sentenceCase(text))}
                        className={styles.casebtn}
                    >
                        Sentence case
                    </button>
                </div>
            </div>

            <div className={styles.outputlabel}>Result</div>

            <div className={styles.caseoutput}>
                {text || "Your converted text will appear here"}
            </div>

            <button
                className={styles.resultbtn}
                onClick={copyText}
            >
                Copy Result
            </button>

            {textCopied && <span>Text copied</span>}
        </div>
    );
};

export default CaseTool;

