import RelatedTools from "../components/Related Tools/RelatedTools";
import Description from "./description";
import EmiLoan from "./emiloan";
import Pageheader from "./pageheader";

const EmiPage = ()=>{
    return (<>
    <Pageheader/>
    <EmiLoan />
    <Description /> 
    <RelatedTools/>
    </>)
}
export default EmiPage;