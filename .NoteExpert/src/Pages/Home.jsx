import { GrLinkNext } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import {NavLink} from 'react-router';
import homeMid from '../ApiJson/homeMid.json'
import './PagesCss/HomeAbout.css';
export const Home=()=>{
    const iconObj={
        FiBookOpen:<FiBookOpen className="midicon"/>,
        LuUsers:<LuUsers className="midicon"/>,
        GoTrophy:<GoTrophy className="midicon"/>
    }
    return (<>
        <section className="home-section">
            <section className="home-top-section">
                <div className="home-top-section-div">
                    <h1>Your Gateway to Academic Excellence</h1>
                    <p>Comprehensive study materials and guidance for BCA, BSC IT, and BCS students</p>
                    <NavLink to='/courses' className='explorebtn-top'>
                        <span>Explore Courses</span> 
                        <GrLinkNext className="next-btn"/>
                    </NavLink>
                </div>
            </section >

            <section className="home-mid-section">
                <div className="home-mid-section-div">
                    {
                        homeMid.map((curr)=>{
                            return (<>
                                <div key={curr.id} className="home-mid-section-div-card">
                                    <span>{iconObj[curr.icon]}</span>
                                    <h1>{curr.h1}</h1>
                                    <p>{curr.p}</p>
                                </div>
                            </>)
                            
                        })
                    }
                </div>

            </section>

            <section className="home-bottom-section">
            <h1 className="top-h1">Our courses</h1>
                <div className="home-bottom-section-div">
                    
                    {[
                        {
                            "id":1,
                            "h1":"BCA",
                            "p1":"Notes / Pyq's",
                            "p2":"Proper and clean PYQ's",
                            "p3":"Great Guidance"
                        },
                        {
                            "id":2,
                            "h1":"BSC IT",
                            "p1":"Notes / Pyq's",
                            "p2":"Proper and clean PYQ's",
                            "p3":"Great Guidance"
                        },
                        {
                            "id":3,
                            "h1":"BCS",
                            "p1":"Notes / Pyq's",
                            "p2":"Proper and clean PYQ's",
                            "p3":"Great Guidance"
                        }
                    ].map((curr)=>{
                        return (<>
                            <div className="home-bottom-section-div-card">
                                <h1>{curr.h1}</h1>
                                <p>
                                <GrLinkNext className="bott-icon"/>
                                    <span>{curr.p1}</span>
                                </p>
                                <p>
                                <GrLinkNext className="bott-icon"/>
                                    <span>{curr.p2}</span>
                                </p>
                                <p>
                                <GrLinkNext className="bott-icon"/>
                                <span>{curr.p3}</span>
                                </p>
                                <NavLink to='/courses' className="explorebtn-bott">Explore</NavLink>
                            </div>
                        </>)
                    })

                    }
                </div>

            </section>

        </section>
    </>)
}