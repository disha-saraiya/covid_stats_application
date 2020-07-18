import React from 'react'; 

import {Cards, Chart, CountryPicker, Information, CDCLinks} from './components/index'; 
import {fetchData} from './api'; 
import styles from './App.module.css'; 

import coronadoodle from './images/images.jpg'; 


class App extends React.Component {

    state = { 
        data : {} , 
        country : '', 
    } 

    async componentDidMount() {
        const apiData = await fetchData(); 

        this.setState({data : apiData}); 
    }

    handleCountryChange = async (country) => {
        const apiData = await fetchData(country);
        this.setState({data : apiData, country : country}); 
    }
  
    render() { 

        const {data, country} = this.state; 
        
        return(
            <div className = {styles.container}>
            <img className = {styles.image} src = {coronadoodle}  alt = "COVID-19"/>
            <Information /> 
            <Cards data = {data} />
            <CountryPicker handleCountryChange = {this.handleCountryChange}/>
            <Chart data =  { data} country = {country}/>
            <CDCLinks />
            </div>

        )
    }
}

export default App;  