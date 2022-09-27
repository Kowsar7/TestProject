import React, { useState } from "react";

import { Line } from 'react-chartjs-2';
import { Chart as 
    ChartJS, 
    Title, 
    Tooltip, 
    LineElement, 
    Legend, 
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

function LineChart() {
    const [data, setData] = useState({
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "First Dataset",
                data: [0, 20, 30, 42, 51, 82, 45, 59, 57, 73, 91, 68],
                backgroundColor: '#FFAFCC',
                borderColor: '#FFAFCC'
            },
            {
                label: "Secound Dataset",
                data: [25, 33, 19, 38, 32, 55, 68, 62, 73, 59, 51, 45],
                backgroundColor: '#CDB4DB',
                borderColor: '#CDB4DB'
            },
            {
                label: "Third Dataset",
                data: [15, 40, 30, 22, 40, 36, 66, 51, 87, 65, 58, 73],
                backgroundColor: '#A2D2FF',
                borderColor: '#A2D2FF'
            }
        ]
    });

    return(
        <div>
            <Line data={data}
                options= {
                    {responsive: "true",
                    maintainAspectRatio: "true",
                    scales: {
                    y: {
                        ticks: { color: 'black'}
                    },
                    x: {
                        ticks: { color: 'black'}
                    }
                    }}
                }
                >Hello</Line>
        </div>
    )
}

export default LineChart