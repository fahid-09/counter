"use client"
import styles from "../QRCodeGenerator/QR.module.css"
import { useState } from "react";
import QRCode from "qrcode";
const Qrcode = () => {

    const [text, settext] = useState("");
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

    return (<>
<div className={styles.pageheader}>
                <h1>Lorem Ipsum Generator</h1>

                <p>
                   Create a QR code quickly and easily with our free QR Code Generator. Enter any text, website URL, or other information into the tool, generate your QR code, and download it as a PNG image.
                </p>
            </div>
        <div className="row">
            <div className="col-6">
                <input type="text" placeholder="enetr text or url" onChange={(e) => settext(e.target.value)} />
                <button onClick={generateQR}>Generate QR Code</button>
            </div>
            <div className="col-6">
                {qrImage && (
                    <div>
                        <img src={qrImage} alt="Generated QR Code" />
                        <a href={qrImage} download="qrcode.png">
                            Download QR Code
                        </a>
                    </div>
                )}
            </div>
        </div>
    </>)


}
export default Qrcode;