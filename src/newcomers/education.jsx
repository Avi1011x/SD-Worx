import styles from "./newcomers.module.css";
import prodStyles from "./proceed.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "./primereactMod.css";

function Education(props) {

  const navigate = useNavigate();

  const [selectedDegree, setSelectedDegree] = useState("");
  const degree = [
    { name: "Undergraduate", value: "Bachelor" },
    { name: "Masters", value: "Master" },
  ];

  
  const getEducation =(e)=>{
    e.preventDefault();
    const input = document.getElementsByTagName("input");
    let educationList = "";
    for (let index = 0; index < input.length -1; index++) {
      educationList+= input[index].value + " ";
    }
    props.educations("These are my educations: "+educationList+"\n");
    navigate('/Experience'); 
  };

  return (
    <>
      <div className={prodStyles.proceed}>
        <h1>Educational Background</h1>
        <p style={{ color: "gray", margin: "0px 0 20px", fontSize: "14px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nobis, aliquid quia, quasi totam eligendi debitis itaque eaque
        </p>
        <div className={prodStyles.progressBar}>
          <span style={{ color: "gray", fontSize: "14px" }}>80% Completed</span>
          <ProgressBar style={{ height: "15px" }} value={80}></ProgressBar>
        </div>

        <form id="education" className={prodStyles.eduList} onSubmit={getEducation}>
          <div>
            <div className={prodStyles.eduHead}>
              <h4>Highest Education</h4>
            </div>
            <div className={prodStyles.fields}>
              <div>
                <span style={{ marginLeft: "10px" }}>
                  School or University{" "}
                  <span style={{ color: "#f85500" }}>*</span>
                </span>
                <label htmlFor="school">
                  <input
                    type="text"
                    name="school"
                    id="school"
                    placeholder="Enter your school name"
                    required
                  />
                </label>
              </div>
              <div>
                <span style={{ marginLeft: "10px" }}>
                  Degree <span style={{ color: "#F85500" }}>*</span>
                </span>
                <label htmlFor="">
                  <input
                    required
                    type="text"
                    name="degree"
                    id="degree"
                    value={selectedDegree}
                    readOnly
                  />
                  <Dropdown
                    value={selectedDegree}
                    onChange={(e) => setSelectedDegree(e.value)}
                    options={degree}
                    optionLabel="name"
                    placeholder="Select your Degree/Certification"
                    className={styles.dropdown}
                  />
                </label>
              </div>
              <div>
                <span style={{ marginLeft: "10px" }}>
                  Field of Study <span style={{ color: "#f85500" }}>*</span>
                </span>
                <label htmlFor="Field">
                  <input
                    type="text"
                    name="field"
                    id="field"
                    placeholder="Enter Study field"
                    required
                  />
                </label>
              </div>
              <div>
                <span style={{ marginLeft: "10px" }}>
                  CPA <span style={{ color: "#f85500" }}>*</span>
                </span>
                <label htmlFor="cpa">
                  <input
                    type="number"
                    name="cpa"
                    id="cpa"
                    placeholder="Enter your CPA"
                    required
                  />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="enroll">
                <input type="checkbox" name="enroll" id="enroll" />
                <span>I am currently enrolled in this course</span>
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
            form="education"
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

export default Education;
