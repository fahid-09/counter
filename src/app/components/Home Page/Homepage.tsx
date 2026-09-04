"use client"

import { useState } from "react";
import styles from "../Home Page/Homepage.module.css"

const Homepage = () => {
    
   const [text, settext] = useState("");
   const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
   const sentenceCount = text.trim() === ""
    ? 0
    : text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length;

    const readingTime = wordCount === 0
    ? 0
    : Math.ceil(wordCount / 200);

   
    return (<>
        <div className="">
            <h2 className={styles.heading}>Know your words,<br />
                down to the letter.</h2>
            <p className={styles.headingtext}>Paste your text below and watch the count update as you type. No sign-up, no clutter — just the numbers you <br />need.</p>
        </div>
        <div className={styles.toolcard}>
            <div className={styles.toolcardhead}>
                <span>Word & character counter</span>
                <button className={styles.clearbtn} onClick={()=>settext("")}>clear</button>
            </div>
            <textarea value={text} id={styles.mainText} placeholder="Start typing or paste your text here..."
           onChange={(e) => settext(e.target.value)}></textarea>

            <div className={styles.statsrow}>
                <div className="row">
                    <div className="col-3">
                        <div className={styles.stat}>
                            <div className={styles.statlable}>
                                words
                            </div>
                            <div className={styles.statvalue}>
                                {wordCount}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles.stat}>
                            <div className={styles.statlable}>
                                Characters
                            </div>
                            <div className={styles.statvalue}>
                               {text.length}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles.stat}>
                            <div className={styles.statlable}>
                                Sentences
                            </div>
                            <div className={styles.statvalue}>
                               {sentenceCount}
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className={styles.stat}>
                            <div className={styles.statlable}>
                                Reading time
                            </div>
                            <div className={styles.statvalue}>
                                {readingTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
    )
}

export default Homepage;