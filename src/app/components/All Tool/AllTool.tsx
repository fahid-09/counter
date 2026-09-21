import styles from "../All Tool/AllTool.module.css"
import Link from "next/link";
const AllTool = () => {

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
    ];
    return (<>
        <div className={styles.alltoolpanel}>
            <p className={styles.panelheader}>All Tools
            </p>
            <h2>Every tool, one place.</h2>
            <p> Nine small tools, each built to do one job well. Pick a category or just scan the list.</p>
        </div>

        <div>
            <section className={styles.relatedTools}>
                <h2>Calculators</h2>

                <div className={styles.grid}>


                    {allTools.map((tool) => (
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
        </div>

    </>)
}

export default AllTool;