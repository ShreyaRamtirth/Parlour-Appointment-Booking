import React from 'react'

const appointment_report = () => {
    return (
        <div className='container'>
           
                <div className="main-page">
                    <div className="forms">
                        <h3 className="title1">Between dates reports</h3>
                        <div className="form-grids row widget-shadow" data-example-id="basic-forms">
                            <div className="form-body">
                                <form method="post" name="bwdatesreport" action="">
                                    <p style={{fontSize: "16px", color: "red"}} align="center"> </p>


                                    <div className="col-mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label">From Date</label>
                                        <input type="date" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                                    </div>
                                    <div className="col-mb-3">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">to Date</label>
                                        <input type="date" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                                    </div>
                                    <button type="submit" name="submit" className="btn btn-primary">Get report</button>
                                </form>
                            </div>

                        </div>


                    </div>
                </div>
            
        </div>
    )
}

export default appointment_report;