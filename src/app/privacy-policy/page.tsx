import styles from "../privacy-policy/privacy-policy.module.css"

const Privacypolicy = ()=>{
    return (<>
    <main className={styles.mainbody}>
    <h1 className={styles.title}>Privacy Policy</h1>
    <div className={styles.updated}>Last updated: [add date when you publish]</div>

    <p className={styles.paratext}>This Privacy Policy explains how Countrly ("we", "us") handles information when you use countrly.com (the "Site").</p>

    <h2 className={styles.head2}>1. Information we don't collect</h2>
    <p className={styles.paratext}>Every tool on Countrly runs entirely in your browser. Text, numbers, dates, colors, images or any other input you enter into a tool is processed on your device and is never sent to, or stored on, our servers.</p>

    <h2 className={styles.head2}>2. Information we may collect automatically</h2>
    <p className={styles.paratext}>Like most websites, we may use standard analytics (such as Google Analytics) to understand overall traffic — pages visited, approximate location by country/city, device and browser type. This data is aggregated and is not used to identify you personally.</p>

    <h2 className={styles.head2}>3. Cookies and advertising</h2>
    <p className={styles.paratext}>We may use cookies for analytics and, where applicable, to serve advertising through third-party providers such as Google AdSense. These providers may use cookies to show ads based on your visits to this and other websites. You can opt out of personalized advertising through your browser settings or via <a href="https://www.google.com/settings/ads">Google's Ads Settings</a>.</p>

    <h2 className={styles.head2}>4. Third-party links</h2>
    <p className={styles.paratext}>Some pages may link to external resources. We're not responsible for the privacy practices of external sites — please review their own policies.</p>

    <h2 className={styles.head2}>5. Children's privacy</h2>
    <p className={styles.paratext}>Countrly is not directed at children under 13, and we do not knowingly collect personal information from children.</p>

    <h2 className={styles.head2}>6. Changes to this policy</h2>
    <p className={styles.paratext}>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>

    <h2 className={styles.head2}>7. Contact</h2>
    <p className={styles.paratext}>Questions about this policy can be sent via our <a href="contact.html" >Contact page</a>.</p>
  </main>
    </>)
}
export default Privacypolicy;