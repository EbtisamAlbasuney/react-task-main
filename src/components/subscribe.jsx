import React from "react";


export const Subscribe = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-5">
        <div className=" rounded border bg-dark ">
          <div className="border-bottom m-3 p-2" style={{ color: "#fff" }}>
            <i className="fas fa-location-arrow " style={{ marginLeft: "25px" }}></i>
            <span style={{ marginLeft: "10px" }}>Subscribe</span>
          </div>
          <p style={{ color: "#fff", fontSize: "13px", margin: "10px" }}   >
            subscribe our new posts and always you will find the newest news</p>
          <input
            placeholder="enter your mail"
            className=" rounded"
            style={{
              margin: "15px",
              border: "1px solid #eee",
              fontSize: "14px",
              padding: "5px",
              width: "90%",
              backgroundColor: "transparent"
            }}
          />
          <button className="btn  mt-3 " style={{ width: "90%", margin: "5%", color: "#fff", backgroundColor: "#4F52D3" }} type="search">

            SUBSCRIBE</button>
        </div>
      </div>
      <div className="col-lg-5 offset-2">
        <div className=" rounded border " style={{ backgroundColor: "#3EBFF6" }}>
          <div className="border-bottom m-3 p-2" style={{ color: "#fff" }}>
            <i className="fab fa-twitter " style={{ marginLeft: "25px" }}></i>
            <span style={{ marginLeft: "10px" }}>Latest tweets</span>
          </div>
          <div className="bg-dark m-4 " style={{ width: "25%" }}><p style={{ color: "#fff" }}>  aa tweets</p></div>
          <p style={{ color: "#fff", fontSize: "13px", margin: "10px" }}   >
            subscribe our new posts and always you will find the newest news
            subscribe our new posts and always you will find the newest news
            subscribe our new posts and alway
          </p>
          <div style={{ color: "#fff", fontSize: "12px", margin: "15px" }}><i className="far fa-clock"></i> <span>8 hours ago</span></div>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;