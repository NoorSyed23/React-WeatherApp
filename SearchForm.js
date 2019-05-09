import React from 'react'


export default class SearchForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            text: ''
        }

        this.updateText=this.updateText.bind(this)
    }

updateText(e){
    this.setState({
        text: e.target.value
    })
}

    render(){
        return (
            
            <form className='form-container'>
                <input
                name="city"
                className="input-field"
                onChange={this.updateText}
                value={this.state.text}
                placeholder="Location (etc. Country, State, City)"
                />

                
            
                <input
                value="Get Weather"
                type="submit"
                className="button"
                onClick={(e)=>{
                    e.preventDefault()
                    this.props.onSearch(this.state.text)
                }}
                />   
                
            </form>
            
        )
    }
}