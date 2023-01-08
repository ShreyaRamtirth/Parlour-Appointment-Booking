import React, { useState } from 'react'
import { register, handleSubmit, useForm } from 'react-hook-form';

function add_beautition() {
  const [status,setStatus] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    },
    phNumber: {
      required: "Contact No is required",
      minLength: {
        value: 10,
        message: "Conatct must contains numbers only."
      }
    }
  };
  return (
    <div className='container'>

<section className="page-section">
                { status==200 ? 
                status==200?
            <div className="info-boxes confirmation-message">
							<div className="info-box-icon">
								<i className="fa fa-check"></i>
							</div>
							<h3 className="info-title ">Confirmation box</h3>
							Beautition details updated succesfully.
							<div className="close-button"><i className="fa fa-times"></i></div>
						</div>:
                        <div className="info-boxes error-message">
                        <div className="info-box-icon">
                            <i className="fa fa-bolt"></i>
                        </div>
                        <h3 className="info-title ">Error box</h3>
                        Beautition details updated unsuccesfully.
                        <div className="close-button"><i className="fa fa-times"></i></div>
                    </div>:<></>

                }
			<div className="container align-center">
				<h3 className="section-title bottom-line long font-alt">Beautition Profile<span>update details of beauticians</span></h3>
				<div className="col-md-10 col-md-offset-1 mb-30">
				</div>


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

                            <div className="col-lg-6 col-md-8 col-xs-12 ml-5 align-left">
								<h3 className="serv-title font-alt ">Updation Form</h3>
                                </div>

			
<div className="container bg-success p-2 text-dark bg-opacity-10">
                <div className='row'>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 ">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <form >
                                    <div className="row">


                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">

                                    <div className="form-group">
                                    <label className="control-label" htmlFor="name">Email</label>

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
		</section>






      <div className="main-page">
        <div className="forms">
          <h3 className="title1">Beautition Profile</h3>
          <div className="form-grids row widget-shadow" data-example-id="basic-forms">
            <div className="form-title">
              <h4>Update Profile :</h4>
            </div>
            <div className="form-body">
              <form method="post">
                <p style={{ fontSize: "16px", color:"red"}} align="center">
                </p>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Admin Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="contactnumber">Contact Number</label>
                  <input type="text" id="contactnumber" name="contactnumber" className="form-control"  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" name="email" className="form-control" />
                </div>
                <button type="submit" name="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default add_beautition