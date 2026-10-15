
import Pageheader from "./pageheader";
import LoremIpsum from "./loremipsum";

export const metadata = {
  title: "Lorem Ipsum Generator — Placeholder Text | Countrly",
  description: "Generate Lorem Ipsum placeholder text by words, sentences or paragraphs for your designs and drafts.",
};
const loremipsumpage =()=>{
    return(<>
     <Pageheader />
    <LoremIpsum />
   
    </>)
}
export default loremipsumpage;