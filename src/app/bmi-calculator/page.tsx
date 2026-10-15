import BMICalculator from "./bmicalculator";
import Pageheader from "./pageheader";

export const metadata = {
  title: "BMI Calculator — Check Your Body Mass Index | Countrly",
  description: "Calculate your BMI from height and weight, in metric or imperial, with an instant category result.",
};
const BmicalculatorPage = () => {
    return (<>
        <Pageheader />
        <BMICalculator />
    </>)
}
export default BmicalculatorPage;