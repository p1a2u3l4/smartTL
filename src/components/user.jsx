import React, {useContext} from 'react'
import './user.css'
import Changer from './Changer'

class User extends React.Component {
     
  
    constructor(props) {
        super(props);

        this.state = {            
            name: this.props.userdata.name,
            age: this.props.userdata.age,
            mail: this.props.userdata.mail,
            phone: this.props.userdata.phone,
            country: this.props.userdata.country,

            ChangeChecked: this.props.userdata.ChangeChecked,  //переключатель формы и редактора

            ButtDelClicked: this.props.userdata.isClicked,
        };       
    }

     

    ChangeVals = () => {  //нажатие на кнопку update
        
        this.setState({ChangeChecked: true})
    }



    DelElem = () => {  //удаление по нажатию на кнопку delete

        this.setState({ButtDelClicked : true})        
    }


    saveChanges = (childName, childPhone, childChecked, childCountry, childMail, childAge) => { //состояния применяются в родительской компоненте, значения из дочерней
        this.setState({name: childName})
        this.setState({phone: childPhone})
        this.setState({country: childCountry})
        this.setState({mail: childMail})
        this.setState({age: childAge})
        this.setState({ChangeChecked: childChecked})
    }

    render(props) {
                
       if ( this.state.ChangeChecked == true) {     
        return (<Changer name={this.state.name} phone={this.state.phone} country={this.state.country} age={this.state.age} mail={this.state.mail} ChangeChecked={this.state.ChangeChecked} ChangeFun={this.saveChanges}/>  );           
       }
           
            if ( this.state.ButtDelClicked == true) {  //удаление
                return ( <div></div> )        
            }
            
                else {    
                    return (                
                    <div className="usr">        
                        <ul>
                            <li>Name: {this.state.name}</li>
                            <li>Phone: {this.state.phone}</li>
                            <li>E-mail: {this.state.mail}</li>
                            <li>Country: {this.state.country}</li>
                            <li>Age: {this.state.age}</li>                   
                        </ul>               
                        <button className="butUpd btn btn-success" onClick={ this.ChangeVals }>Update</button>
                        <button className="butDel btn btn-danger" onClick={this.DelElem}>Delete</button>
                    </div>            
                    )   
                }       
    };
}

export default User