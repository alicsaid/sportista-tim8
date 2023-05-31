import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../../pages/admin/Admin.css"

function DashboardCharts() {
    // Ref to chart canvas and chart instance
    const pieChartRef = useRef(null);
    const pieChartInstanceRef = useRef(null);

    const barChartRef = useRef(null);
    const barChartInstanceRef = useRef(null);

    // TODO: needs to fetch this data from server
    const rentersCount = 40; // hard-coded value for number of renters
    const usersCount = 60; // hard-coded value for number of users
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2200, 4100],
                backgroundColor: '#36A2EB',
            },
        ],
    };

    useEffect(() => {
        if (pieChartRef.current) {
            // Destroy existing chart instance
            if (pieChartInstanceRef.current) {
                pieChartInstanceRef.current.destroy();
            }

            // Create new chart instance
            pieChartInstanceRef.current = new Chart(pieChartRef.current, {
                type: 'pie',
                data: {
                    labels: ['Renters', 'Users'],
                    datasets: [
                        {
                            label: 'Number of renters and users',
                            data: [rentersCount, usersCount],
                            backgroundColor: ['#FF6384', '#36A2EB'],
                        },
                    ],
                },
            });
        }

        if (barChartRef.current) {
            // Destroy existing chart instance
            if (barChartInstanceRef.current) {
                barChartInstanceRef.current.destroy();
            }

            // Create new chart instance
            barChartInstanceRef.current = new Chart(barChartRef.current, {
                type: 'bar',
                data: barChartData,
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                },
            });
        }
    }, []);

    return (
        <div className="dashboard-data">
            <div className="chart-container">
                <canvas ref={pieChartRef} />
            </div>
            <div className="chart-container bar-chart">
                <canvas ref={barChartRef} />
            </div>
        </div>
    );
}

export default DashboardCharts;
