import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const UpdateStatus = () => {
    const [issue, setIssue] = useState([])
    const [statuses, setStatuses] = useState([])
    const [statusId, setStatusId] = useState(0)
    const [issueId, setIssueId] = useState(0)
    const [comment, setComment] = useState(0)

    const [UpdateStatus, setUpdateStatus] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStatus = async () => {
            const res = await fetch('https://localhost:7090/api/Statuses')
            setStatuses(await res.json())
        }
        fetchStatus()
    }, [])

    useEffect(() => {
        const fetchIssue = async () => {
            const res = await fetch('https://localhost:7090/api/Issues')
            setIssue(await res.json())
        }
        fetchIssue()
      }, [])

      const handleSubmit = async (e) => {
        e.preventDefault()
        setUpdateStatus(true)
        
        if (issueId !== 0) {
            const json = JSON.stringify({ statusId, comment })
            const res = await fetch('https://localhost:7090/api/Issues', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
            console.log(await res.json())
            setIssueId(0)
            setStatusId(0)
            setComment(0)
        }
    }
    useEffect(() => {
        if(UpdateStatus)
        navigate('/test')
    }, [navigate, UpdateStatus])


  return (
    <div onSubmit={handleSubmit} className='container col-5 mb-5'>
    <h2 className='text-center mt-3 mb-4 Create'>Lista på ärenden</h2>
     {issue.map(issue =>(
      
      <div className='card d-flex mt-4 pt-4 pb-4' key={issue.id}>
         <div className="mt-3 mb-3 col-12  ">
                <select className="form-select" onChange={(e) => setStatusId(e.target.value)}>
                <option value={0}>-- Ange en status --</option>
                {statuses.map(status => <option key={status.id} value={status.id}>{status.status}</option>)}
            </select>
        </div>
               
            
        <button type="submit" className="btn btn-primary gradient-color">Spara</button>
      </div>
     ))}
    
    
  
  </div>
  )
}

export default UpdateStatus