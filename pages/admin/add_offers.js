import React, {useState} from 'react'
import { register, handleSubmit, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import backend from '../../config';
import { addOffer } from '../../routes';
import cookieCutter from 'cookie-cutter'

const AddServices = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const router = useRouter();
    const [status, setStatus] = useState(0);

    const handleOffers = async (data) => {
        const response = await fetch(`${backend}${addOffer}`, {
            method: 'POST',
            body: JSON.stringify({
                
                    "name": data.name,
                    "description":data.desc,
                    "validTill":data.validTill,
                    "isActive":true,
                    "off":data.off
                
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookieCutter.get('jwt')
            }
         
                }
                
                );  
                const responseData = await response.json();
                setStatus(response.status);    
                
    };

    const handleError = (errors) => { };
    const registerOptions = {
        name: {
            required: "offer name is required",
            pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Invalid name. only character values allowed."
            }
        },
        validTill: {
            required: "valid date is required",
            
        },
        description: {
            required: "Description is required",
            pattern: {
                value: /[a-zA-Z0-9 ]/,
                message: "Invalid Address"
            }
        },
        off: {
            
            required: "off price is required"
        }
    };
    return (
        <div className='container'>
               { 
                status==200 ?
            <div className="info-boxes confirmation-message">
							<div className="info-box-icon">
								<i className="fa fa-check"></i>
							</div>
							<h3 className="info-title ">Confirmation box</h3>
							Offer added succesfully.
							<div className="close-button"><i className="fa fa-times"></i></div>
						</div>:
                        status== 0 ? <></>:
                        <div className="info-boxes error-message">
                        <div className="info-box-icon">
                            <i className="fa fa-bolt"></i>
                        </div>
                        <h3 className="info-title ">Error box</h3>
                        Offer added unsuccesfully.
                        <div className="close-button"><i className="fa fa-times"></i></div>
                    </div>

                }
            <div className="row">
                <div className="col-12 ">
                    <div className="forms">
                        <h3 className="title1 mt-5 section-title font-alt align-center">Add Offers</h3>
                        <div className="form-grids row widget-shadow" data-example-id="basic-forms">

                            <div className="form-body">
                                <form method="post" onSubmit={handleSubmit(handleOffers, handleError)}>
                                    <div className="form-group">
                                        <label>Offer Name</label>
                                        <input type="text" className="form-control" id="sername" name="sername" placeholder="Service Name" required={true} {...register('name', registerOptions.name)} />
                                        <small className="text-danger">{errors?.name && errors.name.message}</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" name="des" id="des" rows="3" required={true} {...register('description', registerOptions.description)} placeholder="Description of offer"></textarea>
                                        <small className="text-danger">{errors?.description && errors.description.message}</small>
                                    </div>
                                    <div className="form-group">
                                        <label>validTill</label>
                                        <input type="date" min={new Date().toISOString().split('T')[0]} id="valid" name="valid" className="form-control" placeholder="Valid Date" required={true} {...register('validTill', registerOptions.validTill)} />
                                        <small className="text-danger">{errors?.cost && errors.cost.message}</small>
                                    </div>
                                    <div className="form-group">
                                        <label>% Off Price</label>
                                        <input type="number" id="off" min={0} max={100} name="off" className="form-control" placeholder="off price" required={true} {...register('off', registerOptions.off)} />
                                        <small className="text-danger">{errors?.cost && errors.cost.message}</small>
                                    </div>
                                   
                                    <button type="submit" className="button small mt-5 mb-5">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
          
        </div>
    )


    
}


// export async function getServerSideProps(context) {
//     const response = await fetch(`${backend}${allServices}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     let data = await response.json();
//     return {
//         props: data,
//     }
// }
export default AddServices; 