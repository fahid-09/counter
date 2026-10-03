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
    return (
        <div className={styles.navLinks}>
            <ul>
                {showtools && (
                    <li className={styles.dropdown}>
                        <Link href="/">Tools</Link>

                        <div className={styles.submenu}>
                            <ul>
                                <li>
                                    <Link href="/lorem-ipsum">Lorem Ipsum</Link>
                                </li>
                                <li>
                                    <Link href="/qrcode-generator">
                                        QR Code Generator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/random-picker">
                                        Random Picker
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/age-calculator">
                                        Age Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/percentage-calculator">
                                        Percentage Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/bmi-calculator">
                                        BMI Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/countdown-timer">
                                        Countdown Timer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gpa-calculator">
                                        GPA Calculator
                                    </Link>
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