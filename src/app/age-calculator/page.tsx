import Agecalculater from "./agecalculator"
import Pageheader from "./pageheader"
 export const metadata = {
  title: "Age Calculator — Exact Age in Years, Months, Days | Countrly",
  description: "Find your exact age from your date of birth, plus total days lived and days to your next birthday.",
};
const AgeCalculatepage=()=>{
    return(<>
     <Pageheader />
        <Agecalculater/>
    </>
       
    )
}
export default AgeCalculatepage;