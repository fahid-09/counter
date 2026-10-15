import Countdown from "./countdown";

export const metadata = {
  title: "Countdown Calculator — Days Until Any Date | Countrly",
  description: "Count down to any future date in days, hours and minutes — for events, deadlines and exams.",
};

const CountdownPage = ()=>{
    return(<>
    <Countdown />
    </>)
}
export default CountdownPage;