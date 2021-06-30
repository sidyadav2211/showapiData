import React, {useState} from 'react'

const Pagination =()=>{
    const [counter,setCounter]=useState(1);
    return (
        <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={()=>setCounter(counter -1)}>Previous</button>
            <button className="btn btn-primary" onClick={()=>setCounter(counter +1)}>Next</button>
        </div>
    )
}
export default Pagination