import React from 'react'
import Link from 'next/link'

import backend from '../../config'
import { allAppointments } from '../../routes'
const index = (props) => {
  return (

    <div className='page-section'>
      <div className="container ">
        <h3>Appointment Details</h3>
    <table className='styled-table'>
      <thead>
        <tr>
          <td>Sr.No</td>
          <td>Name</td>
          <td>email</td>
          <td>Appointment Date</td>
          <td>Appointment Time</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {props.data.map((app, i) => {
          var date = new Date(app.appointment.date);
          var formattedDate = date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
          

          return (
            <tr key={i}>
              <td>
                {i + 1}
              </td>
              <td>
                {app.user.name}
              </td>
              <td>
                {app.user.email}
              </td>

              <td>{formattedDate}
              </td>
              <td>
                {app.appointment.time}
              </td>
              <td>
                <Link href={`beautician/${app.appointment._id}`}>
                   <a className='btn btn-primary'>View</a>
                 </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </div>
    
  )
}

export async function getServerSideProps(context) {
  const response = await fetch(`${backend}${allAppointments}`, {
    method: 'POST',
    headers: {
      'Authorization': context.req.cookies['jwt'],
      'Content-Type': 'application/json'
    }
  });
  let data = await response.json();
  return {
    props: data,
  }
}

export default index