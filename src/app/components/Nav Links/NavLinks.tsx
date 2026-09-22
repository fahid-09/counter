"use client"

import styles from "../Nav Links/NavLinks.module.css";
import Link from "next/link";

const NavLinks = ({ showtools, showgetstarted, showabout  }: {showtools:boolean, showgetstarted: boolean, showabout: boolean }) => {
    return (<>
        <div className={styles.navLinks}>
            <ul >
                { showtools &&
                    <li className={styles.dropsown}><Link href={"/"}>Tools</Link>
                        <div className={styles.submenu}>
                            <ul>
                                <li><Link href={"/lorem-ipsum"}>LoremIpsum</Link></li>
                                <li><Link href={"/qrcode-generator"}>QR Code Generator</Link></li>
                                <li><Link href={"/random-picker"}>Random Picker</Link></li>
                                <li><Link href={"/age-calculator"}>Age Calculator</Link></li>
                                <li><Link href={"/percentage-calculator"}>Percentage Calculator</Link></li>
                                <li><Link href={"/bmi-calculator"}>BMI Calculator</Link></li>
                                <li><Link href={"/countdown-timer"}>Countdown Timer</Link></li>

                            </ul>
                        </div>
                    </li>
                }

                <li><Link href={"/"}>About</Link></li>
                {showgetstarted && <li className={styles.button}><Link href={"/"}>Get started</Link></li>}
                {showabout && <li><Link href={"/"}>About</Link></li>}
            </ul>
        </div>
    </>)
}

export default NavLinks;