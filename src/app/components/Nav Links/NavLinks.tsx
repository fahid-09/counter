"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import styles from "../Nav Links/NavLinks.module.css";

type NavLinksProps = {

    showtools: boolean;
    showgetstarted: boolean;
    showabout: boolean;
};


const NavLinks = ({
    showtools,
    showgetstarted,
    showabout,
}: NavLinksProps) => {

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase();
    };
    return (
        <div className={styles.navLinks}>
            <ul>
                {showtools && (
                    <li className={styles.dropdown}>
                        <Link href="/">Tools</Link>
                        <ChevronDown className={styles.down} strokeWidth={1} />
                        <ChevronUp className={styles.up} strokeWidth={1} />

                        <div className={styles.submenu}>
                            <ul>
                                <div className={styles.categorylable}>calculators</div>

                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("Age Calculator")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/age-calculator">
                                                Age Calculator
                                            </Link>

                                            <span>
                                                Years, months, days
                                            </span>
                                        </div>

                                    </div>
                                </li>

                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("GPA Calculator")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/gpa-calculator">
                                                GPA Calculator
                                            </Link>

                                            <span>
                                                Weighted 4.0 scale
                                            </span>
                                        </div>

                                    </div>
                                </li>

                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("BMI Calculator")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/bmi-calculator">
                                                BMI Calculator
                                            </Link>

                                            <span>
                                                Height & weight → BMI
                                            </span>
                                        </div>

                                    </div>
                                </li>

                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("Countdown Calculator")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/countdown-timer">
                                                Countdown Calculator
                                            </Link>

                                            <span>
                                                Days until any date
                                            </span>
                                        </div>

                                    </div>
                                </li>
                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("Percentage Calculator")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/percentage-calculator">
                                                Percentage Calculator
                                            </Link>

                                            <span>
                                                3 common % problems
                                            </span>
                                        </div>

                                    </div>
                                </li>
                            </ul>
                            <ul>
                                <div className={styles.categorylable}>Generators</div>

                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("Lorem Ipsum")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/lorem-ipsum">
                                                Lorem Ipsum
                                            </Link>

                                            <span>
                                                Generate text for mockups
                                            </span>
                                        </div>

                                    </div>
                                </li>
                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("QR Code Generator")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/qrcode-generator">
                                                QR Code Generator
                                            </Link>

                                            <span>
                                                Get downloadable QR of any text
                                            </span>
                                        </div>

                                    </div>
                                </li>
                                <div className={styles.categorylable}>Pickers</div>
                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("Random Picker")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/random-picker">
                                                Random Picker
                                            </Link>

                                            <span>
                                                Pick items randomly
                                            </span>
                                        </div>

                                    </div>
                                </li>
                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("Color Converter")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/color-picker">
                                                Color Converter
                                            </Link>

                                            <span>
                                                HEX, RGB, HSL
                                            </span>
                                        </div>

                                    </div>
                                </li>
                                <li className={styles.singlelistitem}>
                                    <div className={styles.listitem}>

                                        <span className={styles.icon}>
                                            {getInitials("Unit Converter")}
                                        </span>

                                        <div className={styles.toolinfo}>
                                            <Link href="/unit-converter">
                                                Unit Converter
                                            </Link>

                                            <span>
                                                Length, weight, temp
                                            </span>
                                        </div>

                                    </div>
                                </li>
                            </ul>

                        </div>
                    </li>
                )}

                {showabout && (
                    <li>
                        <Link href="/about-us">About</Link>
                    </li>
                )}

                {showgetstarted && (
                    <li className={styles.button}>
                        <Link href="/">Get Started</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default NavLinks;