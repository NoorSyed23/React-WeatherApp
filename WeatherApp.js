import React from 'react'
import Title from './Title'
import SearchForm from './SearchForm'
import ResultItem from './ResultItem'



export default class WeatherApp extends React.Component{
    constructor(props){
        super(props);

        this.makeSearch=this.makeSearch.bind(this)

        this.state = { 
           city: undefined,
           temperature: undefined,
           humidity: undefined,
           description: undefined,
           error: ""

        }


        
    }
    
    makeSearch(city, country){
        

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=17ae22c86142f137ae173a2a07ed66c2`)
    
            .then((response)=>{
                if(response.status >= 200 && response.status < 300){
                    return response.json()
                }else{
                    throw new Error()
                }
                
            })
            .then ((json)=>{
                if(city){
                    console.log(json)
                this.setState({
                    city: json.name,
                    temperature: json.main.temp,
                    humidity: json.main.humidity,
                    description: json.weather[0].description,
                    error: ""

                })
            }else{
                console.log("Please enter city")
                this.setState({
                    city: undefined,
                    temperature: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: "Please enter city"
            })
            }
                   
            
                
            })
            .catch(()=>{console.log(Error) })
            
           
        
    }

    render(){
        
        return (
            
            <div className='wrapper'>
                <div className='main'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-5 title-container'>
                            <Title/>
                            </div>
                            <div className='searchresult'>
                                <SearchForm
                                    onSearch={this.makeSearch}
                                />
                                <ResultItem
                                    city= {this.state.city}
                                    temperature= {this.state.temperature}                
                                    humidity= {this.state.humidity}
                                    description={this.state.description}
                                    error={this.state.error}
                                />        
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
