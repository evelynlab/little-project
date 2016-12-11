/*
* @Author: yqy
* @Date:   2016-12-05 18:33:36
* @Last Modified by:   yuqy
* @Last Modified time: 2016-12-09 13:20:47
*/

'use strict';
import './index.scss';
var jquery = require('jquery');
var index = {
  init (){
    jquery('body').css('background','red');
  }
}
module.exports= index;
index.init();

