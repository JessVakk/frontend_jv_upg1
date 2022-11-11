import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleIssueList = () => {
  const [issue, setIssue] = useState([])
  // const [statuses, setStatuses] = useState()
  // const { id } = useParams();
  // const { comments, statuses } = issue
  const [statuses, setStatuses] = useState([])
  const [statusId, setStatusId] = useState(0)
  const [issueId, setIssueId] = useState(0)
  
    const fetchIssue = async () => {
        const res = await axios.get('https://localhost:7090/api/issues'  )
        setIssue(res.data)
          
    }
    const fetchStatus= async () => {
      const res = await axios.get('https://localhost:7090/api/statuses' )
      setStatuses(res.data)
      setStatusId(0)
        
  }
  
    
    useEffect(() => {
        fetchIssue()
        fetchStatus()
        
    },[])

    const handleSubmit = async (e) => {
      e.preventDefault()
      
      
      if (issueId !== 0) {
          const json = JSON.stringify({issueId })
          const res = await fetch('https://localhost:7090/api/statuses', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: json
          })
          console.log(await res.json())
          setIssueId(0)
      }
  }
  
    return (
      <div className='container col-5 mb-5'>
        <h2 className='text-center mt-3 mb-4 Create'>Lista på ärenden</h2>
         {issue.map(issue =>(
          
          <div className='card d-flex mt-4 pt-4 pb-4' key={issue.id}>
            <h6 className='card-title fw-bold text-center'>{issue.subject}</h6>
            <small className='card-text d-block mb-1 text-center'>{issue.description}</small>
            <small className='fst-italic text-center mt-2'>{issue.status.status}</small>
            <small className='fst-italic text-center mt-2'>{issue.customer.email}</small>
            
              <div className='text-center mt-1'>
                  <small className='fw-lighter '>{Date().toLocaleString(issue.created).slice(0,16)}</small>
                </div>
                <div className="mt-3 mb-3 col-5 ">
                    <select className="form-select" onChange={(e) => setStatusId(e.target.value)}>
                    <option value={0}>-- Ange en status --</option>
                    {statuses.map(status => <option key={status.id} value={status.id}>{status.status}</option>)}
                </select>
                {/* <ul>
                { comments && comments.map(comment => <li key={comment.id}>{comment.comment}</li>)}
                 </ul> */}
            </div>
            <button onSubmit={handleSubmit} type="submit" className="btn btn-primary gradient-color">Spara</button>
          </div>
         ))}
        
        
      
      </div>
    )
  }
  
 

export default SingleIssueList