import styles from "../about-us/about.module.css"

const About = () => {
    return (<>
        <div className={styles.aboutsection}>

            <h1 className={styles.header}>About Countrly</h1>
            <p className={styles.lead}>Countrly is a small collection of free, browser-based tools — built to do one job each,
                quickly, without accounts or clutter.</p>
            <p className={styles.para}>Every tool on this site runs entirely in your browser. Nothing you type, paste or upload is sent to a server or stored anywhere —
                the calculation happens on your device and stays there.</p>
            <div className={styles.statrow}>
                <div className={styles.statbox}>
                    <div className={styles.number}>1</div>
                    <div className={styles.desc}>tools, and counting</div>
                </div>
                <div className={styles.statbox}>
                    <div className={styles.number}>1</div>
                    <div className={styles.desc}>tools, and counting</div>
                </div>
                <div className={styles.statbox}>
                    <div className={styles.number}>1</div>
                    <div className={styles.desc}>tools, and counting</div>
                </div>
            </div>
            <h2>Why we built this</h2>
            <p>Most small everyday tasks — counting words, checking a percentage, generating a QR code — shouldn't need an app download or an account. Countrly exists to keep these tools fast, simple and free to use, one clean tool at a time.</p>
        
         <h2>What's next</h2>
            <p>Countrly is still growing. New tools are added regularly, organized into categories — calculators, converters, generators and text tools — so the site stays easy to navigate as it expands.</p>
    
        </div>

    </>)
}

export default About;