import React ,{ useState }from 'react';
import {Divider, Radio, Table,Input } from 'antd';
import App from './App';

class HomePage extends React.Component{
    render(){
        return (
            <div>   
                <div className='navbar'> 
                    <ul>
                        <li><App name="XXOJ" link="./"/></li>
                        <li><App name="題目區" link="./ProblemList"/></li>
                    </ul>
                </div> 
            </div>
        );
    }
}
 
export default HomePage;
