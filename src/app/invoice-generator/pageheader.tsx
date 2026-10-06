import styles from "../invoice-generator/invoice.module.css"
const Pageheader = ()=>{
    return (<>
    <div className={styles.pageheader}>
            <h1>Invoice Generator</h1>

            <p>
                Fill in your details and line items on the left — 
                the invoice builds itself on the right, ready to print or save as PDF.
            </p>
        </div>
    </>)
}
export default Pageheader;