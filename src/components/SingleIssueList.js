import { useEffect, useState } from 'react'
import axios from 'axios'

const SingleIssueList = ({id}) => {

  const [issue, setIssue] = useState([])
  const [statuses, setStatuses] = useState([])
  const [statusId, setStatusId] = useState(0)
  const [issueId, setIssueId] = useState(0)
  const [description, setDescription] = useState("")
  const [comment, setComment] = useState("")
 
  const fetchIssue = async () => {
    const res = await axios.get('https://localhost:7090/api/issues' )
    setIssue(res.data)
    setDescription('')
      
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
        const json = JSON.stringify({statusId, comment, issueId })
        const res = await fetch('https://localhost:7090/api/Issues/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        console.log(await res.json())
        setStatusId(0)
        setComment("")
        setIssueId(0)
    }
  }
  
    return (
      <div onSubmit={handleSubmit}  className='container col-5 mb-5'>
        <h2 className='text-center mt-3 mb-4 Create'>Lista på ärenden</h2>
         {issue.map(issue =>(
          <div className='card d-flex mt-4 pt-4 pb-4' key={issue.id}>
             <div className="mt-3 mb-3 col-12  ">
                    <select className="form-select" onChange={(e) => setStatusId(e.target.value)}>
                    <option value={0}>-- Ange en status --</option>
                    {statuses.map(status => <option key={status.id} value={status.id}>{status.status}</option>)}
                </select>
            </div>
            <h6 className='card-title fw-bold text-center'>{issue.subject}</h6>
            <small className='card-text d-block mb-1 text-center'>{issue.description}</small>
            <small className='text-center mt-2'>{issue.status.status}</small>
            <small className='fst-italic text-center mt-2'>{issue.customer.email}</small>
            
              <div className='text-center mt-1'>
                  <small className='fw-lighter '>{Date().toLocaleString(issue.created).slice(0,16)}</small>
                  
                </div>
                <div className="mt-3 mb-3 col-12 ">
                <div className="mb-12">
                <label className="form-label">Kommentar:</label>
                <textarea type="text" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
            </div>
                 
            </div>
            <button type="submit" className="btn btn-primary gradient-color">Spara</button>
          </div>
         ))}
      </div>
    )
  }
  
 

export default SingleIssueList