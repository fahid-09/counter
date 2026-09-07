"use client";

import { useState } from "react";
import styles from "../LoremIpsum/loremipsum.module.css";

const LoremIpsum = () => {

    const [activeTab, setActiveTab] = useState("paragraph");

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
                            className={`${styles.pill} ${activeTab === "paragraph" ? styles.active : ""
                                }`}
                            onClick={() => setActiveTab("paragraph")}
                        >
                            Paragraph
                        </button>

                        <button
                            className={`${styles.pill} ${activeTab === "sentences" ? styles.active : ""
                                }`}
                            onClick={() => setActiveTab("sentences")}
                        >
                            Sentences
                        </button>

                        <button
                            className={`${styles.pill} ${activeTab === "words" ? styles.active : ""
                                }`}
                            onClick={() => setActiveTab("words")}
                        >
                            Words
                        </button>

                    </div>

                    {/* FORM */}
                    <div className={styles.formarea}>

                        {activeTab === "paragraph" && (
                            <div>
                                <label>Number of paragraphs</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    defaultValue="3"
                                />
                            </div>
                        )}

                        {activeTab === "sentences" && (
                            <div>
                                <label>Number of sentences</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    defaultValue="5"
                                />
                            </div>
                        )}

                        {activeTab === "words" && (
                            <div>
                                <label>Number of words</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    defaultValue="50"
                                />
                            </div>
                        )}

                    </div>
                    <label className={styles.checkboxrow}>
                        <input type="checkbox" id="startClassic" />
                        Start with "Lorem ipsum dolor sit amet..."
                    </label>
                    <div >

                    <button className={styles.generatetext}>Generate Text</button>

                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className={`${styles.loremipsumright} col-7`}>

                    <h2>Generated Text</h2>

                    {activeTab === "paragraph" && (
                        <p>
                            Paragraph form yahan show hoga.
                        </p>
                    )}

                    {activeTab === "sentences" && (
                        <p>
                            Sentences form ka related data yahan show hoga.
                        </p>
                    )}

                    {activeTab === "words" && (
                        <p>
                            Words form ka related data yahan show hoga.
                        </p>
                    )}

                </div>

            </div>
        </>
    );
};

export default LoremIpsum;