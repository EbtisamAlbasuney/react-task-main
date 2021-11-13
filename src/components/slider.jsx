import React,{useState} from "react";
import { Carousel } from "react-bootstrap";
import img from '../assets/images/developers.jpg';

export const Slider = () => {
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect} style={{paddingBottom:"10px"}}>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={img}
                alt="First slide"
                style={{height:"120px"}}
              />

              <div className="d-flex mt-4">
                  <img src={img} style={{width:"50px", height:"50px"}}/>
                  <div className="px-3">
                  <h6 >Front end developers</h6>
                  <p>beautiful theme</p>
                  </div>
              </div>
              <p style={{marginLeft:"60px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum
              Nulla vitae elit libero, a pharetra augue mollis interdum
                  .</p>
                 <div className="d-flex " style={{fontSize:"12px",marginLeft:"60px"}}>
                 <div ><i className="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div className="px-3"><i className="far fa-clock "></i> <span>8 hours ago</span></div>
                 </div>
                 <button className="btn  mt-3 " style={{width:"90%",margin:"5%",color:"#fff",backgroundColor:"#4F52D3"}} type="search">
          
          apply for job</button>
            </Carousel.Item>
           
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={img}
                alt="First slide"
                style={{height:"120px"}}
              />

              <div className="d-flex mt-4">
                  <img src={img} style={{width:"50px", height:"50px"}}/>
                  <div className="px-3">
                  <h6 >Front end developers</h6>
                  <p>beautiful theme</p>
                  </div>
              </div>
              <p style={{marginLeft:"60px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum
              Nulla vitae elit libero, a pharetra augue mollis interdum
                  .</p>
                 <div className="d-flex " style={{fontSize:"12px",marginLeft:"60px"}}>
                 <div ><i className="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div className="px-3"><i className="far fa-clock "></i> <span>8 hours ago</span></div>
                 </div>
                 <button className="btn  mt-3 " style={{width:"90%",margin:"5%",color:"#fff",backgroundColor:"#4F52D3"}} type="search">
          
          apply for job</button>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 "
                src={img}
                alt="First slide"
                style={{height:"120px"}}
              />

              <div className="d-flex mt-4">
                  <img src={img} style={{width:"50px", height:"50px"}}/>
                  <div className="px-3">
                  <h6 >Front end developers</h6>
                  <p>beautiful theme</p>
                  </div>
              </div>
              <p style={{marginLeft:"60px"}}>Nulla vitae elit libero, a pharetra augue mollis interdum
              Nulla vitae elit libero, a pharetra augue mollis interdum
                  .</p>
                 <div className="d-flex " style={{fontSize:"12px",marginLeft:"60px"}}>
                 <div ><i className="fas fa-map-marker-alt"></i> <span>new york city</span></div>
          <div className="px-3"><i className="far fa-clock "></i> <span>8 hours ago</span></div>
                 </div>
                 <button className="btn  mt-3 " style={{width:"90%",margin:"5%",color:"#fff",backgroundColor:"#4F52D3"}} type="search">
          
          apply for job</button>
            </Carousel.Item>
          </Carousel>
        );
      }
      
      return(<ControlledCarousel />);
};
export default Slider;