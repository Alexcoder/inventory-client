import React from 'react';
import { DashboardAuto } from '../'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { HAVEACCOUNT_TRUE, } from '../../state/constants';

import './welcome.css';

const Welcome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <main className="welcome-main" >
            <section className="welcome-section" >
                <div className="welcome-dash-cont" style={{marginTop:"-15rem",}}>
                    {/* <h1 style={{ color: "white", textAlign: "center", padding: "1rem 0rem -8rem 0rem", }}>ALEX HUB</h1> */}
                       <div style={{display:"grid", width:"100vw", placeContent:"center"}}><DashboardAuto /> </div>  
                </div>

                <div className="welcome-text-cont" style={{marginTop:"-5rem"}}>
                    <div className="welcome-text">
                        <h2 className="inventory_text"> INVENTORY CHECK </h2>
                        <div>
                            Built to monitor and track inflow and outflow<br />
                            of items, tracks your cashflow and keeps you in control.<br />

                            <Button
                                sx={{ textTransform: "lowercase", marginTop: "2rem", width: "40%" }}
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    dispatch({ type: HAVEACCOUNT_TRUE });
                                    navigate(`/auth`);
                                }}> SIGNIN / REGISTER
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Welcome;