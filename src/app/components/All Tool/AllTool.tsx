import styles from "../All Tool/AllTool.module.css"
import Link from "next/link";
const AllTool = () => {

    const allcalculators = [
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

    const allgenrators = [
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

    return (<>
        <div className={styles.alltoolpanel}>
            <p className={styles.panelheader}>All Tools
            </p>
            <h2>Every tool, one place.</h2>
            <p> Nine small tools, each built to do one job well. Pick a category or just scan the list.</p>
        </div>

       
            <section className={styles.relatedTools}>
                <h6 className={styles.categorylabel}>Calculators</h6>

                <div className={styles.grid}>
                    {allcalculators.map((tool) => (
                        <Link
                            key={tool.link}
                            href={tool.link}
                            className={styles.card}
                        >
                            <div className={styles.icon}>
                                {tool.name
                                    .split(" ")
                                    .map(word => word[0])
                                    .join("")}
                            </div>

                            <div className={styles.name}>
                                {tool.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
       
        
            <section className={styles.relatedTools}>
                <h6 className={styles.categorylabel}>Generators & pickers</h6>

                <div className={styles.grid}>
                    {allgenrators.map((tool) => (
                        <Link
                            key={tool.link}
                            href={tool.link}
                            className={styles.card}
                        >
                            <div className={styles.icon}>
                                {tool.name
                                    .split(" ")
                                    .map(word => word[0])
                                    .join("")}
                            </div>

                            <div className={styles.name}>
                                {tool.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
       

    </>)
}

export default AllTool;