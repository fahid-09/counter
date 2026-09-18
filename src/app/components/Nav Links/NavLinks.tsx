"use client"

import styles from "../Nav Links/NavLinks.module.css";
import Link from "next/link";

const NavLinks = ({ showThird, showfourth}: { showThird: boolean, showfourth: boolean}) => {
    return (<>
        <div className={styles.navLinks}>
            <ul >
                <li className={styles.dropsown}><Link href={"/"}>Tools</Link>
                <div className={styles.submenu}>
                    <ul>
                        <li><Link href={"/LoremIpsum"}>LoremIpsum</Link></li>
                        <li><Link href={"/QRCodeGenerator"}>QR Code Generator</Link></li>
                        <li><Link href={"/RandomPicker"}>Random Picker</Link></li>
                        <li><Link href={"/AgeCalculator"}>Age Calculator</Link></li>
                        <li><Link href={"/PercentageCalculator"}>Percentage Calculator</Link></li>



                    </ul>
                </div>
                </li>
                <li><Link href={"/"}>About</Link></li>
                {showThird && <li className={styles.button}><Link href={"/"}>Get started</Link></li>}
                {showfourth && <li><Link href={"/"}>About</Link></li>}
            </ul>
        </div></>)
}

export default NavLinks;