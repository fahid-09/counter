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

                        <div className={styles.submenu}>
                            <ul>
                                <div className={styles.categorylable}>calculators</div>
                                <li>
                                    <div className={styles.listitem}>

                                        <div>
                                            <span className={styles.icon}>
                                                {getInitials("Percentage Calculator")}
                                            </span>
                                        </div>
                                        <div><Link href="/percentage-calculator">
                                            Percentage Calculator
                                        </Link>

                                            <div> percentage</div>
                                        </div>

                                    </div>


                                </li>
                                <li>
                                    <span className={styles.icon}>
                                        {getInitials("BMI Calculator")}
                                    </span>
                                    <Link href="/bmi-calculator">
                                        BMI Calculator
                                    </Link>
                                </li>
                                <li>
                                    <span className={styles.icon}>
                                        {getInitials("Countdown Timer")}
                                    </span>
                                    <Link href="/countdown-timer">
                                        Countdown Timer
                                    </Link>
                                </li>
                                <li>
                                    <span className={styles.icon}>
                                        {getInitials(" GPA Calculator")}
                                    </span>
                                    <Link href="/gpa-calculator">
                                        GPA Calculator
                                    </Link>
                                </li>
                                <li>
                                    <span className={styles.icon}>
                                        {getInitials("Age Calculator")}
                                    </span>
                                    <Link href="/age-calculator">
                                        Age Calculator
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <div className={styles.categorylable}>Generators</div>
                                <li>
                                    <span className={styles.icon}>
                                        {getInitials("Lorem Ipsum")}
                                    </span>
                                    <Link href="/lorem-ipsum">Lorem Ipsum</Link>
                                </li>
                                <li>
                                    <span className={styles.icon}>
                                        {getInitials("QR Code Generator")}
                                    </span>
                                    <Link href="/qrcode-generator">
                                        QR Code Generator
                                    </Link>
                                </li>
                                <li>
                                    <span className={styles.icon}>
                                        {getInitials("Random Picker")}
                                    </span>
                                    <Link href="/random-picker">
                                        Random Picker
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