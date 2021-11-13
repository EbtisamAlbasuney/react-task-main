import React, { useState } from "react";


export const SearchBox = () => {
  const [stateTogleone, setStateTogelone] = useState(false);


  return (
    <div style={{ border: "1px solid #eee", padding: "10px" }}>
      <div className="ml-3">
        <i className="fas fa-search p-4"></i>
        <span style={{ fontWeight: "bold" }}> Start searching</span>
      </div>

      <div style={{ marginLeft: "10px", marginBottom: "8px" }}>
        <label
          style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}
        >
          JOB
        </label>
        <input
          placeholder="job title keyword"
          style={{
            marginRight: "5px",
            border: "1px solid #eee",
            fontSize: "12px",
            padding: "7px",
            width: "90%"
          }}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <label
          style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}
        >
          LOCATION
        </label>
        <input
          placeholder="location title keyword"
          style={{
            marginRight: "5px",
            border: "1px solid #eee",
            fontSize: "12px",
            padding: "7px",
            width: "90%"
          }}
        />
      </div>
      <div style={{ borderRight: " #eee 1px solid", margin: "10px" }}>
        <label
          style={{ display: "block", fontWeight: "bold", fontSize: "13px" }}
        >
          CATEGORY
        </label>
        <div
          className="dropdown"
          style={{ marginRight: "5px", fontSize: "12px", padding: "7px" }}
        >
          <button
            style={{ marginLeft: "-6px", width: "100%" }}
            className="btn border  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            select industry
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* toglle */}

      <button style={{
        border: "1px solid #eee", backgroundColor: "transparent", padding: "10px",
        fontSize: "13px", marginLeft: "16px", paddingLeft: "25px"
      }} onClick={() => setStateTogelone(!stateTogleone)}>CONTRACT TYPE
        <i className="fas fa-chevron-right px-4"></i>
      </button>
      {stateTogleone && <p style={{ paddingLeft: "25px" }}>hhhhhhhhhhhhhhhh</p>}

      <button className="btn btn-dark mt-3 " style={{ width: "100%" }} type="search">
        <i className="fas fa-search #fff " style={{ fontSize: "10px", padding: "5px" }}></i>
        search</button>

    </div>
  );
};
export default SearchBox;
