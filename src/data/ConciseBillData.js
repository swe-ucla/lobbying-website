import billData from "./billData";

export const bills = billData.map((bill, i) => ({
    id: i + 1,
    number: bill.billNumber,
    title: bill.name,
    date: String(bill.year),
    categories: bill.categories,
    status: bill.status,
    summary: bill.significance || bill.issueConclusion || (bill.background && bill.background[0]) || "TBD",
    details_url: `/bill/${bill.id}`,
}));