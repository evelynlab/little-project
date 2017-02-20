/*
* @Author: yqy
* @Date:   2016-12-05 18:33:36
* @Last Modified by:   yuqy
* @Last Modified time: 2017-01-13 15:17:29
*/

'use strict';
import './index.scss';
import Form from './form.js';
var React = require('react');
var ReactDOM = require('react-dom');

class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div>
        <Form/>
      </div>
      )
  }
}

ReactDOM.render(<Layout/>, document.getElementById('test-form'))


