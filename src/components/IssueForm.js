import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const IssueForm = () => {
    const [status, setStatus] = useState([])
    const [customers, setCustomers] = useState([])
     const [customerId, setCustomerId] = useState(0)
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
   

    const [addIssue, setAddIssue] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStatuses = async () => {
            const res = await fetch('https://localhost:7090/api/Statuses')
            setStatus(await res.json())
        }
        fetchStatuses()
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://localhost:7090/api/Customers')
            setCustomers(await res.json())
        }
        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setAddIssue(true)
        
        if (customerId !== 0) {
            const json = JSON.stringify({ subject, description, customerId })
            const res = await fetch('https://localhost:7090/api/Issues', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
            console.log(await res.json())
            setSubject('')
            setDescription('')
            setCustomerId(0)
        }
    }
    useEffect(() => {
        if(addIssue)
        navigate('/issue')
    }, [navigate, addIssue])

    return (
        <div className="container card py-5 rounded-7 shadow p-3 mt-5 bg-body rounded">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Ange Kund</label>
                <select className="form-select" onChange={(e) => setCustomerId(e.target.value)}>
                    <option value={0}>-- Ange en kund --</option>
                    {customers.map(customer => <option key={customer.id} value={customer.id}>{customer.firstName} {customer.lastName}</option>)}
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Ange Rubrik</label>
                <input type="text" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Ange Beskrivning</label>
                <textarea type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
            </div>
            <button type="submit" className="btn btn-primary gradient-color">Spara</button>
        </form>
        
        </div>
    )
   
}

export default IssueForm