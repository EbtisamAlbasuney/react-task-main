import React from "react";
import { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { connect } from "react-redux";
import { handleSearch } from './../actions/index';

export function ControlledTabs({ companyies, jobs, handleSearch, jobTitles, cities }) {
  const [key, setKey] = useState("home");
  const [jobtitle, setJobtitle] = useState("")
  const [city, setCity] = useState("")
  const [company, setCompany] = useState("")
  const [companyName, setCompanyName] = useState("select indastry")
  console.log(jobtitle, city, company)

  const handleSearchFn = (e) => {
    e.preventDefault();
    handleSearch(jobs, jobTitles, cities, jobtitle, city, company)
  }
  return (

    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 "
            style={{ marginTop: "-10px" }}
          >
            <Tab eventKey="home" title="FIND A JOB" style={{ fontWeight: "bold", border: " 2px solid #eee" }}>
              <div style={{ display: "flex" }}>
                <div style={{ borderRight: " #eee 1px solid", margin: "10px" }}>
                  <label
                    style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}
                  >
                    JOB
                  </label>
                  <input
                    name="jobtitle"
                    placeholder="job title keyword"
                    value={jobtitle}
                    style={{
                      marginRight: "5px",
                      border: "1px solid #eee",
                      fontSize: "12px",
                      padding: "7px",
                      marginTop: "7px"
                    }}
                    onChange={(e) => setJobtitle(e.target.value)}
                  // onChange={(e) => setJobtitle(e.target.value)}

                  />
                </div>
                <div style={{ borderRight: " #eee 1px solid", margin: "10px" }}>
                  <label
                    style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}
                  >
                    LOCATION
                  </label>
                  <input
                    name="city"
                    value={city}
                    placeholder="location title keyword"
                    style={{
                      marginRight: "5px",
                      border: "1px solid #eee",
                      fontSize: "12px",
                      padding: "7px",
                      marginTop: "7px"
                    }}

                    onChange={(e) => setCity(e.target.value)}
                  // onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div style={{ borderRight: " #eee 1px solid", margin: "10px" }}>
                  <label style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}>
                    CATEGORY

                  </label>
                  <div className="dropdown" style={{ marginRight: "5px", fontSize: "12px", padding: "7px" }}>

                    <button
                      name="companies"
                      style={{ marginLeft: "-6px" }}
                      className="btn border dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={(e) => {
                        e.preventDefault();
                        setCompany("")
                        setCompanyName("select indastry")
                      }}
                    >
                      {companyName}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      {companyies && companyies.map(com => (

                        <li key={com.id}>
                          <a className="dropdown-item" name="companies"
                            // value={com.id}
                            onClick={
                              (e) => {
                                e.preventDefault();

                                setCompany(com.id)
                                setCompanyName(com.name)
                              }}
                          >
                            {com.name}
                          </a>
                        </li>
                      ))}
                      {/* <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div>
                  <label style={{ visibility: "hidden" }}>serach</label>
                  <button className="btn btn-dark mt-3 " style={{ width: "100%" }} type="search" onClick={(e) => handleSearchFn(e)}>
                    <i className="fas fa-search #fff " style={{ fontSize: "10px", padding: "5px" }}></i>
                    search</button>

                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="CREATE RESEME">
              jjjjjj
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    jobs: state?.jobs?.jobs,
    cities: state?.cities?.cities,
    workTimes: state?.workTimes?.workTimes,
    companyies: state?.companyies?.companyies,
    jobTitles: state?.jobTitles?.jobTitles

  };
};
export default connect(mapStateToProps, { handleSearch })(ControlledTabs);

