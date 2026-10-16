import styles from "../color-picker/colorpicker.module.css"


const Pageheader = ()=>{
    return(<>
    <div className={styles.pageheader}>
                <h1>Color Converter</h1>

                <p>
                    Type or pick a color and get it instantly in HEX, RGB and HSL —
                    with a live preview and a few nearby shades.
                </p>
            </div>
    </>)
}

export default Pageheader;