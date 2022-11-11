import { Route, Routes } from 'react-router-dom'
import CommentForm from '../components/CommentForm'
import CustomerForm from '../components/CustomerForm'
import IssueForm from '../components/IssueForm'
import IssueList from '../components/IssueList'
import SingleIssueList from '../components/SingleIssueList'
import StatusForm from '../components/StatusForm'

const Views = () => {
  return (
    
    <>
    <Routes>
    <Route path='/' element={<CustomerForm />}/>
    <Route path='/add' element={<IssueForm /> }/>
    <Route path='/issue' element={<IssueList /> }/>
    <Route path='/issues' element={<SingleIssueList /> }/>
    <Route path='/status' element={<StatusForm />}/>
    <Route path='/comment' element={<CommentForm />}/>
    </Routes> 
    </>
    
  )
}


export default Views