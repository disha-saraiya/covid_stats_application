

import React from 'react'; 
import styles from './CDCLinks.module.css'; 

const CDCLinks = () => {

    return(
        <div className = {styles.container}>
            <h3>Helpful Links</h3>
            <a href = "https://www.cdc.gov/coronavirus/2019-ncov/index.html"> Official CDC Website for COVID-19</a>
            <a href = "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"> Symptoms of COVID-19 </a>
            <a href = "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html"> What do I do if I'm sick? </a>
            <a href = "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/social-distancing.html"> Social Distancing </a>
            <a href = "https://www.amazon.com/s?k=face+masks&ref=nb_sb_noss_2"> Buy Face Masks! </a>
        </div>
    )
}

export default CDCLinks; 