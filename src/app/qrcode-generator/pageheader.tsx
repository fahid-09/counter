import styles from "../qrcode-generator/QR.module.css";

const Pageheader = ()=>{
    return(<>
    <div className={styles.pageheader}>
                <h1>QR Code Generator</h1>

                <p>
                    Create a QR code quickly and easily with our free QR Code
                    Generator. Enter any text, website URL, or other
                    information into the tool, generate your QR code, and
                    download it as a PNG image.
                </p>
            </div>
    </>)
}
export default Pageheader;