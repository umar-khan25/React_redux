import React from 'react';
import { Component } from 'react';

class Auth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientid:'330447377927-11g4msfg7868pr4cl4bsiijncvih67ur.apps.googleusercontent.com',
                scope:'email'
            })
            // .then(()=>{
            //     this.auth=window.gapi.auth2.getAuthInstance();
            // })
        })
    }
    render(){
        return <div>GoogleAuth</div>
    }
}
export default Auth