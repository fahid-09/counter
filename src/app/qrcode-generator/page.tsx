import Pageheader from "./pageheader";
import Qrcode from "./qrcodepage";

export const metadata = {
  title: "QR Code Generator — Free & Instant | Countrly",
  description: "Turn any link or text into a downloadable QR code, free and instantly, right in your browser.",
};

const QrcodePage = ()=>{
    return (<>
    <Pageheader/>
    <Qrcode/>
    
    </>)
}
export default QrcodePage;