import Pageheader from "./pageheader";
import ResumeBuilder from "./resumebuilder";


export const metadata = {
  title: "Resume Builder — Free Online Resume Maker | Countrly",
  description: "Build a clean one-page resume with your details, education, experience and skills, add a photo, and download it as a PDF. Free, no sign-up.",
};
const ResumePage = ()=>{
    return(<>
    <Pageheader/>
    <ResumeBuilder />
    </>)
}
export default ResumePage;