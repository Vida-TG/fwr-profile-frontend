import { Close } from "@mui/icons-material";
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React, { Fragment, useState } from "react";

const Address = ()=>{
    const [arr, setArr] = useState([1,2,3])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [title, setTitle] = useState('')

    const openDialog = (title)=>{
        setTitle(title)
        setDialogOpen(true)
    }
    const cancel = ()=>{
        setDialogOpen(false)
    }
    return(
        <Fragment>
             <div className="border-bottom mt-md-0 mt-5">
                <p className="fs-5 fw-bold-0 text-dark my-0">
                    Registered Addresses
                </p>
                <p className="text-dark fs-6 col-md-5">
                    These are addresses that were used to purchase a service at one point in time
                </p>
            </div>
            <div className="row mx-auto my-4 mx-0">
                {
                    arr.map((each, i)=>(
                        <div className="col-md-4 mb-4" key={i}>
                            <div className={i == 0 ? 'rounded-4 p-md-4 p-1 bg-default-address' : 'rounded-4 p-md-4 p-1 bg-address'}>
                                <p>Address {i+1}</p>
                                <p className="fs-6">Name: <span className="fw-bold-0">Ifeanyi Eze</span></p>
                                <p className="fs-6">Street: <span className="fw-bold-0">132, My Street</span></p>
                                <p className="fs-6">State: <span className="fw-bold-0">Kingston, New York </span></p>
                                <p className="fs-6">Country: <span className="fw-bold-0">USA</span></p>
                                <p className="fs-6">Zip Code: <span className="fw-bold-0">12401</span></p>
                                <p className="fs-6">Phone number: <span className="fw-bold-0">+2349168770395</span></p>
                                <div className="d-flex">
                                    <Button onClick={()=>openDialog('Edit Address')} className="border-end text-dark text-capitalize">Edit</Button>
                                    <Button className="border-end text-dark text-capitalize">Delete</Button>
                                    <Button className="text-dark text-capitalize">Set as default</Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="col-md-4 cursor-pointer" onClick={()=>openDialog('Add New Address')}>
                    <div className="rounded-4 p-5 border border-dark">
                        <div className="d-flex justify-content-center my-2 pt-5">
                            <i className="fa fa-plus p-1 text-white bg-dark rounded-circle"></i>
                        </div>
                            <p className="text-center pb-5">Add New Address</p>
                    </div>
                </div>
            </div>

            {/* Form Dialog */}
            <Dialog open={dialogOpen} fullWidth={false} maxWidth={'xs'} className="">
                <DialogTitle>
                    {/* <div className="d-flex justify-content-end">
                        <IconButton>
                            <Close />
                        </IconButton>
                    </div> */}
                    <p className="text-center fs-6 fw-bold">{title}</p>
                </DialogTitle>
                <DialogContent className="fs-7">
                    <div className="form-group my-1">
                        <label className="form-label">Name</label>
                        <input className="form-control w-100" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label">Street</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label">State</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label">Country</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label">ZIP Code</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label">Phone Number</label>
                        <input className="form-control" />
                    </div>
                    <Button className="text-capitalize bg-fwr-lite mx-1">Save</Button>
                    <Button onClick={cancel} className="text-capitalize mx-1 text-fwr-lite">Cancel</Button>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

export default Address