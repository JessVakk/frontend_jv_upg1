import axios from 'axios'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const IssueCollection = () => {
     
  
  const [issues, setIssues] = useState([])
  
  
    const fetchIssues = async () => {
        const res = await axios.get(`https://localhost:7090/api/issues`)
        setIssues(res.data)
          
    }
  
    
    useEffect(() => {
        fetchIssues()
        
    },[])
  
  
    return (
      <div className='container col-5 mb-5'>
        <h2 className='text-center mt-3 mb-4 Create'>Kundärenden</h2>
         {issues.map(issue =>(
          <div className='card d-flex mt-4 pt-4 pb-4' key={issue.id}>
            <h6 className='card-title fw-bold text-center'>{issue.subject}</h6>
            <small className='card-text d-block mb-1 text-center'>{issue.description}</small>
            <small className='fst-italic text-center mt-2'>{issue.status.status}</small>
            <small className='fst-italic text-center mt-2'>{issue.customer.email}</small>
            
              <div className='text-center mt-1'>
                  <small className='fw-lighter '>{Date().toLocaleString(issue.created).slice(0,16)}</small>
                </div>
           
          </div>
         ))}
        <div className='Issue'>
    
        </div>
        
      
      </div>
    )
  }
  

export default IssueCollection

