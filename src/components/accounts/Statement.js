import { Search } from "@mui/icons-material";
import { CardContent, IconButton, InputBase, Paper, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

export const Statement = () => {
    const [arr, setArr] = useState([1, 2, 3])
    const [arr2, setArr2] = useState([1, 2, 3, 4])
    return (
        <Fragment>
            <div className="border-bottom mt-md-0 mt-5">
                <p className="fs-5 pb-3 fw-bold-0 text-dark my-0">
                    Transaction History
                </p>
            </div>
            <div className="border-bottom mt-md-0 mt-5">
                <div className="bank-card-flex flex-md-row flex-column pt-2 pt-md-4 fs-5 fw-bold-0 text-dark my-0 mb-md-0 mb-2">
                    <p className="">Recent Transactions</p>
                        <Paper
                            className="border border-dark rounded-5" component='form'
                            sx={{ p: '2px 3px', m: '0px 5px', display: 'flex', alignItems: 'center'}}
                        >
                            <IconButton sx={{p: '10px'}} aria-label="search">
                                <Search />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search earning"
                            />
                        </Paper>
                </div>
                <p className="text-dark fs-6 col-md-5 fw-bold-0">
                    Today
                </p>
            </div>
            <div>
                {
                    arr.map((i) => (
                        <div className="history-flex">
                            <img className="history-image" src={require('../../assets/transactpic.png')}/>
                            <CardContent className="bank-card-details">
                                <Typography variant="subtitle1" className="bank-card-text fw-bold">
                                    Visa Extension
                                </Typography>
                                <Typography variant="body2" className="bank-card-text fw-bold-0">
                                    Full Payment
                                </Typography>
                            </CardContent>
                            <Typography variant="body1" className="bank-card-amount fw-bold">
                                $500
                            </Typography>
                        </div>
                    ))
                }
            </div>


            <div className="border-bottom mt-5">
                <p className="text-dark fs-6 col-md-5 fw-bold-0">
                    This week
                </p>
            </div>
            <div>
                {
                    arr2.map((i) => (
                        <div className="history-flex">
                            <img className="history-image" src={require('../../assets/transactpic.png')}/>
                            <CardContent className="bank-card-details">
                                <Typography variant="subtitle1" className="bank-card-text fw-bold">
                                    Visa Extension
                                </Typography>
                                <Typography variant="body2" className="bank-card-text fw-bold-0">
                                    Full Payment
                                </Typography>
                            </CardContent>
                            <Typography variant="body1" className="bank-card-amount fw-bold">
                                $500
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}