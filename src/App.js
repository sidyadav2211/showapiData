// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Contacts from './componets/contacts';
import Pagination from './componets/Pagination'

class App extends Component {
 
  
  state={
    contacts:[],
    page:2,
    per_page:6,
    total:12,
    total_pages:2,
    
  };
 
    
  

  componentDidMount(){
    fetch('https://reqres.in/api/users?page=1')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data.data,per_page:data.per_page })
    })
    .catch(console.log)
  
  }
  

  render(){
    

    return(
      <div>
       
        <Contacts contacts={this.state.contacts}  />
         {/* <button   onClick={this.handleClick()}>1</button>
        <button per_page={this.state.per_page} >2</button>
        <button total_pages={this.state.total_pages}>3</button> 
        
      */}
    
       <Pagination per_page={this.state.per_page} />
      </div>
     
        
    
     
    )
      
  }
}

export default App;
