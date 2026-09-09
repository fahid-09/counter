"use client"

import { useState } from "react";
import QRCode from "qrcode";
const Qrcode = () => {

    const [text, settext] = useState("");
    const [qrImage, setQrImage] = useState(null);
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
        <input type="text" placeholder="enetr text or url" onChange={(e) => settext(e.target.value)} />
        <button onClick={generateQR}>Generate QR Code</button>

        {qrImage && (
        <div>
          <img src={qrImage} alt="Generated QR Code" />
          <a href={qrImage} download="qrcode.png">
            Download QR Code
          </a>
        </div>
      )}
    </>)


}
export default Qrcode;