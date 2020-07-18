import React, {useState, useEffect} from 'react'; 
import {fetchDailyData} from '../../api'; 
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css'; 

const Chart = ({data : {confirmed, deaths, recovered}, country}) => {

    const [dailyData, setDailyData] = useState([]);  

    useEffect(() => {
        const fetchAPIData = async () => {
            setDailyData(await fetchDailyData());
         }

         fetchAPIData(); 
    }, []); 

    const lineChart = (
        dailyData.length
        ? ( 
        <Line 
            data = {{
                labels : dailyData.map(({date}) => date), 
                datasets : [{
                    data : dailyData.map(({confirmed}) => confirmed), 
                    label : 'Infected', 
                    borderColor : '#3e95cd', 
                    fill : true,
                }, {
                    data : dailyData.map(({deaths}) => deaths), 
                    label : 'Deaths', 
                    borderColor : 'red', 
                    backgroundColor: 'gray', 
                    fill : true,
                }], 
            }}
        />) : null  
    );


    const barChart = (
        confirmed
        ? (
            <Bar 
                data = {{
                    labels : ['Infected', 'Recovered', 'Deaths'], 
                    datasets: [{
                        label : 'Number of People',
                        backgroundColor: ['rgba(255,0,0,0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(207,207,207,0.5)'], 
                        data: [confirmed.value, recovered.value, deaths.value],
                    }]
                }}
                options = {{
                    legend : {display : false}, 
                    title : {
                        display: true, 
                        text : `Current state in ${country}`,
                        
                    }
                }}
            />
        ): null
    ); 

    return(

        <div className = {styles.container}>
            {country? barChart : lineChart}
            <p> Disclaimer : Hospitalized data is only collected for certain US states. Minor data irregularities may appear. </p>
        </div>
    )
}

export default Chart; 