
import { Metadata } from "next";
import Contact from "./contact";
import Pageheader from "./pageheader";

   export const metadata: Metadata = {
     title: "Countrly — Free Online Tools, All in One Place",
     description: "Calculators, converters, text tools, generators and business tools — fast, free, no sign-up.",
   };
   
const ContactUs = ()=>{
    return(<>
    <Pageheader/>
    <Contact />
    </>)
}

export default ContactUs;