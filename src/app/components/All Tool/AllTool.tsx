import Link from "next/link";
import styles from "../All Tool/AllTool.module.css";

const calculators = [
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
];

const generators = [
    {
        name: "Lorem Ipsum",
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

const ToolCard = ({
    name,
    link,
}: {
    name: string;
    link: string;
}) => (
    <Link href={link} className={styles.card}>
        <div className={styles.icon}>
            {name
                .split(" ")
                .map((word) => word[0])
                .join("")}
        </div>

        <div className={styles.name}>{name}</div>
    </Link>
);

const AllTool = () => {
    return (
        <>
            <div className={styles.alltoolpanel}>
                <p className={styles.panelheader}>All Tools</p>

                <h2>Every tool, one place.</h2>

                <p>
                    Nine small tools, each built to do one job well. Pick a
                    category or just scan the list.
                </p>
            </div>

            <section className={styles.relatedTools}>
                <h6 className={styles.categorylabel}>Calculators</h6>

                <div className={styles.grid}>
                    {calculators.map((tool) => (
                        <ToolCard key={tool.link} {...tool} />
                    ))}
                </div>
            </section>

            <section className={styles.relatedTools}>
                <h6 className={styles.categorylabel}>
                    Generators & pickers
                </h6>

                <div className={styles.grid}>
                    {generators.map((tool) => (
                        <ToolCard key={tool.link} {...tool} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default AllTool;
