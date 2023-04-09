import React ,{ useState }from 'react';
import {Divider, Radio, Table,Input } from 'antd';
import App from './App';
import {SearchOutlined} from '@ant-design/icons'
import './problem.css';
import {HashRouter,Route,Switch,Link} from "react-router-dom";

 
class Problem extends React.Component{
    render(){
        return (
            <div>   
                <div className='navbar'> 
                    <ul>
                        <li><App name="XXOJ" link="../"/></li>
                        <li><App name="題目區" link="./ProblemList"/></li>
                    </ul>
                </div> 
                <div>
                    <div className='Tittle'>
                        <h1>P.XXX</h1>
                    </div>
                    <div className='Description'>
                        <div className='Description box'>
                            <h3>Problem</h3>
                            <div className='Text'></div>
                        </div>
                        <div className='InputFormat box'>
                            <h3>Input</h3>
                            <div className='Text'></div>
                        </div>
                        <div className='OutputFormat box'>
                            <h3>Output</h3>
                            <div className='Text'></div>
                        </div>
                        <div className='Sample Input box'>
                            <h4>Sample Input 1</h4>
                            <div className='Text'></div>
                        </div>
                        <div className='Sample Output box'>
                            <h4>Sample Output 1</h4>
                            <div className='Text'></div>
                        </div>
                        <div className='Sample Input box'>
                            <h4>Sample Input 2</h4>
                            <div className='Text'></div>
                        </div>
                        <div className='Sample Output box'>
                            <h4>Sample Output 2</h4>
                            <div className='Text'></div>
                        </div>
                        <div className='Hints box'>
                            <h4>Hints</h4>
                            <div className='Text'></div>
                        </div>
                        <div className='Problem_source box'>
                            <h4>Problem_source</h4>
                            <div className='Text'></div>
                        </div>
                    </div>
                        

                    
                </div>
                
                
            </div>
        );
    }
}
 
export default Problem;
