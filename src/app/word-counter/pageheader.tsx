import styles from "../word-counter/wordcounter.module.css"


const Pageheader = () => {
    return (<>
        <div>
            <h2 className={styles.heading}>
                Know your words,
                down to the letter.
            </h2>

            <p className={styles.headingtext}>
                Paste your text below and watch the count update as you
                type. No sign-up, no clutter — just the numbers you need.
            </p>
        </div>
    </>)
}

export default Pageheader;