import React, { Fragment } from 'react'
import { PieChart, Pie, Cell } from "recharts";
import { Grid, Box } from '@mui/material';

export const InstallmentPlansDetails = () => {
    const COLORS = ["#008000", "#F0F0F0"];
    const pieData = [
        {
            name: "Paid",
            value: 1
        },
        {
            name: "Total",
            value: 3
        }
    ];
    return (
        <Fragment>
            <div className="border-bottom mt-md-0 mt-5">
                <p className="fs-5 p-4 fw-bold-0 text-dark my-0">
                    Installment Plans
                </p>
            </div>
                <Grid container spacing={2} className='mt-0'>
                    <Grid item xs={12} md={6} className="divider">
                        <Box className="paper">
                            <div className="border-bottom mb-3">
                                <p className="fs-6 py-4 fw-bold-0 text-dark my-0">
                                    Purchase Information
                                </p>
                            </div>
                            <div className='d-flex justify-content-center col-12 mt-5'>
                                <PieChart width={160} height={160}>
                                    <Pie
                                        data={pieData}
                                        color="#000000"
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                            <div className='d-flex justify-content-center col-12 my-2'>
                                Paid: $100
                            </div>
                            <div className='d-flex justify-content-center col-12 my-2'>
                                Payment: O1 of 03
                            </div>
                        </Box>
                        <Box className="mt-5">
                            <div className="d-flex justify-content-between my-2"><span className="col-8">Service</span><span className="col-4">Visa On Arrival</span></div>
                            <div className="d-flex justify-content-between my-2"><span className="col-8">Order Amount</span><span className="col-4">$350</span></div>
                            <div className="d-flex justify-content-between my-2"><span className="col-8">Installments</span><span className="col-4">3 weeks</span></div>
                            <div className="d-flex justify-content-between my-2"><span className="col-8">Latest Paid</span><span className="col-4">July 10,  2023</span></div>
                            <div className="d-flex justify-content-between my-2"><span className="col-8">Next Paid</span><span className="col-4">July 17, 2023</span></div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className="paper">
                            <div className="border-bottom mb-3">
                                <p className="fs-6 py-4 fw-bold-0 text-dark my-0">
                                    Purchase History
                                </p>
                            </div>
                        </Box>
                        <Box className="mt-5">
                            <div className="d-flex justify-content-between my-3"><span>Amount</span><span style={{textAlign:'right'}}>Date</span></div>
                            <div className="d-flex justify-content-between my-3"><span>$100</span><span style={{textAlign:'right'}}>July 10, 2023</span></div>
                        </Box>

                        <Box className="paper">
                            <div className="border-bottom mt-5">
                                <p className="fs-6 py-4 fw-bold-0 text-dark my-0">
                                    Repayment Schedule
                                </p>
                            </div>
                        </Box>
                        <Box className="mt-5">
                            <div className="d-flex justify-content-between my-3"><span>Amount</span><span style={{textAlign:'right'}}>Due Date</span></div>
                            <div className="d-flex justify-content-between my-3"><span>$100</span><span style={{textAlign:'right'}}>July 17, 2023</span></div>
                        </Box>
                    </Grid>
                </Grid>
        </Fragment>
    )
}
