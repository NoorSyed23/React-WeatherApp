import React from 'react'

class ResultItem extends React.Component{
    render(){
        return(
            <div className="result-container">
                <p>
                    {this.props.city && <p>Location: {this.props.city}</p>}
                    {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                    {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                    {this.props.description && <p>Description: {this.props.description}</p>}
                    {this.props.error && <p>{this.props.error}</p>}
                </p>
                

            </div>
                
            
        )
    }
}

export default ResultItem;




