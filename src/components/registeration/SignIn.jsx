import React from 'react'
//import * as PropTypes from "prop-types"

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail : "",
            signInPassword : ""
        }
    }

    onEmailChange =(event) =>{
        this.setState({
            signInEmail : event.target.value
        })
    }

    onPasswordChange =(event) =>{
        this.setState({
            signInPassword : event.target.value
        })
    }

    onSubmitEvent =() =>{
        fetch("http://localhost:3000/signin", {
            method : "post",
            headers : { "content-type" :  "application/json" },
            body : JSON.stringify({
                email : this.state.signInEmail,
                password : this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                    this.props.loadUserDetails(user);
                    this.props.onRouteChange('home');
                } else{
                    if(this.state.signInEmail === "" && this.state.signInPassword === ""){
                        alert("One or more fields empty\nplease fill out all fields")
                    } else{
                        alert("Wrong Email or Password\nplease fill in the correct details")
                    }
                }
            }).catch(err => console.log(err))
    }

    render() {
        let {onRouteChange} = this.props
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="email" name="email-address" id="email-address" onChange={this.onEmailChange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password" onChange={this.onPasswordChange}/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Sign in"
                                   onClick={this.onSubmitEvent}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f6 link dim black db pointer"
                               onClick={() => onRouteChange("register")}>Register</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}
//SignIn.propTypes = {onRouteChange: PropTypes.any}

export default SignIn