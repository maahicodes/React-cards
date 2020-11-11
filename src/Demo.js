import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {
   
   	 return <div className="my_style">
   	 <h1>Heyaa {props.name}</h1>
   	 <h3>Hows going!</h3>
   	</div>
   
}

export default Demo;