import styles from "./newcomers.module.css";
import prodStyles from "./proceed.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import { Slider } from "primereact/slider";
import { useState } from "react";
import "./primereactMod.css";

function CareerGoal(props) {

const navigate = useNavigate();

  const getFields = (e)=>{
    e.preventDefault();
    const goal = document.getElementById("desiredTitle");
    const aspiration = document.getElementById("aspiration");

    const data ="My desired goal is "+  goal + " and my aspiration :" +aspiration + "\n";
    props.goals(data);
    navigate('/DashBoard'); 
  };

  return (
    <>
      <div className={prodStyles.proceed}>
        <h1>Career Goals</h1>
        <p style={{ color: "gray", margin: "0px 0 20px", fontSize: "14px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          nobis, aliquid quia, quasi totam eligendi debitis itaque eaque
        </p>
        <div className={prodStyles.progressBar}>
          <span style={{ color: "gray", fontSize: "14px" }}>80% Completed</span>
          <ProgressBar style={{ height: "15px" }} value={80}></ProgressBar>
        </div>

        <form id="goals" className={prodStyles.eduList} onSubmit={getFields}>
          <div className={prodStyles.fields} >
            <div style={{flex:"100%"}}>
              <span style={{ marginLeft: "10px" }}>
                Desired job title / Career path{" "}
                <span style={{ color: "#f85500" }}>*</span>
              </span>
              <label htmlFor="desiredTitle">
                <input
                  type="text"
                  name="desiredTitle"
                  id="desiredTitle"
                  placeholder="Enter your desired job title"
                  required
                />
              </label>
            </div>
            <div>
              <span>Long-term career aspiration</span>
              <label htmlFor="aspiration">
                <textarea
                  name="aspiration"
                  id="aspiration"
                  rows={3}
                  style={{ width: "100%" }}
                ></textarea>
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
            form="goals"
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

export default CareerGoal;
