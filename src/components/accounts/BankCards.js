import { Edit, Delete, Close, Search, ArrowDropDown } from "@mui/icons-material";
import { IconButton, InputBase, Paper, Button, Dialog, DialogContent, DialogTitle, TextField, CardContent, Typography, InputAdornment } from "@mui/material";
import React, { Fragment, useState } from "react";

export const BankCards = () => {
    const [arr, setArr] = useState([ 0, 1, 2 ])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [title, setTitle] = useState('')

    const openDialog = (title)=>{
        setTitle(title)
        setDialogOpen(true)
    }
    const cancel = ()=>{
        setDialogOpen(false)
    }
    return (
        <Fragment>
            <div className="border-bottom mt-md-0 mt-5">
                <p className="fs-5 fw-bold-0 text-dark my-0">
                    Registered Cards
                </p>
                <p className="text-dark fs-6 col-md-5">
                    These are cards that were used to purchase a service at one point in time
                </p>
            </div>

            <div className="row mx-auto my-4 mx-0">
                {
                    arr.map((i) => (
                        <div className="col-md-5 col-lg-4 col-xl-3 mt-3 mb-3" key={i}>
                            <div className={i == 2 ? 'p-4 rounded-4 bank-card bg-green' : 'p-4 rounded-4 bank-card bg-address'}>
                                <div className="bank-card-flex">
                                    { i == 2 ?
                                        <img src={require('../../assets/visa-light.png')} className="visa-light-image img-fluid" />
                                        :
                                        <img src={require('../../assets/visa.png')} className="visa-image img-fluid" />
                                    }
                                    <div>
                                        <IconButton className={i == 2 ? 'text-white' : 'text-black'} onClick={() => openDialog('Edit Payment Method')}><Edit /></IconButton>
                                        <IconButton className={i == 2 ? 'text-white' : 'text-black'}><Delete /></IconButton>
                                    </div>
                                </div>
                                <div>
                                    <p className={i == 2 ? 'fw-bold-0 text-white' : 'fw-bold-0 text-black'}>**** 7366 7022</p>
                                    <p className={i == 2 ? 'fw-bold-0 text-white' : 'fw-bold-0 text-black'}>04 / 2024</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className="col-md-5 col-lg-4 col-xl-3 mt-3 mb-3 cursor-pointer" onClick={() => openDialog('Add Payment Method')}>
                    <div className="rounded-4 p-5 border border-dark bank-card">
                        <div className="d-flex my-2 p-1">
                            <i className="fa fa-plus p-1 text-white bg-dark rounded-circle"></i>
                        </div>
                        <p className="pb-2">Add Payment Method</p>
                    </div>
                </div>
            </div>

            <div className="border-bottom mt-md-0 mt-5">
                <div  className="bank-card-flex fs-5 fw-bold-0 text-dark my-0">
                    <p className="col-5">Recent Transactions</p>
                        <Paper
                            className="border border-dark rounded-5" component='form'
                            sx={{ p: '2px 3px', m: '0px 5px', display: 'flex', alignItems: 'center'}}
                        >
                            <IconButton sx={{p: '10px'}} aria-label="search">
                                <Search />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                            />
                        </Paper>
                </div>
                <p className="text-dark fs-6 col-md-5">
                    Today
                </p>
            </div>
            <div>
                {
                    arr.map((i) => (
                        <div className="history-flex">
                            <img className="history-image" src={require('../../assets/transactpic.png')}/>
                            <CardContent className="bank-card-details">
                                <Typography variant="subtitle1" className="bank-card-text">
                                    Visa Extension
                                </Typography>
                                <Typography variant="body2" className="bank-card-text">
                                    Full Payment
                                </Typography>
                            </CardContent>
                            <Typography variant="body1" className="bank-card-amount">
                                $500
                            </Typography>
                        </div>
                    ))
                }
            </div>



            <Dialog open={dialogOpen} fullWidth={false} maxWidth={'md'} className="">
                <DialogTitle>
                    <div className="d-flex justify-content-end">
                        <IconButton  onClick={cancel}>
                            <Close />
                        </IconButton>
                    </div>
                    <p className="text-center fs-6 fw-bold">{title}</p>
                </DialogTitle>
                <DialogContent className="fs-7">
                    <div className="form-group my-1">
                        <label className="form-label">Name on Card</label>
                        <input className="form-control w-100" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label">Card Number</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group my-1">
                        <label className="form-label">Billing Address</label>
                        <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group my-1">
                        <div className="label-container">
                            <label className="form-label">Expiration Date</label>
                        </div>
                        <div className="inputs-container">
                            <TextField
                            label=""
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <ArrowDropDown />
                                </InputAdornment>
                                ),
                            }}
                            />
                            <TextField
                            label=""
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <ArrowDropDown />
                                </InputAdornment>
                                ),
                            }}
                            />
                        </div>
                    </div>
                    <Button className="text-capitalize bg-fwr-lite border-4 col-12">Save</Button>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}