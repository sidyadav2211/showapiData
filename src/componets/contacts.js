import React from 'react'

    const Contacts = ({ contacts }) => {
    
      return (
        <div>
          <center><h1>List</h1></center>
          <table  className="table table-striped table-bordered table-sm"  width="100%">
          <thead>
    <tr >
      <th class="th-sm">First Name

      </th>
      <th class="th-sm">Last Name

      </th>
      <th class="th-sm">avatar

      </th>
      <th class="th-sm">Email
      </th>
    </tr>
  </thead>
        <tbody>
        {contacts.slice(0,5).map((contact,index) => {
          return(
            <tr key={ index }>
          
                <td>{contact.first_name}</td>
                <td >{contact.last_name}</td>
                <td >{contact.avatar}</td>
                
                <td >{contact.email}</td>
                </tr>
          )
    }
    )}
       
           
        </tbody>

          </table>
          {/* <div>
            <button >Previous</button>
            <button >Next</button>
          </div> */}
          {/* {contacts.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.first_name}</h5>
                <h5 class="card-title">{contact.last_name}</h5>
                <h5 class="card-title blue">{contact.avatar}</h5>
                
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
               
              </div>
            </div>
          ))} */}
        </div>
      )
    };

    export default Contacts