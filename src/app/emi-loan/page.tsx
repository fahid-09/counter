import RelatedTools from "../components/Related Tools/RelatedTools";
import Description from "./description";
import EmiLoan from "./emiloan";
import Pageheader from "./pageheader";


export const metadata = {
  title: "EMI Calculator — Monthly Loan Payment | Countrly",
  description: "Calculate your monthly EMI from loan amount, interest rate and tenure, and see the total interest and total payment. Free, no sign-up.",
}; 
const EmiPage = ()=>{
    return (<>
    <Pageheader/>
    <EmiLoan />
    <Description /> 
    <RelatedTools/>
    </>)
}
export default EmiPage;