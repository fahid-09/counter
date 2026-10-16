import { Metadata } from "next";
import styles from "../terms-of-use/terms.module.css"

   export const metadata: Metadata = {
     title: "Countrly — Free Online Tools, All in One Place",
     description: "Calculators, converters, text tools, generators and business tools — fast, free, no sign-up.",
   };
const Termsofuse =()=>{
    return (<>
    <main>
    <h1 className={styles.head1}>Terms of Use</h1>
    <div className="styles.updated">Last updated: [add date when you publish]</div>

    <p className={styles.paratext}>By using countrly.com , you agree to these Terms of Use. If you don't agree, please don't use the Site.</p>

    <h2 className={styles.head2}>1. Use of the tools</h2>
    <p className={styles.paratext}>Countrly's tools are provided free of charge, for personal and professional use. Results (calculations, generated text, QR codes, etc.) are provided "as is" without warranty of accuracy. For anything requiring certified or professional accuracy — medical, financial, legal or academic decisions — verify results independently.</p>

    <h2 className={styles.head2}>2. No accounts, no stored data</h2>
    <p className={styles.paratext}>The Site does not require account creation. Inputs to our tools are processed in your browser and are not stored by us.</p>

    <h2 className={styles.head2}>3. Acceptable use</h2>
    <ul>
      <li>Don't use automated scripts to overload or scrape the Site.</li>
      <li>Don't use the Site's tools to generate or distribute unlawful, harmful or infringing content.</li>
      <li>Don't attempt to interfere with the Site's normal operation.</li>
    </ul>

    <h2 className={styles.head2}>4. Advertising</h2>
    <p className={styles.paratext}>The Site may display third-party advertising (such as Google AdSense) to support free access to the tools. See our <a href="privacy-policy">Privacy Policy</a> for details.</p>

    <h2 className={styles.head2}>5. Limitation of liability</h2>
    <p className={styles.paratext}>Countrly is provided without warranties of any kind. We are not liable for any damages or losses arising from use of, or inability to use, the Site or its tools.</p>

    <h2 className={styles.head2}>6. Changes</h2>
    <p className={styles.paratext}>We may update these Terms from time to time. Continued use of the Site after changes means you accept the updated Terms.</p>

    <h2 className={styles.head2}>7. Contact</h2>
    <p className={styles.paratext}>Questions about these Terms can be sent via our <a href="contact.html">Contact page</a>.</p>
  </main>
    </>)
}
export default Termsofuse;