"use client"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState, useEffect } from "react";
import styles from "../invoice-generator/invoice.module.css";
const Invoice = () => {

    const [fromname, setfromname] = useState("Your Business Name");
    const [fromemail, setfromemail] = useState("your@email.com")
    const [toname, settoname] = useState("Client Name");
    const [toemail, settoemail] = useState("client@email.com");
    const [invoice, setinvoice] = useState("INV-0001");
    const [date, setdate] = useState("")
    const [tax, settax] = useState("");
    const [comment, setcomment] = useState("")
    const [totalamount, settotalamount] = useState(0)
    const [items, setitems] = useState([
        {
            id: 1,
            description: "",
            qty: "",
            rate: "",
        },
    ]);

    const updateItem = (id: number, field: string, value: string) => {
        setitems(
            items.map((item) =>
                item.id === id
                    ? { ...item, [field]: value }
                    : item
            )
        );
    };

    const addItem = () => {
        setitems([
            ...items,
            {
                id: Date.now(),
                description: "",
                qty: "",
                rate: "",
            },
        ]);
    };

    const removeitem = (id: number) => {
        setitems(items.filter((item) => item.id !== id));
    };
    const subtotal = items.reduce((total, item) => {
        return total + Number(item.qty || 0) * Number(item.rate || 0);
    }, 0);

    const taxAmount = (subtotal * Number(tax || 0)) / 100;
    const total = subtotal + taxAmount;

    useEffect(() => {
        settotalamount(total);
    }, [subtotal, tax]);

    const downloadPDF = async () => {
        const invoice = document.getElementById("invoice");

        if (!invoice) return;

        const canvas = await html2canvas(invoice, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        pdf.save("invoice.pdf");
    };
    return (<><div className={styles.toolpanel}>

        {/* LEFT SIDE */}
        <div className={styles.toolpanelleft}>
            <div className={styles.leftpaneltitle}>
                From
            </div>
            <input type="text" placeholder={fromname} className={styles.fInput}
                value={fromname}
                onChange={(e) => setfromname(e.target.value)} />

            <input type="text" placeholder={fromemail} className={styles.fInput}
                value={fromemail}
                onChange={(e) => setfromemail(e.target.value)} />

            <div className={styles.leftpaneltitle}>
                Bill To
            </div>
            <input type="text" placeholder={toname} className={styles.fInput}
                value={toname}
                onChange={(e) => settoname(e.target.value)} />

            <input type="text" placeholder={toemail} className={styles.fInput}
                value={toemail}
                onChange={(e) => settoemail(e.target.value)} />

            <div className={styles.inputrow}>

                <div className={styles.inputgroup}>
                    <label htmlFor="height">Invoice #</label>
                    <input type="text" placeholder={invoice}
                        onChange={(e) => setinvoice(e.target.value)} />
                </div>

                <div className={styles.inputgroup}>
                    <label htmlFor="height">Date</label>
                    <input type="date" onChange={(e) =>setdate(e.target.value)} />
                </div>
            </div>
            <div className={styles.itemdetails}>

                {items.map((item, index) => (
                    <div
                        className={styles.coursesection}
                        key={item.id}
                    >
                        <div className={styles.coursedata}>
                            {index === 0 && (
                                <span className={styles.coursetitle}>
                                    Description
                                </span>
                            )}

                            <input
                                type="text"
                                placeholder="Item description"
                                value={item.description}
                                onChange={(e) =>
                                    updateItem(item.id, "description", e.target.value)
                                }
                            />
                        </div>

                        <div className={styles.coursedata}>
                            {index === 0 && (
                                <span className={styles.coursetitle}>
                                    Qty
                                </span>
                            )}

                            <input
                                type="number"
                                placeholder="1"
                                value={item.qty}
                                onChange={(e) =>
                                    updateItem(item.id, "qty", e.target.value)
                                }
                            />
                        </div>

                        <div className={styles.coursedata}>
                            {index === 0 && (
                                <span className={styles.coursetitle}>
                                    Rate
                                </span>
                            )}

                            <input
                                type="number"
                                placeholder="1"
                                value={item.rate}
                                onChange={(e) =>
                                    updateItem(item.id, "rate", e.target.value)
                                }
                            />

                        </div>

                        <button
                            disabled={item.id <= 1}
                            className={styles.crossbtn}
                            onClick={() => removeitem(item.id)} >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            <button onClick={addItem} className={styles.additem} > + Add item </button>
            <div className={styles.taxrow}>
                <label>Tax (%)</label>
                <input type="number" className={styles.finput} id="taxRate" value={tax ? tax : 0} onChange={(e) => settax(e.target.value)} />
            </div>
            <div className={styles.commentlable}>Notes (optional)</div>
            <input type="text" placeholder="Payment terms, thank you note"
                className={styles.fInput}
                onChange={(e) => setcomment(e.target.value)} />
            <button
                className={styles.calbtn}
                onClick={downloadPDF}>
                Download as PDF
            </button>

        </div>

        {/* RIGHT SIDE */}
        <div id="invoice" className={styles.toolpanelright}>
            <div className={styles.invoiceheader}>
                <div>
                    <div className={styles.invbrand} id="pFromName">{fromname ? fromname : "Your business name"}</div>
                    <div className={styles.partydetail} id="pFromDetail">{fromemail ? fromemail : "your@email.com"}</div>
                </div>
                <div>
                    <div className={styles.invoicetype}>INVOICE</div>
                    <div className={styles.invoicemeta} ><span id="pInvNumber">{invoice}</span> · <span id="pInvDate">{date}</span></div>
                </div>
            </div>
            <div className={styles.invparties}>
                <div className={styles.invoicepartlable}>Bill to</div>
                <div className={styles.invoicepartyname} id="pToName">{toname}</div>
                <div className={styles.invoicepartyemail} id="pToDetail">{toemail}</div>
            </div>
            <table className={styles.invtable}>
                <thead>
                    <tr className={styles.itemrow}>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className={styles.itemrow}>
                            <td className={styles.itemdata}>{item.description || "Item description"}</td>
                            <td className={styles.itemdata}>{item.qty || "1"}</td>
                            <td className={styles.itemdata}>{item.rate || "0.00"}</td>
                            <td className={styles.itemdata}>
                                {item.qty && item.rate
                                    ? (Number(item.qty) * Number(item.rate)).toFixed(2)
                                    : "0.00"}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className={styles.invtotal}>
                <div className={styles.invtotalrow}><span>Subtotal</span><span id="pSubtotal">{subtotal.toFixed(2)}</span></div>
                <div className={styles.invtotalrow}><span>Tax</span><span id="pTax">{taxAmount.toFixed(2)} ({Number(tax)})%</span></div>
                <div className={`${styles.invtotalrow} ${styles.grand}`}><span>Total</span><span id="pTotal">{totalamount.toFixed(2)} </span></div>
            </div>
            <div className={styles.comment}>
                <p>{comment}</p>
            </div>
        </div>

    </div>

        <div className={styles.descriptioncard} >
            <h3>Description</h3>
            <p>Invoice Generator builds a clean, print-ready invoice right in your browser. Add your details, your client's details, and as many line items as the job needs — totals and tax calculate automatically, and the finished invoice is one click away from a PDF.</p>
        </div>
    </>


    );
};


export default Invoice;