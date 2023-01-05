import React, {useState} from 'react'
import Link from 'next/link';
import backend from '../../config';
import cookieCutter from 'cookie-cutter';

function AcceptAppointment(props) {
  const [data, setData] = useState(props.data);
  const accept = async (id) => {
    const response = await fetch(`${backend}/admin/confirmappointment`, {
      method: 'POST',
      body:JSON.stringify({"id":id}),
      headers: {
        'Authorization': cookieCutter.get('jwt'),
        'Content-Type': 'application/json'
      }
    });
    let d= await response.json();
    setData(d.data);
  }
  return (
    <div className='page-section'>
      <div className="container align-center">
    <table className='styled-table'>
      <thead>
        <tr>
          <td>Sr.No</td>
          <td>Name</td>
          <td>email</td>
          <td>Appointment-Date</td>
          <td>Appointment-Time</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {data.map((app, i) => {
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

              <td>{app.appointment.date}
              </td>
              <td>
                {app.appointment.time}
              </td>
              <td>
                <button type="button" id={app.appointment._id} name="Accept" onClick={e=>accept(e.target.id)} className="btn btn-primary">Accept</button>
                <button type="button" id={app.appointment._id} name="Reject" onClick={e=>accept(e.target.id)} className="btn btn-danger">Reject</button>
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
  const response = await fetch(`${backend}/admin/appointments`, {
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

export default AcceptAppointment;