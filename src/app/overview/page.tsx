'use client';

import Navbar from '../component/Navbar';
import { FaDollarSign, FaChartBar, FaShoppingCart, FaDatabase } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState } from "react";

Chart.register(...registerables);

const Overview: React.FC = () => {

    const [timeframe, setTimeframe] = useState("day");

    // Sample data for Sales Chart
    const salesData = {
        labels: timeframe === "day" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
        {
            label: "Total Sales ($)",
            data: timeframe === "day" ? [500, 700, 800, 600, 900, 600, 900] : [5000, 7000, 8000, 6000, 9000, 5000, 7000, 8000, 6000, 9000, 1000, 10100],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "blue",
            borderWidth: 2,
        },
        ],
    };

    // Sample data for Purchase Summary
    const purchaseData = {
        labels: ["Electronics", "Clothing", "Shoes", "Accessories", "Other"],
        datasets: [
        {
            label: "Purchase Amount ($)",
            data: [3000, 2500, 1800, 2200, 1500],
            // backgroundColor: ["red", "blue", "green", "purple", "orange"],
            backgroundColor: ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99", "#c2c2f0"],
            hoverBackgroundColor: ["#ff6666", "#3399ff", "#66ff66", "#ff9966", "#6666ff"],
        },
        ],
    };

    // Sample table data
    const purchaseSales = [
        { saleID: "S001", amount: "$500" },
        { saleID: "S002", amount: "$750" },
        { saleID: "S003", amount: "$300" },
        { saleID: "S004", amount: "$950" },
        
        { saleID: "S005", amount: "$1200" },
        { saleID: "S006", amount: "$680" },
        { saleID: "S007", amount: "$430" },
        { saleID: "S008", amount: "$890" },
        { saleID: "S009", amount: "$1100" },
        { saleID: "S010", amount: "$560" },
        { saleID: "S011", amount: "$780" },
        { saleID: "S012", amount: "$990" },
        { saleID: "S013", amount: "$640" },
        { saleID: "S014", amount: "$870" },
        { saleID: "S015", amount: "$1350" },
        { saleID: "S016", amount: "$1020" },
        { saleID: "S017", amount: "$580" },
        { saleID: "S018", amount: "$710" },
        { saleID: "S019", amount: "$820" },
        { saleID: "S020", amount: "$940" }
    ];

    const cards = [
        { title: "Total costs", value: "$20,000.00", growth: "+40% this week", icon: <FaDollarSign />, color: "blue" },
        { title: "Total sales", value: "$20,000.00", growth: "+40% this week", icon: <FaChartBar />, color: "orange" },
        { title: "Products sold", value: "150", growth: "+40% this week", icon: <FaShoppingCart />, color: "green" },
        { title: "Stock on hand", value: "$200,000.00", growth: "+40% this week", icon: <FaDatabase />, color: "gray" }
      ];

      // Sample table data for Sales Details
    const salesDetails = [
        { saleID: "S101", customer: "John Doe", date: "2025-01-15", status: "Completed", amount: "$1200" },
        { saleID: "S102", customer: "Jane Smith", date: "2025-01-16", status: "Pending", amount: "$850" },
        { saleID: "S103", customer: "Michael Johnson", date: "2025-01-17", status: "Completed", amount: "$600" },
        { saleID: "S104", customer: "Emily Davis", date: "2025-01-18", status: "Cancelled", amount: "$900" },
        { saleID: "S105", customer: "David Wilson", date: "2025-01-19", status: "Completed", amount: "$400" },
        { saleID: "S106", customer: "Sarah Brown", date: "2025-01-20", status: "Pending", amount: "$300" },
        { saleID: "S107", customer: "James Anderson", date: "2025-01-21", status: "Completed", amount: "$750" },
        { saleID: "S108", customer: "Linda Martinez", date: "2025-01-22", status: "Completed", amount: "$500" },
        { saleID: "S109", customer: "Robert Thomas", date: "2025-01-23", status: "Cancelled", amount: "$1100" },
        { saleID: "S110", customer: "Jessica Garcia", date: "2025-01-24", status: "Completed", amount: "$650" },
        { saleID: "S111", customer: "William Harris", date: "2025-01-25", status: "Pending", amount: "$1300" },
        { saleID: "S112", customer: "Sophia Clark", date: "2025-01-26", status: "Completed", amount: "$1150" },
        { saleID: "S113", customer: "Daniel Rodriguez", date: "2025-01-27", status: "Completed", amount: "$700" },
        { saleID: "S114", customer: "Olivia Lee", date: "2025-01-28", status: "Cancelled", amount: "$900" },
        { saleID: "S115", customer: "Matthew Hall", date: "2025-01-29", status: "Completed", amount: "$550" },
        { saleID: "S116", customer: "Isabella Young", date: "2025-01-30", status: "Pending", amount: "$1250" },
        { saleID: "S117", customer: "Ethan Scott", date: "2025-01-31", status: "Completed", amount: "$950" },
        { saleID: "S118", customer: "Ava King", date: "2025-02-01", status: "Completed", amount: "$600" },
        { saleID: "S119", customer: "Mason Wright", date: "2025-02-02", status: "Cancelled", amount: "$800" },
        { saleID: "S120", customer: "Mia Green", date: "2025-02-03", status: "Completed", amount: "$1400" },
    ];

      // Sample Pie Chart Data for Sales by Categories
    const salesByCategory = {
        labels: ["Electronics", "Clothing", "Shoes", "Accessories"],
        datasets: [
        {
            label: "Sales by Category",
            data: [4000, 3500, 2500, 2000],
            backgroundColor: ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"],
            hoverBackgroundColor: ["#ff6666", "#3399ff", "#66ff66", "#ff9966"],
        },
        ],
    };

  return (
    <div>
      <Navbar />
      <main>
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                    <div className={`${styles.icon} ${styles[card.color]}`}>
                    {card.icon}
                    </div>
                    <p className={styles.title}>{card.title}</p>
                    <p className={styles.value}>{card.value}</p>
                    <p className={styles.growth}>{card.growth}</p>
                </div>
                ))}
            </div>

            {/* Charts & Table Section */}
            <div className={styles.chart_table_container}>
                {/* Sales Chart */}
                <div className={styles.chart_card}>
                <h3>Sales Overview</h3>
                <select onChange={(e) => setTimeframe(e.target.value)} value={timeframe}>
                    <option value="day">Daily</option>
                    <option value="month">Monthly</option>
                </select>
                <Line data={salesData} />
                </div>

                {/* Purchase Summary Chart */}
                <div className={styles.chart_card}>
                <h3>Purchase Summary</h3>
                <Bar data={purchaseData} />
                </div>

                {/* Purchase Sale Table */}
                <div className={styles.table_card}>
                <h3>Purchase Sales</h3>
                    <div className={styles.table_container_purchase_sales}>
                        <table style={{width:"100%", border:"1"}}>
                            <thead>
                                <tr>
                                    <th>Sale ID</th>
                                    <th>Amount</th>
                                </tr>                        
                            </thead>
                            <hr />
                            <tbody>
                            {purchaseSales.map((sale, index) => (
                                <tr key={index}>
                                    <td>{sale.saleID}</td>
                                    <td>{sale.amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Sales Details Table & Sales by Category Pie Chart */}
            <div className={styles.table_chart_container}>
                {/* Sales Details Table */}
                <div className={styles.sales_table_card}>
                <h3>Sales Details</h3>
                    <div className={styles.table_container}>
                        <table style={{width:"100%", border:"1"}}>
                            <thead>
                                <tr>
                                    <th>Sale ID</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <hr />
                            <tbody>
                            {salesDetails.map((sale, index) => (
                                <tr key={index}>
                                    <td>{sale.saleID}</td>
                                    <td>{sale.customer}</td>
                                    <td>{sale.date}</td>
                                    <td>{sale.status}</td>
                                    <td>{sale.amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>                    
                </div>

                {/* Sales by Category Pie Chart */}
                <div className={styles.sales_chart_card}>
                <h3>Sales by Categories</h3>
                <Pie data={salesByCategory} />
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default Overview;