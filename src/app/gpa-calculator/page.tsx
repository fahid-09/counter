import GpaCalculator from "./gpacalculate";
import Pageheader from "./pageheader";


export const metadata = {
  title: "GPA Calculator — Weighted GPA on a 4.0 Scale | Countrly",
  description: "Add your courses, credit hours and grades to calculate your weighted GPA instantly.",
};
const GpaCalculatorpage =()=>{
    return(<>
    <Pageheader/>
    <GpaCalculator />
    </>)
}
export default GpaCalculatorpage;