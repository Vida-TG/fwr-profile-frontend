import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

export const InstallmentPlans = () => {
    const [arr, setArr] = useState([1, 2, 3, 4, 5])
    return (
        <Fragment>
            <div className="border-bottom mt-md-0 mt-5">
                <p className="fs-5 pb-3 fw-bold-0 text-dark my-0">
                    Installment Plans
                </p>
            </div>
            <div className="border-bottom mt-md-0 mt-5">
                <div className="bank-card-flex pt-2 pt-md-4 fs-5 fw-bold-0 text-dark my-0">
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
                                placeholder="Search Earning"
                            />
                        </Paper>
                </div>
                <p className="text-dark fs-6 col-md-5">
                    This week
                </p>
            </div>
            <div>
                {
                    arr.map((i) => (
                        <div className="installment-flex">
                            <Box className="installment-part">
                                <img className="history-image" src={require('../../assets/transactpic.png')}/>
                                <Typography variant="body2" className="extension-text fs-6 fw-bold">
                                    Visa Extension
                                </Typography>
                            </Box>
                            <div className="installment-part">
                                <Typography variant="subtitle2" className="payment-info fs-6">
                                    Payment 01 of 03
                                </Typography>
                            </div>
                            <div className="installment-part">
                                <Typography variant="subtitle2" className="pending-status fw-bold fs-5">
                                    Pending
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}