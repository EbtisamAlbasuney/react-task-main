import React from "react";
import { useState, useEffect } from "react";
import images from '../assets/images/download.jpg';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { connect } from "react-redux";

export function JobsTabs({ jobTitles, jobs, cities, companyies, workTimes, filteredjobs }) {
    const [key, setKey] = useState("home");
    const [numPerPage, setNumPerPage] = useState(4);

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <p style={{ fontSize: "12px", marginTop: "30px", fontWeight: "bold" }}>we have {filteredjobs?.length} jobs for you</p>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 "
                        style={{ marginTop: "-10px", border: "1px solid #eee" }}
                    >
                        <Tab eventKey="home" title="ALL JOBS" >
                            {jobTitles && filteredjobs && cities && companyies && workTimes && filteredjobs.slice(0, numPerPage).map((job, i) =>

                                <div className="d-flex justify-content-between mt-4" key={job.id}>
                                    {console.log((jobTitles.filter(t => t.id == job.jobtitleId)))}
                                    <div>< img src={images} style={{ width: "40px" }} /></div>
                                    <div style={{ fontWeight: "bold", marginLeft: "10px" }}>{(jobTitles.filter(t => t.id == job.jobtitleId))[0].name}
                                        <p style={{ fontWeight: "normal", fontSize: "13px" }}>
                                            <span style={{ color: "blue" }}>
                                                {(companyies.filter(c => c.id == job.companyId))[0].name}

                                            </span> | happiness</p>
                                    </div>
                                    <div ><i className="fas fa-map-marker-alt"></i> <span>
                                        {(cities.filter(c => c.id == job.cityId))[0].name}
                                        city</span></div>
                                    <div><i className="far fa-clock"></i> <span>{job.relaizedin}</span></div>
                                    <div ><p style={{ color: "#fff", backgroundColor: (workTimes.filter(w => w.id == job.worktimeId))[0].bgColor }}>{(workTimes.filter(w => w.id == job.worktimeId))[0].name}</p></div>
                                    <div style={{ fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}>...</div>
                                </div>
                            )}



                        </Tab>

                        {jobTitles && filteredjobs && cities && companyies && workTimes && workTimes.map(workTime => (


                            <Tab eventKey={workTime.name} title={workTime.name} key={workTime.id}>


                                {filteredjobs && filteredjobs.filter(job => job.worktimeId == workTime.id).map(j => (

                                    <div className="d-flex justify-content-between mt-4" key={j.id}>
                                        <div>< img src="public/images/download.jpg" /></div>
                                        <div style={{ fontWeight: "bold", marginLeft: "10px" }}>{(jobTitles.filter(t => t.id == j.jobtitleId))[0].name}
                                            <p style={{ fontWeight: "normal", fontSize: "13px" }}><span style={{ color: "blue" }}>
                                                {(companyies.filter(c => c.id == j.companyId))[0].name}

                                            </span> | happiness</p>
                                        </div>
                                        <div ><i className="fas fa-map-marker-alt"></i> <span>

                                            {(cities.filter(c => c.id == j.cityId))[0].name}

                                            city</span></div>
                                        <div><i className="far fa-clock"></i> <span>{j.relaizedin}</span></div>
                                        {/* <div ><p style={{ color: "#fff", backgroundColor: "blue" }}>temperary</p></div> */}
                                        <div style={{ fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}>...</div>
                                    </div>
                                ))}

                            </Tab>
                        ))}

                    </Tabs>

                    {filteredjobs.slice(0, numPerPage).length < filteredjobs.length && <button

                        onClick={() => {
                            setNumPerPage(numPerPage + 4)
                        }}
                        style={{ border: "none", width: "70%", marginLeft: "15%", marginTop: "50px", fontWeight: "bold", padding: "10px" }}>LOAD MORE LISTINGS</button>
                    }  </div>
            </div>
        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        jobs: state?.jobs?.jobs,
        filteredjobs: state?.jobs?.filterdJobs,
        cities: state?.cities?.cities,
        workTimes: state?.workTimes?.workTimes,
        companyies: state?.companyies?.companyies,
        jobTitles: state?.jobTitles?.jobTitles

    };
};
export default connect(mapStateToProps)(JobsTabs);

