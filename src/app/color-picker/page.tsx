"use client"

import RelatedTools from "../components/Related Tools/RelatedTools";
import styles from "../color-picker/colorpicker.module.css"
import { useState } from "react";
import Description from "./Description";
const GpaCalculator = () => {

    const generateShades = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    const shades = [];

    for (let i = 10; i <= 90; i += 10) {
        const newR = Math.round(r * (1 - i / 100));
        const newG = Math.round(g * (1 - i / 100));
        const newB = Math.round(b * (1 - i / 100));

        const newHex =
            "#" +
            [newR, newG, newB]
                .map((value) => value.toString(16).padStart(2, "0"))
                .join("");

        shades.push(newHex);
    }

    return shades;
};

    const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgb(${r}, ${g}, ${b})`;
    };

    const hexToHsl = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h = 0;
        let s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
            const d = max - min;

            s = l > 0.5
                ? d / (2 - max - min)
                : d / (max + min);

            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;

                case g:
                    h = (b - r) / d + 2;
                    break;

                case b:
                    h = (r - g) / d + 4;
                    break;
            }

            h /= 6;
        }

        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    };
    function copyText(value: string, type: string) {
        navigator.clipboard.writeText(value);
        setCopied(type);

        setTimeout(() => {
            setCopied("");
        }, 2000);
    }
    const [color, setcolor] = useState("#e8a33d");
    const [textxopy, settextcopy] = useState(false);
    const [copied, setCopied] = useState("");
    return (
        <>
            <div className={styles.pageheader}>
                <h1>Color Converter</h1>

                <p>
                    Type or pick a color and get it instantly in HEX, RGB and HSL —
                    with a live preview and a few nearby shades.
                </p>
            </div>
            <div className={styles.toolpanel}>
                <div className={styles.toolpanelleft}>
                    <p className={styles.paneltitle}>Pick a color</p>
                    <div className={styles.colorbox} style={{ background: color }}></div>
                    <input type="color" value={color} onChange={(e) => setcolor(e.target.value)} />
                    <span>Or click to open the color picker</span>

                    <div className={styles.selectedcolorcode}>
                        <label>HEX code</label>
                        <input type="text" name="" id="" readOnly value={color} />
                    </div>
                </div>

                <div className={styles.toolpanelright}>
                    <div className={styles.formatrow}>
                        <div className={styles.hexlabel}>
                            <label>HEX</label>
                            <label>{color}</label>
                        </div>
                        <div>
                            {copied === "hex" && <span>text copied</span>}
                            <button
                                className={styles.copybtn}
                                onClick={() => copyText(color, "hex")}
                            >
                                copy
                            </button>
                        </div>

                    </div>

                    <div className={styles.formatrow}>
                        <div className={styles.hexlabel}>
                            <label>RGB</label>
                            <label>{hexToRgb(color)}</label>
                        </div>
                        <div>
                            {copied === "rgb" && <span>text copied</span>}
                            <button
                                className={styles.copybtn}
                                onClick={() => copyText(hexToRgb(color), "rgb")}
                            >
                                copy
                            </button>
                        </div>
                    </div>

                    <div className={styles.formatrow}>
                        <div className={styles.hexlabel}>
                            <label>HSL</label>
                            <label>{hexToHsl(color)}</label>
                        </div>
                        <div>
                            {copied === "hsl" && <span>text copied</span>}
                            <button
                                className={styles.copybtn}
                                onClick={() => copyText(hexToHsl(color), "hsl")}
                            >
                                copy
                            </button>
                        </div>
                    </div>
                   <div className={styles.shades}>
    {generateShades(color).map((shade) => (
        <div
            key={shade}
            className={styles.shade}
            style={{ backgroundColor: shade }}
        >
            {shade}
        </div>
    ))}
</div>

                </div>
            </div>

            <Description />
            <RelatedTools />
        </>
    );
};
export default GpaCalculator;
