import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

const IssueCollection = () => {
     
  
  const [issues, setIssues] = useState([])
  
  
  useEffect(() => {
    const fetchIssues = async () => {
        const res = await fetch('https://localhost:7090/api/Issues')
        setIssues(await res.json())
       
    }
      fetchIssues()
  }, [])
   
  
  
    return (
      <div className='container col-5 mb-5'>
        <Link to={`/issue/:id`} className='Issue-Link'>
        <h2 className='text-center mt-3 mb-4 Create'>Kundärenden</h2>
         {issues.map(issue =>(
          <div className='card d-flex mt-4 pt-4 pb-4' key={issue.id}>
            <h6 className='card-title fw-bold text-center'>{issue.subject}</h6>
            <small className='card-text d-block mb-1 text-center'>{issue.description}</small>
            <small className='text-center mt-4'>{issue.status.status}</small>
            <small className='fst-italic text-center mt-2'>{issue.customer.email}</small>
            
              <div className='text-center mt-1'>
                  <small className='fw-lighter '>{Date().toLocaleString(issue.created).slice(0,16)}</small>
                </div>
           
          </div>
         ))}
        <div className='Issue'>
    
        </div>
        
        </Link>
      </div>
    )
  }
  

export default IssueCollection

