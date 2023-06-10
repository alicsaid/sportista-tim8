import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import '../../pages/admin/Admin.css';

function DashboardCharts() {
    const [rentersCount, setRentersCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [rentalsData, setRentalsData] = useState(0);

    // Ref to chart canvas and chart instance
    const pieChartRef = useRef(null);
    const pieChartInstanceRef = useRef(null);

    const barChartRef = useRef(null);
    const barChartInstanceRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const rentersResponse = await axios.get(
                    'http://127.0.0.1:8000/admin/getRentersCount/'
                );
                setRentersCount(rentersResponse.data.broj_osoba);

                const usersResponse = await axios.get(
                    'http://127.0.0.1:8000/admin/getUsersCount/'
                );
                setUsersCount(usersResponse.data.broj_osoba);

                const rentalsResponse = await axios.get('http://127.0.0.1:8000/admin/getRentalsData/');
                setRentalsData(rentalsResponse.data.rentals_per_month);
                console.log("rentals data: ", rentalsData)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (pieChartRef.current && rentersCount !== 0 && usersCount !== 0) {
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

        if (barChartRef.current && rentalsData.length > 0) {
            // Destroy existing chart instance
            if (barChartInstanceRef.current) {
                barChartInstanceRef.current.destroy();
            }
            const barChartData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Bookings',
                        data: rentalsData,
                        backgroundColor: '#36A2EB',
                    },
                ],
            };

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
    }, [rentersCount, usersCount, rentalsData]);

    return (
        <div className="dashboard-data mt-5">
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