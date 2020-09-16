import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
    constructor(){
        super()
        this.state = { 
            FirstName:'',
            LastName:'',
            OtherNames:'',
            PhoneNumber:'',
            EmailAddress:'',
            DateofBirth:'',
            Age:'',
            Gender:'',
            ResidentialAddress:'',
            City:'',
            StateofOrigin:'',
            Zip:'',
            NationalIdentificationCardNumber:''


        }
    }
        
    changeFirstName=(event) =>{
        this.setState({
            FirstName: event.target.value
        })
    }

    changeLastName=(event) =>{
        this.setState({
            LastName: event.target.value
        })
    }

    changeOtherNames=(event) =>{
        this.setState({
            OtherNames: event.target.value
        })
    }

    changePhoneNumber=(event) =>{
        this.setState({
            PhoneNumber: event.target.value
        })
    }

    changeEmailAddress=(event) =>{
        this.setState({
            EmailAddress: event.target.value
        })
    }

    changeDateofBirth=(event) =>{
        this.setState({
            DateofBirth: event.target.value
        })
    }

    changeAge=(event) =>{
        this.setState({
            Age: event.target.value
        })
    }

    changeGender=(event) =>{
        this.setState({
            Gender: event.target.value
        })
    }

    changeResidentialAddress=(event) =>{
        this.setState({
            ResidentialAddress: event.target.value
        })
    }

    changeCity=(event) =>{
        this.setState({
            City: event.target.value
        })
    }

    changeStateofOrigin=(event) =>{
        this.setState({
            StateofOrigin: event.target.value
        })
    }

    changeZip=(event) =>{
        this.setState({
            Zip: event.target.value
        })
    }

    changeNationalIdentificationCardNumber=(event) =>{
        this.setState({
            NationalIdentificationCardNumber: event.target.value
        })
    }
    
        render() { 
            return (
                <body>
                    <section id='form-section' style={{backgroundColor:"rgb(189,183,107)"}}>
                        <div className='form-div'>
                            <h2 className="text-center"><img src='https://res.cloudinary.com/tovia212/image/upload/v1599583708/inec_logo_nr4s0r.jpg' alt='' /> Voters Registration Form</h2>
                            
                        </div><br/> 
                        <form method="POST" enctype="multipart/form-data">
                            <div className="form-row">
                                <div className="col-5">
                                    <label for="fname">FIRST NAME:</label>
                                    <input type="text" class="form-control" onChange={this.changeFirstName} placeholder="Enter FirstName" value={this.state.FirstName}/>
                                </div>
                                <div className="col-5">
                                    <label for="lname">LAST NAME:</label>
                                    <input type="text" class="form-control" onChange={this.changeLastName} placeholder="Enter LastName" value={this.state.LastName}/>
                                </div><br/> 
                                
                            </div>
                            <div className="form-row">
                                <div className="col-10">
                                    <label for="oname">OTHER NAMES:</label>
                                    <input type="text" class="form-control" onChange={this.changeOtherNames} placeholder="Enter OtherNames" value={this.state.OtherNames}/>
                                </div>
                            </div><br/> 

                            <div className="row">
                                <div className="col-4">
                                    <label for="dob">DATE OF BIRTH:</label>
                                    <div className="form-row">
                                        <div className="col-3">
                                        <input type="" class="form-control"  onChange={this.changeDateofBirth} placeholder="DD" value={this.state.DateofBirth}/>
                                        </div>
                                        <div className="col-4">
                                        <input type="text" class="form-control" onChange={this.changeDateofBirth}  placeholder="MM" />
                                        </div>
                                        <div className="col-3">
                                        <input type="" class="form-control" onChange={this.changeDateofBirth} placeholder="YY" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <label for="age">AGE:</label>
                                    <input type="age" class="form-control" onChange={this.changeAge} placeholder="Enter Age" value={this.state.Age}/>
                                </div>
                                <div className="col-2">
                                    <label for="gender">GENDER:</label>
                                    <input type="gender" class="form-control" onChange={this.changeGender} placeholder="Enter Gender" value={this.state.Gender}/>
                                </div>
                            </div><br/> 

                            <div className="row">
                                <div class="col-4">
                                    <label for="phoneno">PHONE NUMBER:</label>
                                    <input type="tel" class="form-control" onChange={this.changePhoneNumber} placeholder="Enter PhoneNumber" value={this.state.PhoneNumber}/>
                                </div>
                                <div class="col-6">
                                    <label for="email">EMAIL ADDRESS:</label>
                                    <input type="email" class="form-control" onChange={this.changeEmailAddress} placeholder="Enter EmailAddress" value={this.state.EmailAddress}/>
                                </div>
                            </div><br/> 
                            
                            
                            <div className="row">
                                <div className="col-10">
                                    <label for="raddress">RESIDENTIAL ADDRESS:</label>
                                    <input type="text" class="form-control" onChange={this.changeResidentialAddress} placeholder="Enter ResidentialAddress" value={this.state.ResidentialAddress}/>
                                </div>
                            </div><br/> 
                            <div class="row">
                                <div class="col-3">
                                    <label for="city">CITY:</label>
                                    <input type="text" class="form-control" onChange={this.changeCity} placeholder=" Enter City" value={this.state.City}/>
                                </div>
                                <div class="-3">
                                    <label for="stateoforigin">STATE OF ORIGIN:</label>
                                    <input type="text" class="form-control" onChange={this.changeStateofOrigin} placeholder="Enter State of Origin" value={this.state.StateofOrigin}/>
                                </div>
                                <div class="col-2">
                                    <label for="zip">ZIP CODE:</label>
                                    <input type="text" class="form-control" onChange={this.changeZip} placeholder="Enter ZipCode" value={this.state.Zip}/>
                                </div>
                            </div><br/> 

                            <div className="row">
                                <div className="col-10">
                                    <label for="nicn">NATIONAL IDENTIFICATION CARD NUMBER:</label>
                                    <input type="number" class="form-control" onChange={this.changeNationalIdentificationCardNumber} placeholder="Enter National Identification Card Number" value={this.state.NationalIdentificationCardNumber}/>
                                </div>
                            </div><br/> 

                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                    <label class="form-check-label" for="gridCheck">
                                        I affirm that the details given above are true to the best of my knowledge
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{width:"30%", backgroundColor:"gray" }}>REGISTER</button>  

                        </form>
                    </section>
                </body>
            );
        }
}
 
export default App;