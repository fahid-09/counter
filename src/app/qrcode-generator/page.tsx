"use client";

import { useState } from "react";
import QRCode from "qrcode";
import styles from "../qrcode-generator/QR.module.css";
import RelatedTools from "../components/Related Tools/RelatedTools";
import Pageheader from "./pageheader";
import Qrcoderesult from "./qrcoderesult";

const Qrcode = () => {
    const [text, setText] = useState("");
    const [qrImage, setQrImage] = useState("");

    const generateQR = async () => {
        if (!text) return;

        try {
            const url = await QRCode.toDataURL(text, {
                width: 300,
                margin: 2,
            });

            setQrImage(url);
        } catch (err) {
            console.error("QR generation failed:", err);
        }
    };

    const clearText = () => {
        setText("");
        setQrImage("");
    };

    return (
        <>
        {/* ****page header****  */}
            <Pageheader />

            <div className={styles.QRrow}>
                <div className={styles.QRcol}>
                    <div className={styles.QRleft}>
                        <input
                            type="text"
                            value={text}
                            placeholder="Enter text or URL"
                            onChange={(e) => setText(e.target.value)}
                        />

                        <button
                            className={styles.generateQR}
                            onClick={generateQR}
                        >
                            Generate QR Code
                        </button>

                        <button
                            className={styles.cleartext}
                            onClick={clearText}
                        >
                            Clear
                        </button>
                    </div>
                </div>

                <div className={styles.QRcol}>
                    <div className={styles.QRleft}>
                       <Qrcoderesult qrImage = {qrImage}/>
                    </div>
                </div>
            </div>

            <RelatedTools />
        </>
    );
};

export default Qrcode;
