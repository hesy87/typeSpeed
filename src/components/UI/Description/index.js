import React from 'react';
import { Descriptions } from 'antd';
import { useContext } from 'react';
import { dataContext } from '../../../context/data-context';
const App = () => {
const ctx = useContext(dataContext)
    return( <Descriptions title="Result" bordered style={{marginTop : '2rem'}}>
    <Descriptions.Item span={2} label="Word Count">{ctx.inputWordCount}</Descriptions.Item>
    <Descriptions.Item label="Your Time"></Descriptions.Item>
    <Descriptions.Item label="Word per Second"></Descriptions.Item>
  </Descriptions>)
 
};
export default App;