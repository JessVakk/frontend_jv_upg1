import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    
    const [registered, setRegistered] = useState(false)
    const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault()
        setRegistered(true)

        const json = JSON.stringify({ firstName, lastName, email, phoneNumber})

        const res = await fetch ("https://localhost:7090/api/customers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        })
        console.log(await res.json())
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhoneNumber('')
    }

    useEffect(() => {
        if(registered)
        navigate('/add')
    }, [navigate, registered])

  return (
   <div className="container card py-5 rounded-7 shadow p-3 mt-5 bg-body rounded">
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div className="row">
    <div className="mb-3 col-12 ">
        <label className='form-label'>Ange Förnamn</label>
        <input type="text" className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <div className="mb-3 col-12">
        <label className='form-label'>Ange EfterNamn</label>
        <input type="text" className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
    <div className="mb-3 col-12">
        <label className='form-label'>Ange EpostAdress</label>
        <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mb-5 col-12">
        <label className='form-label'>Ange Telefonummer</label>
        <input type="text" className='form-control' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    </div>
    <button type='submit' className='btn btn-primary gradient-color col-12'>Spara</button>
    </div>
    </form>
    </div>
  )

}

export default CustomerForm