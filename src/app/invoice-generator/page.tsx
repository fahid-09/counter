import Invoice from "./invoicegenerator";


export const metadata = {
  title: "Invoice Generator — Free Invoice Maker | Countrly",
  description: "Create a professional invoice online: add your details, line items and tax, see totals update live, then print or save it as a PDF. Free, no sign-up.",
};
const InvoiceGeneratorPage = ()=>{
    return(<>

    <Invoice />
    </>)
}
export default InvoiceGeneratorPage;