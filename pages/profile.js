import React from "react";
import backend from '../config';
import {cancelAppointment, userAppointment} from '../routes.js';
import cookieCutter from 'cookie-cutter';

const cancel = async(id) =>{
  const response = await fetch(`${backend}${cancelAppointment}`, {
    method: 'DELETE',
    body: JSON.stringify({
        id: id
    }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': cookieCutter.get('jwt')
    }});
    let data = await response.json();
    
  }

function profile (props) {
  console.log(props.messaage);
    return(
        <section className="page-section" >
            <div className="container">
            <h3 className="section-title long  font-alt">Your Appointments</h3>
            <div className='col-12 col-md-12 '>

              {

                  props.message == "No appointments" || props.message == "You are not allowed to access this URL" ? <h4 className="align-center">No Appointments Scheduled Please Book Appointment As Soon As Possible.</h4> : 
          <div className='row'>
          <table className='styled-table' >
      <thead>
        <tr>
          <td>Sr.No</td>
          <td>Name</td>
          <td>Appointment-Date</td>
          <td>Appointment-Time</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {props.result.map((app, i) => {
           var date = new Date(app.date);
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
              {app.services.join(", ")}
              </td>
              <td>{formattedDate}
              </td>
              <td>
              {app.time}
              </td>
              <td>
              <button type="button" id={app._id} name="Reject" onClick={e=>cancel(e.target.id)} className="btn btn-danger">Cancel</button>
              </td>
              </tr>
              );
            })}
      </tbody>
    </table>
            </div>
          }
            </div>
            </div>
        </section>
    );
}

export async function getServerSideProps(context) {
  let jwt = context.req.cookies['jwt'];
  const response = await fetch(`${backend}${userAppointment}`, {
    method: 'POST',
    body: JSON.stringify({
              'user': context.req.cookies['name']
          }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': jwt,
    }
  });

  let data = await response.json();
  return {
    props: data
  }
}

export default profile