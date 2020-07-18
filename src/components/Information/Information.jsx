import React from 'react'; 
import styles from './Information.module.css'; 

const Information = () => {

    return(
        <div className = {styles.container}>
            <p> Coronavirus COVID-19 is an illness caused by a virus that can spread from person to person.
                This is a new virus that has spread throughout the world and is extremely contagious. 
            </p>
            <p>
                Currently, there is no vaccine to protect against COVID-19. The best way to protect yourself is to avoid
                being exposed to the virus itself. Stay at home as much as possible, wear a face covering or mask in public 
                and practice cleanliness and social distancing!
            </p>
            <p>
                As of today, the COVID-19 virus has spread through the world and has infected 188 countries in total. 
                This dashboard displays the status of the crisis as of the most current date. Click on a country name to
                obtain a bar chart for the respective country, or you can even view the global status as a chart.         
            </p>
            <p>
                Please note that due to limited testing capacity and API updates, the actual number of cases
                may be a little different than what is reflected. The dataset is from an API that can be reviewed
                <a href = "https://covid19.mathdro.id/api"> here </a>.  
            </p>
        </div>
    )
}

export default Information; 