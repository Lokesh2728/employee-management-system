import React from 'react'
import Header from '../others/Header'
import Tasknumber from '../others/Tasknumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <Tasknumber data={props.data} />
        <Tasklist data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
