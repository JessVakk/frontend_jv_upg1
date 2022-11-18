import { Route, Routes } from 'react-router-dom'
import CommentForm from '../components/CommentForm'

import CustomerForm from '../components/CustomerForm'
import IssueForm from '../components/IssueForm'
import IssueList from '../components/IssueList'
import SingleIssueList from '../components/SingleIssueList'
import StatusForm from '../components/StatusForm'

import UpdateStatus from '../components/UpdateStatus'

const Views = () => {
  return (
    
    <>
    <Routes>
    <Route path='/' element={<CustomerForm />}/>
    <Route path='/add' element={<IssueForm /> }/>
    <Route path='/issue' element={<IssueList /> }/>
    <Route path='/issue/:id' element={<SingleIssueList /> }/>
    <Route path='/status' element={<StatusForm />}/>
    
    <Route path='/comment/:id' element={<CommentForm />}/>
    <Route path='/update' element={<UpdateStatus />}/>
    
    </Routes> 
    </>
    
  )
}


export default Views