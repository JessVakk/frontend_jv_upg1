import { useState } from 'react'
import { useParams } from 'react-router-dom'

const CommentForm = () => {
    
    const { id } = useParams()
    const {issueId, customerId} = useParams('') 
    const [comment, setComment] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (customerId !== 0) {
            const json = JSON.stringify({ comment, issueId, customerId })
            console.log(json)

            const res = await fetch('https://localhost:7090/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
            console.log(await res.json())
            setComment()
        }
    }

    return (
        <div className="container card py-5 rounded-7 shadow p-3 mt-5 bg-body rounded">
        <form onSubmit={handleSubmit}>
            <div className="mb-3 col-12">
                <label className="form-label">Ange Kommentar</label>
                <textarea type="text" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
            </div>
            <button type="submit" className="btn btn-primary gradient-color">Spara</button>
        </form>
        </div>
    )
}

export default CommentForm