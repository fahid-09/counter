"use client"

import styles from "../Nav Links/NavLinks.module.css";
import Link from "next/link";

const NavLinks = ({ showThird, showfourth}: { showThird: boolean, showfourth: boolean}) => {
    return (<>
        <div className={styles.navLinks}>
            <ul >
                <li><Link href={"/"}>Tools</Link></li>
                <li><Link href={"/"}>About</Link></li>
                {showThird && <li className={styles.button}><Link href={"/"}>Get started</Link></li>}
                {showfourth && <li><Link href={"/"}>About</Link></li>}
            </ul>
        </div></>)
}

export default NavLinks;