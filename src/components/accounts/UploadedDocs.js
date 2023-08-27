import { Delete, FileCopySharp, Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React, { Fragment, useState } from "react";

const UploadedDocs = ()=>{
    const [arr, setArr] = useState([1,2,3,4,5,6])
    return (
        <Fragment>
            <div className="border-bottom mt-md-0 mt-5">
                <p className="fs-5 fw-bold-0 text-dark my-0">
                    Uploaded Documents
                </p>
                <p className="text-dark fs-6 col-md-5">
                    All uploaded documents which was used in any of our services purchased by you at any time
                </p>
            </div>
            <div className="search-box my-3">
                <Paper
                className="border border-dark rounded-5"
                    component='form'
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <IconButton sx={{p: '10px'}} aria-label="search">
                        <Search />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search for Document"
                    />
                </Paper>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        {
                            arr.map(each=>(
                                <tr>                           
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <div className="mx-1 mt-4">
                                                    <span className="bg-green text-white p-3 rounded-4">
                                                        <FileCopySharp />
                                                    </span>
                                                </div>
                                                <div className="mx-2">
                                                    <p className="my-0 fs-7 fw-bold">Husband Passport</p>
                                                    <p className="my-0 fs-7 fw-bold-o"><i className="fa fa-check bg-primary text-white px-1 rounded-circle"></i> Verified upload</p>
                                                    <p className="my-0 fs-7 fw-bold-o">Service Purchased: NWC Card</p>
                                                    <p className="fs-7 fw-bold-0">File size: 1034KB</p>
                                                </div>
                                            </div>
                                            <div>
                                                <IconButton className="border border-dark rounded-circle text-fwr-lite">
                                                    <Delete />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default UploadedDocs