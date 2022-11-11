import {useState} from 'react'

const StatusForm = () => {
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target[0].value)

        const json = JSON.stringify({ status: e.target[0].value})
        console.log(json)

        const res = await fetch('https://localhost:7090/api/statuses',{
          method: 'POST',
          headers: {
              'content-Type': 'application/json'
          },
          body: json
        })
        console.log(await res.json())

        setStatus('')
    }

  return (
    <div className="container card py-5 rounded-7 shadow p-3 mt-5 bg-body rounded">
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label className='form-label'>Ange Status</label>
        <input type="text" className='form-control' value={status} onChange={handleChange} />
    </div>
    <button type='submit' className='btn btn-primary gradient-color'>Spara</button>
    </form>
    </div>
  )
}

export default StatusForm