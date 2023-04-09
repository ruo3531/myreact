import React ,{ useState }from 'react';
import {Divider, Radio, Table,Input } from 'antd';
import App from './App';
import {SearchOutlined} from '@ant-design/icons'
  
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: (text,record) => <App name={text} link={"./?p"+record.id.replace(/[^0-9]/ig,"")}></App>,
        width:"10%",
    },
    {
        title: 'problem',
        dataIndex: 'pro_name',
        key: 'pro_name',
        render: (text,record) => <App name={text} link={"./?p"+record.id.replace(/[^0-9]/ig,"")}>{text}</App>,

    },
];




const dataSource = [];

  for(let i = 1; i < 41; i++){
    dataSource.push({
        key: i,
        id: ('pro'+i),
        pro_name:'test',
    })
  }

 
class ProblemList extends React.Component{
    render(){
        return (
            <div>   
                <div className='navbar'> 
                    <ul>
                        <li><App name="XXOJ" link="../"/></li>
                        <li><App name="題目區" link="./"/></li>
                    </ul>
                </div> 
                <div className='tmpdiv'>
                    <h1>題目區</h1>
                </div>
                <div className="search">
                    <input className="search-bar" type="text" name="search" id="search" placeholder="輸入名稱"></input>
                    <button className="search-btn"> search</button>
                </div>
                <Table dataSource={dataSource} columns={columns} pagination={{
                position: ['bottomCenter'],pageSize:20
                }} className='List'/>;
            </div>
        );
    }
}
 
export default ProblemList;
