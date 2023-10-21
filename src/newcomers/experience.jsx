import styles from "./newcomers.module.css";
import prodStyles from "./proceed.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import { useState } from "react";
import "./primereactMod.css";


function Experience(props) {

  const navigate = useNavigate();

  const getExperience =(e)=>{
    e.preventDefault();
    const input = document.getElementsByTagName("input");
    let experienceList = "";
    for (let index = 0; index < input.length -1; index++) {
      experienceList+= input[index].value + " ";
    }
    props.experinces("These are my experience: "+experienceList+"\n");
    navigate('/Career_Goals'); // Use the history object to navigate

  };

  return (
    <>
      <div className={prodStyles.proceed}>
        <h1>Work Experience</h1>
        <p style={{ color: "gray", margin: "0px 0 20px", fontSize: "14px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nobis, aliquid quia, quasi totam eligendi debitis itaque eaque
        </p>
        <div className={prodStyles.progressBar}>
          <span style={{ color: "gray", fontSize: "14px" }}>80% Completed</span>
          <ProgressBar style={{ height: "15px" }} value={80}></ProgressBar>
        </div>

        <form id="experience" className={prodStyles.eduList} onSubmit={getExperience}>
          <div>
            <div className={prodStyles.eduHead}>
              <h4>Work Experinece</h4>
            </div>
            <div className={prodStyles.fields}>
              <div>
                <span style={{ marginLeft: "10px" }}>
                  Job Title <span style={{ color: "#f85500" }}>*</span>
                </span>
                <label htmlFor="jobTitle">
                  <input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    placeholder="Enter your job title"
                    required
                  />
                </label>
              </div>
              <div>
                <span style={{ marginLeft: "10px" }}>
                  Company <span style={{ color: "#f85500" }}>*</span>
                </span>
                <label htmlFor="company">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Enter your company name"
                    required
                  />
                </label>
              </div>
              <div>
                <span style={{ marginLeft: "10px" }}>
                  Experience <span style={{ color: "#f85500" }}>*</span>
                </span>
                <label htmlFor="exp">
                  <input
                    type="number"
                    name="exp"
                    id="exp"
                    placeholder="Enter experience in years"
                    required
                  />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="enroll">
                <input type="checkbox" name="enroll" id="enroll" />
                <span>I currently work here</span>
              </label>
            </div>
          </div>
        </form>

        <div className={prodStyles.BackNextBtn}>
          <button style={{ border: "2px solid lightgray" }}>
            <Link to="/proceed" style={{ textDecoration: "none" }}>
              Go Back
            </Link>
          </button>
          <button
            form="experience"
            type="submit"
            style={{
              color: "white",
              border: "none",
              backgroundColor: "#1E1E1E",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Experience;
