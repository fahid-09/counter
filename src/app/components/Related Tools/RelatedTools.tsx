"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./RelatedTools.module.css";

const allTools = [
    {
        name: "Age Calculator",
        link: "/age-calculator",
    },
    {
        name: "BMI Calculator",
        link: "/bmi-calculator",
    },
    {
        name: "Percentage Calculator",
        link: "/percentage-calculator",
    },
    {
        name: "Countdown Timer",
        link: "/countdown-timer",
    },
    {
        name: "Lorem Ipsum Generator",
        link: "/lorem-ipsum",
    },
    {
        name: "QR Code Generator",
        link: "/qrcode-generator",
    },
    {
        name: "Random Picker",
        link: "/random-picker",
    },
];

const RelatedTools = () => {
    const pathname = usePathname();

    const relatedTools = allTools.filter(
        (tool) => tool.link !== pathname
    );
    console.log(relatedTools)

    return (
        <section className={styles.relatedTools}>
            <h2>Related Tools</h2>

            <div className={styles.grid}>
                {relatedTools.slice(0, 4).map((tool) => (
                    <Link
                        key={tool.link}
                        href={tool.link}
                        className={styles.card}
                    >
                        {tool.name}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedTools;