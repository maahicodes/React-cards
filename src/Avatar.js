import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList.js';

//parent component
class Avatar extends Component {
   constructor(){
       super();
       this.state = {
           name : "Welcome to Avatar"
       }
   }

    nameChange(){
        this.setState({
            name : "hey Thanks for sunscribe"
        })
    }

  render() {
   const avatarlistarray = [
       {
           id:1,
           name: 'User1',
           work: 'web developer',
           city: 'New York'
       },
       {
            id:2,
            name: 'User2',
            work: 'Software engineer',
            city: 'New York'
        },  
        {
            id:3,
            name: 'User3',
            work: 'Front-end dev',
            city: 'New York'
        }, 
        {
            id:4,
            name: 'User4',
            work: 'Back-end dev',
            city: 'New York'
        }
   ]
//map methos returns arrayofvalues stored in above obj
   const newavatar = avatarlistarray.map( (avtarcard, i) => {
        return <AvatarList key={i} id={avatarlistarray[i].id} 
        name={avatarlistarray[i].name} 
        work={avatarlistarray[i].work} 
        city={avatarlistarray[i].city} />
    })
 
    return (
        <div>
        {/* <h1 className="tc"> {this.state.name} </h1> */}
           {newavatar}
        {/* <button onClick = { () => this.nameChange() }>Subscribe</button> */}

        </div>
         )
} 
}

export default Avatar;