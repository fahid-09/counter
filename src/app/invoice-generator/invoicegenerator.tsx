"use client"
import { useState } from "react";
import styles from "../invoice-generator/invoice.module.css";
import Description from "../color-picker/Description";
const Invoice = () => {

    const [fromname, setfromname] = useState("");
    const [fromemail, setfromemail] = useState("")
    const [toname, settoname] = useState("");
    const [toemail, settoemail] = useState("");
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

    return (
        <div className={styles.toolpanel}>

            {/* LEFT SIDE */}
            <div className={styles.toolpanelleft}>
                <div className={styles.leftpaneltitle}>
                    From
                </div>
                <input type="text" placeholder="Your name / business" className={styles.fInput}
                    value={fromname}
                    onChange={(e) => setfromname(e.target.value)} />

                <input type="text" placeholder="Email, phone or address" className={styles.fInput}
                    value={fromemail}
                    onChange={(e) => setfromemail(e.target.value)} />

                <div className={styles.leftpaneltitle}>
                    Bill To
                </div>
                <input type="text" placeholder="Your name / business" className={styles.fInput}
                    value={toname}
                    onChange={(e) => settoname(e.target.value)} />

                <input type="text" placeholder="Email, phone or address" className={styles.fInput}
                    value={toemail}
                    onChange={(e) => settoemail(e.target.value)} />

                <div className={styles.inputrow}>

                    <div className={styles.inputgroup}>
                        <label htmlFor="height">Invoice #</label>
                        <input type="text" placeholder="INV-0001" />
                    </div>

                    <div className={styles.inputgroup}>
                        <label htmlFor="height">Date</label>
                        <input type="date" />
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
                <button
                    className={styles.calbtn}>
                    Download as PDF
                </button>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.toolpanelright}>
                <div className={styles.invoiceheader}>
                    <div>
                        <div className={styles.invbrand} id="pFromName">{fromname ? fromname : "Your business name"}</div>
                        <div className={styles.partydetail} id="pFromDetail">{fromemail ? fromemail : "your@email.com"}</div>
                    </div>
                    <div>
                        <div className={styles.invoicetype}>INVOICE</div>
                        <div className={styles.invoicemeta} ><span id="pInvNumber">INV-0001</span> · <span id="pInvDate">Oct 6, 2026</span></div>
                    </div>
                </div>
                <div className={styles.invparties}>
                    <div className={styles.invoicepartlable}>Bill to</div>
                    <div className={styles.invoicepartyname} id="pToName">Client Name</div>
                    <div className={styles.invoicepartyemail} id="pToDetail">client@email.com</div>
                </div>
                <table className={styles.invtable}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.description || "Item description"}</td>
                                <td>{item.qty || "1"}</td>
                                <td>{item.rate || "0.00"}</td>
                                <td>
                                    {item.qty && item.rate
                                        ? (Number(item.qty) * Number(item.rate)).toFixed(2)
                                        : "0.00"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        </div>
    );
};


export default Invoice;