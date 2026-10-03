import styles from "./unitconverter.module.css";

const Pageheader = () => {
    return (<>
        <div className={styles.pageheader}>
            <h1>Unit Converter</h1>

            <p>
                Length, weight or temperature — pick a category, enter a value,
                and get the converted number instantly.
            </p>
        </div>
    </>)
}




export default Pageheader;