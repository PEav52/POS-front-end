import { IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
import { IoIosMore } from "react-icons/io";
export const menuIcon = [IoIosSearch, IoFilterSharp, LuArrowDownUp, TfiMoreAlt];
export const NavMenubar = [
  "All",
  "Paid",
  "Pending",
  "Overdue",
  "Refunded",
  "Canceled",
];
export const atrituteTitle = [
  "Transaction ID",
  "Customer Name",
  "Type (Sale/Rental)",
  "Items",
  "Payment Method",
  "Total Paid",
  "Status",
  "Date & Time",
  "Staff Name",
];
export const EntityValue = [
  {
    TransactionID: "TXN 1",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product 1",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Paid",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
  {
    TransactionID: "TXN 1",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product 1",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Overdue",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
  {
    TransactionID: "TXN 2",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product 1",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Pending",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
  {
    TransactionID: "TXN 2",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product Management",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Paid",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
  {
    TransactionID: "TXN 3",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product 1",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Refunded",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
  {
    TransactionID: "TXN 3",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product 1",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Canceled",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
  {
    TransactionID: "TXN 3",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product 1",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Paid",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
  {
    TransactionID: "TXN 3",
    CustomerName: "John Doe",
    Type: "Sale",
    Items: "Product 1",
    PaymentMethod: "Credit Card",
    TotalPaid: "$150.00",
    Status: "Pending",
    Date_Time: "2022-01-01 10:00:00",
    StaffName: "John Doe",
  },
];
const EntityValueReturn = [
  {
    id: "RET-001",
    transaction: "TXN-003",
    customer: "Vanna Soeun",
    item: "Evening Gown",
    transactionType: "Rental Return",
    date: "2025-01-20",
    condition: "Good",
    status: "Pending",
    amount: "$0.00",
    staff: "Linda Heng",
  },
  {
    id: "RET-002",
    transaction: "TXN-004",
    customer: "John Doe",
    item: "Wedding Dress",
    transactionType: "Rental Return",
    date: "2025-01-21",
    condition: "Excellent",
    status: "Overdue",
    amount: "$50.00",
    staff: "Jane Doe",
  },
  {
    id: "RET-003",
    transaction: "TXN-005",
    customer: "Sokha Kim",
    item: "Cocktail Dress",
    transactionType: "Rental Return",
    date: "2025-01-22",
    condition: "Good",
    status: "Completed",
    amount: "$30.00",
    staff: "Nita Heng",
  },
  {
    id: "RET-004",
    transaction: "TXN-006",
    customer: "Sophea Chheng",
    item: "Tuxedo",
    transactionType: "Rental Return",
    date: "2025-01-23",
    condition: "Excellent",
    status: "Completed",
    amount: "$60.00",
    staff: "Pov Ly",
  },
  {
    id: "RET-005",
    transaction: "TXN-007",
    customer: "Rithy Chao",
    item: "Bridal Veil",
    transactionType: "Rental Return",
    date: "2025-01-24",
    condition: "Good",
    status: "Completed",
    amount: "$15.00",
    staff: "Sopheap Kim",
  },
  {
    id: "RET-006",
    transaction: "TXN-008",
    customer: "Mony Dara",
    item: "Prom Dress",
    transactionType: "Rental Return",
    date: "2025-01-25",
    condition: "Fair",
    status: "Completed",
    amount: "$20.00",
    staff: "Sothy Ny",
  },
  {
    id: "RET-007",
    transaction: "TXN-009",
    customer: "Chan Rith",
    item: "Formal Suit",
    transactionType: "Rental Return",
    date: "2025-01-26",
    condition: "Excellent",
    status: "Completed",
    amount: "$45.00",
    staff: "Kanika Sar",
  },
  {
    id: "RET-008",
    transaction: "TXN-010",
    customer: "Pov Lek",
    item: "Jumpsuit",
    transactionType: "Rental Return",
    date: "2025-01-27",
    condition: "Good",
    status: "Completed",
    amount: "$35.00",
    staff: "Veasna Vong",
  },
  {
    id: "RET-009",
    transaction: "TXN-011",
    customer: "Vireak Prak",
    item: "Casual Dress",
    transactionType: "Rental Return",
    date: "2025-01-28",
    condition: "Fair",
    status: "Completed",
    amount: "$25.00",
    staff: "Rin Mo",
  },
  {
    id: "RET-010",
    transaction: "TXN-012",
    customer: "Narin Keo",
    item: "Ball Gown",
    transactionType: "Rental Return",
    date: "2025-01-29",
    condition: "Good",
    status: "Completed",
    amount: "$75.00",
    staff: "Sophal Ying",
  },
  {
    id: "RET-011",
    transaction: "TXN-013",
    customer: "Phearom Sok",
    item: "Shirt and Tie Set",
    transactionType: "Rental Return",
    date: "2025-01-30",
    condition: "Excellent",
    status: "Completed",
    amount: "$40.00",
    staff: "Vannak Ny",
  },
  {
    id: "RET-012",
    transaction: "TXN-014",
    customer: "Ratanak Im",
    item: "Suit Jacket",
    transactionType: "Rental Return",
    date: "2025-01-31",
    condition: "Good",
    status: "Completed",
    amount: "$55.00",
    staff: "Sovath Kim",
  },
  {
    id: "RET-013",
    transaction: "TXN-015",
    customer: "Leakhena Chhouk",
    item: "Skirt Set",
    transactionType: "Rental Return",
    date: "2025-02-01",
    condition: "Excellent",
    status: "Completed",
    amount: "$50.00",
    staff: "Mony Nha",
  },
  {
    id: "RET-014",
    transaction: "TXN-016",
    customer: "Borey Thun",
    item: "Blazer",
    transactionType: "Rental Return",
    date: "2025-02-02",
    condition: "Good",
    status: "Completed",
    amount: "$60.00",
    staff: "Thida Keo",
  },
  {
    id: "RET-015",
    transaction: "TXN-017",
    customer: "Sreypov Sovann",
    item: "Wedding Veil",
    transactionType: "Rental Return",
    date: "2025-02-03",
    condition: "Fair",
    status: "Completed",
    amount: "$20.00",
    staff: "Kosal Yi",
  },
  {
    id: "RET-016",
    transaction: "TXN-018",
    customer: "Malis Sem",
    item: "Evening Dress",
    transactionType: "Rental Return",
    date: "2025-02-04",
    condition: "Good",
    status: "Completed",
    amount: "$40.00",
    staff: "Kiry Vong",
  },
  {
    id: "RET-017",
    transaction: "TXN-019",
    customer: "Vandy Sour",
    item: "Summer Dress",
    transactionType: "Rental Return",
    date: "2025-02-05",
    condition: "Excellent",
    status: "Rejected",
    amount: "$35.00",
    staff: "Sok Heng",
  },
  {
    id: "RET-018",
    transaction: "TXN-020",
    customer: "Chheang Vong",
    item: "Casual Shirt",
    transactionType: "Rental Return",
    date: "2025-02-06",
    condition: "Good",
    status: "Completed",
    amount: "$25.00",
    staff: "Sopheak Lim",
  },
  {
    id: "RET-019",
    transaction: "TXN-021",
    customer: "Sothea Kim",
    item: "Blouse",
    transactionType: "Rental Return",
    date: "2025-02-07",
    condition: "Fair",
    status: "Completed",
    amount: "$15.00",
    staff: "Vanna Kim",
  },
  {
    id: "RET-020",
    transaction: "TXN-022",
    customer: "Dara Tith",
    item: "Suit",
    transactionType: "Rental Return",
    date: "2025-02-08",
    condition: "Excellent",
    status: "Refunded",
    amount: "$65.00",
    staff: "Vathana Keo",
  },
];

const NavMenubarRetrun = [
  "All",
  "Pending",
  "Completed",
  "Overdue",
  "Refunded",
  "Rejected",
];
const atrituteTitleReturn = [
  "ReturnID",
  "Transaction",
  "Customer",
  "Items",
  "ReturnType",
  "ReturnDate",
  "Condition",
  "Status",
  "RefundAmount",
  "Staff Name",
];
const menuIconReturn = [IoIosSearch, IoFilterSharp, LuArrowDownUp, IoIosMore];

export const ReturnData = {
  EntityValueReturn,
  NavMenubarRetrun,
  menuIconReturn,
  atrituteTitleReturn,
};
const NavMenubarInvoice = [
  "All",
  "Paid",
  "Pending",
  "Overdue",
  "Partially Paid",
];
const atrituteTitleInvoice = [
  "Invoice ID",
  "Transaction",
  "Customer",
  "ReturnType",
  "TotalAmount",
  "PaidAmount",
  "Due Amount",
  "Status",
  "Date & Time",
  "Staff Name",
];
const EntityValueReturnInvoice = [
  {
    id: "RET-001",
    transaction: "TXN-003",
    customer: "Vanna Soeun",
    item: "Evening Gown",
    transactionType: "Rental Return",
    date: "2025-01-20",
    condition: "Good",
    status: "Paid",
    amount: "$0.00",
    staff: "Linda Heng",
  },
  {
    id: "RET-002",
    transaction: "TXN-004",
    customer: "John Doe",
    item: "Wedding Dress",
    transactionType: "Rental Return",
    date: "2025-01-21",
    condition: "Excellent",
    status: "Partially Paid",
    amount: "$50.00",
    staff: "Jane Doe",
  },
  {
    id: "RET-003",
    transaction: "TXN-005",
    customer: "Sokha Kim",
    item: "Cocktail Dress",
    transactionType: "Rental Return",
    date: "2025-01-22",
    condition: "Good",
    status: "Overdue",
    amount: "$30.00",
    staff: "Nita Heng",
  },
  {
    id: "RET-004",
    transaction: "TXN-006",
    customer: "Sophea Chheng",
    item: "Tuxedo",
    transactionType: "Rental Return",
    date: "2025-01-23",
    condition: "Excellent",
    status: "Pending",
    amount: "$60.00",
    staff: "Pov Ly",
  },
  {
    id: "RET-005",
    transaction: "TXN-007",
    customer: "Rithy Chao",
    item: "Bridal Veil",
    transactionType: "Rental Return",
    date: "2025-01-24",
    condition: "Good",
    status: "Completed",
    amount: "$15.00",
    staff: "Sopheap Kim",
  },
  {
    id: "RET-006",
    transaction: "TXN-008",
    customer: "Mony Dara",
    item: "Prom Dress",
    transactionType: "Rental Return",
    date: "2025-01-25",
    condition: "Fair",
    status: "Completed",
    amount: "$20.00",
    staff: "Sothy Ny",
  },
  {
    id: "RET-007",
    transaction: "TXN-009",
    customer: "Chan Rith",
    item: "Formal Suit",
    transactionType: "Rental Return",
    date: "2025-01-26",
    condition: "Excellent",
    status: "Completed",
    amount: "$45.00",
    staff: "Kanika Sar",
  },
  {
    id: "RET-008",
    transaction: "TXN-010",
    customer: "Pov Lek",
    item: "Jumpsuit",
    transactionType: "Rental Return",
    date: "2025-01-27",
    condition: "Good",
    status: "Completed",
    amount: "$35.00",
    staff: "Veasna Vong",
  },
  {
    id: "RET-009",
    transaction: "TXN-011",
    customer: "Vireak Prak",
    item: "Casual Dress",
    transactionType: "Rental Return",
    date: "2025-01-28",
    condition: "Fair",
    status: "Completed",
    amount: "$25.00",
    staff: "Rin Mo",
  },
  {
    id: "RET-010",
    transaction: "TXN-012",
    customer: "Narin Keo",
    item: "Ball Gown",
    transactionType: "Rental Return",
    date: "2025-01-29",
    condition: "Good",
    status: "Completed",
    amount: "$75.00",
    staff: "Sophal Ying",
  },
  {
    id: "RET-011",
    transaction: "TXN-013",
    customer: "Phearom Sok",
    item: "Shirt and Tie Set",
    transactionType: "Rental Return",
    date: "2025-01-30",
    condition: "Excellent",
    status: "Completed",
    amount: "$40.00",
    staff: "Vannak Ny",
  },
  {
    id: "RET-012",
    transaction: "TXN-014",
    customer: "Ratanak Im",
    item: "Suit Jacket",
    transactionType: "Rental Return",
    date: "2025-01-31",
    condition: "Good",
    status: "Completed",
    amount: "$55.00",
    staff: "Sovath Kim",
  },
  {
    id: "RET-013",
    transaction: "TXN-015",
    customer: "Leakhena Chhouk",
    item: "Skirt Set",
    transactionType: "Rental Return",
    date: "2025-02-01",
    condition: "Excellent",
    status: "Completed",
    amount: "$50.00",
    staff: "Mony Nha",
  },
  {
    id: "RET-014",
    transaction: "TXN-016",
    customer: "Borey Thun",
    item: "Blazer",
    transactionType: "Rental Return",
    date: "2025-02-02",
    condition: "Good",
    status: "Completed",
    amount: "$60.00",
    staff: "Thida Keo",
  },
  {
    id: "RET-015",
    transaction: "TXN-017",
    customer: "Sreypov Sovann",
    item: "Wedding Veil",
    transactionType: "Rental Return",
    date: "2025-02-03",
    condition: "Fair",
    status: "Completed",
    amount: "$20.00",
    staff: "Kosal Yi",
  },
  {
    id: "RET-016",
    transaction: "TXN-018",
    customer: "Malis Sem",
    item: "Evening Dress",
    transactionType: "Rental Return",
    date: "2025-02-04",
    condition: "Good",
    status: "Completed",
    amount: "$40.00",
    staff: "Kiry Vong",
  },
  {
    id: "RET-017",
    transaction: "TXN-019",
    customer: "Vandy Sour",
    item: "Summer Dress",
    transactionType: "Rental Return",
    date: "2025-02-05",
    condition: "Excellent",
    status: "Rejected",
    amount: "$35.00",
    staff: "Sok Heng",
  },
  {
    id: "RET-018",
    transaction: "TXN-020",
    customer: "Chheang Vong",
    item: "Casual Shirt",
    transactionType: "Rental Return",
    date: "2025-02-06",
    condition: "Good",
    status: "Completed",
    amount: "$25.00",
    staff: "Sopheak Lim",
  },
  {
    id: "RET-019",
    transaction: "TXN-021",
    customer: "Sothea Kim",
    item: "Blouse",
    transactionType: "Rental Return",
    date: "2025-02-07",
    condition: "Fair",
    status: "Completed",
    amount: "$15.00",
    staff: "Vanna Kim",
  },
  {
    id: "RET-020",
    transaction: "TXN-022",
    customer: "Dara Tith",
    item: "Suit",
    transactionType: "Rental Return",
    date: "2025-02-08",
    condition: "Excellent",
    status: "Refunded",
    amount: "$65.00",
    staff: "Vathana Keo",
  },
];
const menuIconInvoice = [IoIosSearch, IoFilterSharp, LuArrowDownUp, IoIosMore];
export const InvoiceData = {
  NavMenubarInvoice,
  atrituteTitleInvoice,
  EntityValueReturnInvoice,
  menuIconInvoice,
};
