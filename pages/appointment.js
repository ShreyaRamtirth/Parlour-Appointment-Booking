import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { register, handleSubmit, useForm } from 'react-hook-form';
import cookieCutter from 'cookie-cutter';
import backend from '../config';
import { bookAppointment, allServices } from '../routes'
import Link from 'next/link';

function Appointment(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const [login, setLogin] = useState(true);
    const [service, setService] = useState([]);
    const [status, setStatus] = useState(0);

    useEffect(()=>{
        if(cookieCutter.get('jwt') !== "" || cookieCutter.get('jwt') !== undefined || cookieCutter.get('jwt') !== null){
            setLogin(false);
        }
    },[]);
    const handleRegistration = async (data) => {

        const response = await fetch(`${backend}${bookAppointment}`, {
            method: 'POST',
            body: JSON.stringify({
                appointment: {
                    date: data.adate,
                    time: data.atime,
                    services: service
                }
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookieCutter.get('jwt')
            }});  
                const responseData = await response.json();
                setStatus(response.status);     
            };

    const handleError = (errors) => { };
    const registerOptions = {
        phone: {
            required: "Phone number required",
            pattern: {
                value: /[0-9]{10}/,
                message: "Invalid COntact Number"
            }
        }
    };

    const checkServices = (e,isChecked) =>{
        if(isChecked)
        {    setService([...service,e]);
        }else{
            service.splice(service.indexOf(e),1);
        }
    }

    return (
        <div>
            <Head>
                <title>Appointments</title>
            </Head>

            <section className="page-section">
                { 
                status==200 ?
            <div className="info-boxes confirmation-message">
							<div className="info-box-icon">
								<i className="fa fa-check"></i>
							</div>
							<h3 className="info-title ">Confirmation box</h3>
							Appointment registered succesfully wait for confirmation email. Thank you.
							<div className="close-button"><i className="fa fa-times"></i></div>
						</div>:
                        status== 0 ? <></>:
                        <div className="info-boxes error-message">
                        <div className="info-box-icon">
                            <i className="fa fa-bolt"></i>
                        </div>
                        <h3 className="info-title ">Error box</h3>
                        Appointment registered unsuccesful. Please login first or try again later.
                        <div className="close-button"><i className="fa fa-times"></i></div>
                    </div>

                }
			<div className="container align-center">
				<h3 className="section-title  long font-alt">Book An Procedure<span>We are Open for You</span></h3>
				<div className="col-md-10 col-md-offset-1 mb-30">
				</div>

                <div className='col-12'>
                    <div className='row'>
                        <div className='col-6'>
				<div className="col-xs-8 col-md-4 mb-30">
								<div className="news-item alt-2">
									<div className="news-media">
										<img src="/images/img-21.jpg" data-at2x="images/news/img-21@2x.jpg"  />
									</div>
								</div>
							</div>
							<div className="col-xs-4 col-md-2 mb-30">
								<div className="news-item alt-2 mini mb-30">
									<div className="news-media">
										<img src="/images/img-22.jpg" data-at2x="images/news/img-22@2x.jpg"  />
									</div>
								</div>
								<div className="news-item alt-2 mini">
									<div className="news-media">
										<img src="/images/img-23.jpg" data-at2x="images/news/img-23@2x.jpg"  />
									</div>
								</div>
							</div>

                                </div>
			<div className='col-6'>
                <div className="container bg-success p-2 text-dark bg-opacity-10">
                <div className='row'>
                <h3 className="serv-title font-alt ">Appointment Form</h3>

                    <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 ">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className='text-center'> Book your appointment to save salon rush.</p>
                                <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                                    <div className="row">
                                        
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="textarea">Appointment Date</label>
                                                <input type="date" className="form-control appointment_date" placeholder="Date" name="adate" id='adate' min={new Date().toISOString().split('T')[0]} required="true" {...register('adate', registerOptions.adate)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="textarea">Appointment Time</label>
                                                <input type="time" className="form-control appointment_time" placeholder="Time" name="atime" id='atime' required="true" {...register('atime', registerOptions.atime)} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                                {props.services.map((service, index) => {
                                                    return (
                                                        <div key={index} >
                                                        <div className="form-check col-md-6 ">

                                                    <input type="checkbox"
                                                    onClick={(e)=>{
                                                        checkServices(e.target.value,e.target.checked);
                                                    }}
                                                     className='form-check-input col-md-4 col-sm-3' value={service.name} id={service._id} key={service._id} />
                                                      <label htmlFor={service._id}>{service.name}</label> 
                                                      </div> 
                                                     <div className="form-check col-md-4 col-sm-3"> <label htmlFor={service._id}> Rs. {service.price} </label> </div>
                                                     </div>)
                                                }
                                                )}
                                        </div>
                                        
                                        
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <button type="submit" id="submit" name="submit" className="btn btn-primary button mt-40" disabled={login} >Book Appointment</button>
                                                <p className='font-weight-bold mt-10'>
                                                    <Link href="/login" ><a>Login</a></Link> &nbsp;
                                                    or &nbsp;
                                                    <Link href="/register" ><a>Register</a></Link> &nbsp;
                                                     
                                                    to book an Appointment</p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
			</div>
		</section>
         
        </div>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`${backend}${allServices}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log(response);

    let data = await response.json();
    return {
        props: data,
    }
}

export default Appointment;