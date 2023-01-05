import React from "react";
import backend from "../../config";

function appointmentointmentDetails(props) {
    var date = new Date(props.data.appointment.date);
          var formattedDate = date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
    return (

        <div className='page-section'>
        <div className="container align-center">
       <h3> Daily Report</h3>
        <table className='table'>

        <thead>
        <tr>
          <th>Name</th>
          <td>{props.data.user.name}</td>
        </tr>
        <tr>
        <th>Email</th>
                        <td>{props.data.user.email}</td>
        </tr>
        <tr>
                         <th>Appointment Date</th>
                 <td>{formattedDate}</td>
             </tr>

             <tr>
                         <th>Appointment Time</th>
                         <td>{props.data.appointment.time}</td>
                     </tr>

                     <tr>
                         <th>Services</th>
                       <td>{props.data.appointment.services.join(', ')}</td>
                    </tr>
      </thead>
      <tbody>
        </tbody>
            </table>

        </div>
        </div>
        //  <div className='container'>Daily Report
        //     <table className="table table-bordered">
        //         <tbody>
        //             <tr>
        //                 <th>Name</th>
        //                 <td>{props.data.user.name}</td>
        //             </tr>

        //             <tr>
        //                 <th>Email</th>
        //                 <td>{props.data.user.email}</td>
        //             </tr>
        //             <tr>
        //                 <th>appointmentointment Date</th>
        //                 <td>{props.data.appointment.date}</td>
        //             </tr>

        //             <tr>
        //                 <th>appointmentointment Time</th>
        //                 <td>{props.data.appointment.date}</td>
        //             </tr>

        //             <tr>
        //                 <th>Services</th>
        //                 <td>{props.data.appointment.services.join('<br>')}</td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div> 
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`${backend}/employee/app?id=${context.query.slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'appointmentlication/json',
            'Authorization': context.req.cookies['jwt']
        }
    });
    let data = response.json();
    return { props: data };
}

export default appointmentointmentDetails;