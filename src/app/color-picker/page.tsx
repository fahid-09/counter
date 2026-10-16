import Pageheader from "../color-picker/pageheader";
import ColorPicker from "./colorpicker";
import Description from "./Description";


export const metadata = {
    title: "Color Converter — HEX to RGB to HSL | Countrly",
    description: "Convert colors between HEX, RGB and HSL instantly, with a live preview and nearby shades.",
};

const ColorPickerPage = ()=>{
    return (<>
    <Pageheader />
    <ColorPicker />
    <Description />
    </>)
}
export default ColorPickerPage;