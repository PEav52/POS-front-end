"use client";

import styles from "./Analytics.module.css";
import { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { FaDollarSign, FaExchangeAlt, FaBoxOpen, FaUsers } from "react-icons/fa";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Analytics = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">("weekly");

  // Revenue data by timeframe
  const revenueData: Record<"daily" | "weekly" | "monthly", { labels: string[]; data: number[] }> = {
    daily: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data: [500, 700, 800, 600, 750, 900, 1000],
    },
    weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [3000, 4200, 5000, 6200],
    },
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [12000, 15000, 17000, 19000, 21000, 25000],
    },
  };

  const lineData = {
    labels: revenueData[timeframe].labels,
    datasets: [
      {
        label: "Revenue Growth",
        data: revenueData[timeframe].data,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Pie chart data for top products
  const pieData = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [
      {
        data: [300, 200, 150, 100, 50],
        backgroundColor: ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99", "#c2c2f0"],
        hoverBackgroundColor: ["#ff6666", "#3399ff", "#66ff66", "#ff9966", "#6666ff"],
      },
    ],
  };

  const cards = [
    { title: "Total Revenue", value: "$20,000.00", growth: "+40% this week", icon: <FaDollarSign />, color: "blue" },
    { title: "Total Transaction", value: "120", growth: "+40% this week", icon: <FaExchangeAlt />, color: "orange" },
    { title: "Total Products", value: "1505", growth: "+40% this week", icon: <FaBoxOpen />, color: "green" },
    { title: "Total Customers", value: "1639", growth: "+40% this week", icon: <FaUsers />, color: "gray" }
  ];

    // Sample table data for Sales Details
    const stockDetails = [
      { ProductID: "P101", Name: "Electric", InDate: "2025-01-15", Stock: "23", Status: "Medium", Amount: "$120" },
      { ProductID: "P102", Name: "Solar", InDate: "2025-01-16", Stock: "45", Status: "High", Amount: "$150" },
      { ProductID: "P103", Name: "Battery", InDate: "2025-01-17", Stock: "30", Status: "Low", Amount: "$80" },
      { ProductID: "P104", Name: "Fan", InDate: "2025-01-18", Stock: "50", Status: "Medium", Amount: "$90" },
      { ProductID: "P105", Name: "Lightbulb", InDate: "2025-01-19", Stock: "100", Status: "High", Amount: "$20" },
      { ProductID: "P106", Name: "Cable", InDate: "2025-01-20", Stock: "75", Status: "Low", Amount: "$25" },
      { ProductID: "P107", Name: "Charger", InDate: "2025-01-21", Stock: "40", Status: "Medium", Amount: "$40" },
      { ProductID: "P108", Name: "Refrigerator", InDate: "2025-01-22", Stock: "15", Status: "High", Amount: "$500" },
      { ProductID: "P109", Name: "Heater", InDate: "2025-01-23", Stock: "20", Status: "Low", Amount: "$150" },
      { ProductID: "P110", Name: "Air Conditioner", InDate: "2025-01-24", Stock: "10", Status: "High", Amount: "$800" },
      { ProductID: "P111", Name: "Washing Machine", InDate: "2025-01-25", Stock: "12", Status: "Medium", Amount: "$400" },
      { ProductID: "P112", Name: "Microwave", InDate: "2025-01-26", Stock: "30", Status: "High", Amount: "$150" },
      { ProductID: "P113", Name: "Blender", InDate: "2025-01-27", Stock: "25", Status: "Medium", Amount: "$60" },
      { ProductID: "P114", Name: "Coffee Maker", InDate: "2025-01-28", Stock: "35", Status: "Low", Amount: "$50" },
      { ProductID: "P115", Name: "Toaster", InDate: "2025-01-29", Stock: "40", Status: "High", Amount: "$30" },
      { ProductID: "P116", Name: "Vacuum Cleaner", InDate: "2025-01-30", Stock: "20", Status: "Low", Amount: "$90" },
      { ProductID: "P117", Name: "Dishwasher", InDate: "2025-01-31", Stock: "18", Status: "Medium", Amount: "$350" },
      { ProductID: "P118", Name: "Sewing Machine", InDate: "2025-02-01", Stock: "10", Status: "High", Amount: "$200" },
      { ProductID: "P119", Name: "Refrigerator", InDate: "2025-02-02", Stock: "8", Status: "Low", Amount: "$500" },
      { ProductID: "P120", Name: "Kettle", InDate: "2025-02-03", Stock: "50", Status: "Medium", Amount: "$40" },
    ];

    // Sample table data
    const NewArrival = [
      { ProductID: "S002", Name: "Product 2", InDate: "2025-01-13" },
      { ProductID: "S001", Name: "Product 1", InDate: "2025-01-12" },
      { ProductID: "S003", Name: "Product 3", InDate: "2025-01-14" },
      { ProductID: "S004", Name: "Product 4", InDate: "2025-01-15" },
      { ProductID: "S005", Name: "Product 5", InDate: "2025-01-16" },
      { ProductID: "S006", Name: "Product 6", InDate: "2025-01-17" },
      { ProductID: "S007", Name: "Product 7", InDate: "2025-01-18" },
      { ProductID: "S008", Name: "Product 8", InDate: "2025-01-19" },
      { ProductID: "S009", Name: "Product 9", InDate: "2025-01-20" },
      { ProductID: "S010", Name: "Product 10",InDate: "2025-01-21" },
    ];

  return (
    <div>
      <main>
        <div className={styles.dashboard}>
          <div className={styles.title}>
            <h2>Analytics</h2>
          </div>
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

          <div className={styles.chart_table_container}>
            {/* Left section for Line Chart */}
            <div className={styles.chart_card}>
                <div className={styles.chartHeader}>
                <h2>Revenue Growth</h2>
                <div className={styles.timeframeButtons}>
                    <button
                    className={timeframe === "daily" ? styles.active : styles.inactive}
                    onClick={() => setTimeframe("daily")}
                    >
                    Daily
                    </button>
                    <button
                    className={timeframe === "weekly" ? styles.active : styles.inactive}
                    onClick={() => setTimeframe("weekly")}
                    >
                    Weekly
                    </button>
                    <button
                    className={timeframe === "monthly" ? styles.active : styles.inactive}
                    onClick={() => setTimeframe("monthly")}
                    >
                    Monthly
                    </button>
                </div>
                </div>
                <Line data={lineData} />
            </div>

            {/* Right section for Pie Chart */}
            <div className={styles.sales_chart_card}>
                <div className={styles.chartHeader}>
                    <h2>Top Products Sales</h2>
                    </div>
                    <Pie data={pieData} />
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
                                    <th>Product ID</th>
                                    <th>Name</th>
                                    <th>In Date</th>
                                    <th>Stock</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <hr />
                            <tbody>
                            {stockDetails.map((stock, index) => (
                                <tr key={index}>
                                    <td>{stock.ProductID}</td>
                                    <td>{stock.Name}</td>
                                    <td>{stock.InDate}</td>
                                    <td>{stock.Stock}</td>
                                    <td>{stock.Status}</td>
                                    <td>{stock.Amount}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>                    
                </div>

                {/* Purchase Sale Table */}
                <div className={styles.table_card}>
                <h3>Purchase Sales</h3>
                    <div className={styles.table_container_purchase_sales}>
                        <table style={{width:"100%", border:"1"}}>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Name</th>
                                    <th>In Date</th>
                                </tr>                        
                            </thead>
                            <hr />
                            <tbody>
                            {NewArrival.map((arrival, index) => (
                                <tr key={index}>
                                    <td>{arrival.ProductID}</td>
                                    <td>{arrival.Name}</td>
                                    <td>{arrival.InDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default Analytics;
