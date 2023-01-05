import React from 'react'
import { register, handleSubmit, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import backend from '../../config';
import { addService, allServices } from '../../routes';
import cookieCutter from 'cookie-cutter'

const AddServices = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });
    const router = useRouter();

    const handleRegistration = async (data) => {
        const allData = new FormData();
        allData.append("image", data.file[0], "s.png");
        allData.append("name", data.name);
        allData.append("description", data.description);
        allData.append("cost", data.cost);
        const response = await fetch(`${backend}${addService}`, {
            method: "POST",
            body: allData,
            headers: {
                Authorization:
                    cookieCutter.get("jwt")
            },
        });
        let res = await response.json();
        console.log(res);
    };

    const handleError = (errors) => { };
    const registerOptions = {
        name: {
            required: "name is required",
            pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Invalid name. only character values allowed."
            }
        },
        cost: {
            required: "Cost is required",
            pattern: {
                value: /[0-9]/,
                message: "Invalid Cost"
            },
            
        },
        description: {
            required: "Address is required",
            pattern: {
                value: /[a-zA-Z0-9 ]/,
                message: "Invalid Address"
            }
        },
        file: {
            required: "Image is required"
        }
    };
    return (
        <div className='container'>
              <div className='row'>
              <h3 className="title1 mt-5 section-title font-alt align-center">Available Services</h3>

              <div className="col-lg-12 col-md-12 mb-lg-50">
						<ul className="list-style-2">						
					
            {props.services.map((service, index) => {
                                                    return (

                                                    <li key={service._id} className='col-md-4'>{service.name} 
                                                   
                                                      </li> 
                                                    )
                                                }
                                                )}
                                                </ul>
            </div></div>
            <div className="row">
                <div className="col-12 ">
                    <div className="forms">
                        <h3 className="title1 mt-5 section-title font-alt align-center">Add Services</h3>
                        <div className="form-grids row widget-shadow" data-example-id="basic-forms">

                            <div className="form-body">
                                <form method="post" onSubmit={handleSubmit(handleRegistration, handleError)}>
                                    <div className="form-group">
                                        <label>Service Name</label>
                                        <input type="text" className="form-control" id="sername" name="sername" placeholder="Service Name" required={true} {...register('name', registerOptions.name)} />
                                        <small className="text-danger">{errors?.name && errors.name.message}</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" name="des" id="des" rows="3" required={true} {...register('description', registerOptions.description)} placeholder="Description of service"></textarea>
                                        <small className="text-danger">{errors?.description && errors.description.message}</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Cost</label>
                                        <input type="number" min={0} id="cost" name="cost" className="form-control" placeholder="Cost" required={true} {...register('cost', registerOptions.cost)} />
                                        <small className="text-danger">{errors?.cost && errors.cost.message}</small>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Enter the Image</label>
                                        <input className="form-control" type="file" name='file' id="formFile" {...register('file', registerOptions.file)} />
                                        <small className="text-danger">{errors?.file && errors.file.message}</small>
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


export async function getServerSideProps(context) {
    const response = await fetch(`${backend}${allServices}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await response.json();
    return {
        props: data,
    }
}
export default AddServices; 