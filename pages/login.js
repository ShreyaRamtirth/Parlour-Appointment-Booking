import React, { useState } from 'react';
import { register, handleSubmit, useForm } from 'react-hook-form';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { login } from '../routes';
import Link from 'next/link';
function Login(props) {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
  const handleError = (errors) => { };
  const router = useRouter();
  const [status, setStatus] = useState(0);
  const handleLogin = async (data) => {
    const response = await fetch("/api/login", {
      method: 'POST',
      body: JSON.stringify({
        'email': data.email,
        'password': data.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    const responseData = await response.json();
    console.log(responseData);
    cookieCutter.set('jwt', responseData['jwt'], { expires: new Date(Date.now() + 86400) });
    cookieCutter.set('name', responseData['name'], { expires: new Date(Date.now() + 86400) });
    cookieCutter.set('role', responseData['role'], { expires: new Date(Date.now() + 86400) });
    setStatus(responseData.status);    
    if (responseData['role'] === 'customer')
      router.push('/')
    else if (responseData['role'] === 'employee')
      router.push('/beautician/')
    else if (responseData['role'] === 'admin')
      router.push('/admin/')
  }

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <section className='vh-80'>

        {/* <div className='col col-12 col-md-12 '> */}
         

      
        {/* <section className="page-section"> */}
        {status == 200 ?
          status == 200 ?
            <div className="info-boxes confirmation-message">
              <div className="info-box-icon">
                <i className="fa fa-check"></i>
              </div>
              <h3 className="info-title ">Confirmation box</h3>
              Appointment registered succesfully wait for confirmation email. Thank you.
              <div className="close-button"><i className="fa fa-times"></i></div>
            </div> :
            <div className="info-boxes error-message">
              <div className="info-box-icon">
                <i className="fa fa-bolt"></i>
              </div>
              <h3 className="info-title ">Error box</h3>
              Login unsuccesful. Username & Password is unauthenticated.
              <div className="close-button"><i className="fa fa-times"></i></div>
            </div> : <></>

        }
        <div className="container align-center">
          <h3 className="section-title long  font-alt">Get in touch with us
            </h3>
          {/* <div className="col-md-10 col-md-offset-1 mb-30">
          </div> */}

        <div className='col-12 col-md-12 '>
          <div className='row'>
          <div className="col-xs-8 col-md-4 mb-30">
            <div className="news-item alt-2">
              <div className="news-media">
                <img src="/images/img-1.jpg" data-at2x="images/news/img-21@2x.jpg"  />
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-md-2 mb-30">
            <div className="news-item alt-2 mini mb-30">
              <div className="news-media">
                <img src="/images/img-13.jpg" data-at2x="images/news/img-22@2x.jpg"  />
              </div>
            </div>
            <div className="news-item alt-2 mini">
              <div className="news-media">
                <img src="/images/img-15.jpg" data-at2x="images/news/img-23@2x.jpg"  />
              </div>
            </div>
          </div>

          

          <div className="container bg-success p-2 text-dark bg-opacity-10">
            <div className='row p-5'>
              <div className="col-lg-6 col-md-6  col-sm-6 col-xs-12 ">
                <div className="row">
                <h3 className="serv-title font-alt ">Login Form</h3>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    
                    <p className=''>To grab an offers login first</p>
                    <form onSubmit={handleSubmit(handleLogin, handleError)}>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="control-label" htmlFor="textarea">Email</label>

                            <input type="email" className="form-control appointment_date" id="floatingInput" placeholder="name@example.com"  {...register('email', registerOptions.email)} />
                            <small className="text-danger">
                              {errors?.email && errors.email.message}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="control-label" htmlFor="textarea">Password</label>

                            <input type="password" className="form-control appointment_time" id="floatingPassword" placeholder="Password" {...register('password', registerOptions.password)} />
                            <small className="text-danger">
                              {errors?.password && errors.password.message}
                            </small>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <button type="submit" id="submit" name="submit" className="btn btn-primary button mt-40" >LOGIN</button>
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
      {/* </section> */}
    </section>
  )
}
Login.propTypes = {}

export default Login;