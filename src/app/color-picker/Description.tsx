import  Styles from "../color-picker/colorpicker.module.css";

const Description = ()=>{
    return(<>
    <div className={Styles.description}>
<h3>Description</h3>
<p>Color Converter takes a color from a hex code or the picker and shows it in HEX, RGB and HSL at the same time, so you're never stuck translating one format to another by hand. A strip of nearby shades sits underneath, in case the exact tone needs to shift a little lighter or darker.</p>
    </div>
    </>)
}

export default Description;