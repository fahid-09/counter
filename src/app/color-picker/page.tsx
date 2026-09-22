"use client"

import RelatedTools from "../components/Related Tools/RelatedTools";
import styles from "../color-picker/colorpicker.module.css"
import { useState } from "react";
const GpaCalculator = () => {

    const [color, setcolor]= useState("")
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
                   
                   <div  style={{background:color, width:"120px", height:"120px"}}></div>
                   <input type="color"  value={color} onChange={(e)=>setcolor(e.target.value)}/>

                </div>
                <div className={styles.toolpanelright}>
                    
                    

                </div>

            </div>


            <RelatedTools />
        </>
    );
};

export default GpaCalculator;
