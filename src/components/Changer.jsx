import React from 'react'
import './Changer.css'

class Changer extends React.Component {
    constructor(props) {
    super(props) 
    }


    state = {
        name: this.props.name,
        phone: this.props.phone,
        country: this.props.country,
        mail: this.props.mail,
        age: this.props.age, 
        ChangeChecked: this.props.ChangeChecked
    }


    NameInputChange(e) {
         this.setState({name: e.target.value})
    }

    PhoneInputChange(e1) {
         this.setState({phone: e1.target.value})      
    }



    CountryInputChange(e2) {
        this.setState({country: e2.target.value})       
    }


    MailInputChange(e3) {
        this.setState({mail: e3.target.value})       
    }

    AgeInputChange(e4) {
        this.setState({age: e4.target.value})       
    }


    sendData = () => {  //отправка новых значений в родительскую компоненту
        this.props.ChangeFun(this.state.name, this.state.phone, false, this.state.country, this.state.mail, this.state.age);    //name, phone, checked, country, mail, age    
    }



    render(props) {
       
        return (
            <div className="change-field">
                Name:<input className="inpt form-control" value={this.state.name} onChange={this.NameInputChange.bind(this)}></input><br/>
                Phone:<input className="inpt form-control" value={this.state.phone} onChange={this.PhoneInputChange.bind(this)}></input><br/>
                E-mail:<input className="inpt form-control" value={this.state.mail} onChange={this.MailInputChange.bind(this)}></input><br/>
                Age:<input className="inpt form-control" value={this.state.age} onChange={this.AgeInputChange.bind(this)}></input><br/>
                Country: <select  className="inpt form-control" onChange={this.CountryInputChange.bind(this)}>
                            <option selected></option>
                            <option>Russia</option>
                            <option>Australia</option>
                            <option>USA</option>
                         </select><br/>                        
                <button className="btn-chan btn btn-success" onClick={this.sendData}>Save changes</button>                
            </div>
        ) 
    };
}


export default Changer