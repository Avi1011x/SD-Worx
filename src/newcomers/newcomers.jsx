import styles from "./newcomers.module.css";
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import SlideShow from "./slideshow";
import Proceed from "./proceed";
import UploadResume from "./upload_resume";
import Education from "./education";
import Experience from "./experience";
import CareerGoal from "./career_goal";
import LinkedInURL from "./linkedinURL";
import { useState } from "react";
import Dash from "../Dashboard/Dashboard";
import { useEffect } from "react";


function NewComers(props) {
  const[educationList, setEducationList] = useState("");
  const[experienceList, setExperienceList] = useState("");
  const[goals, setGoals] = useState("");

  useEffect(()=>{
    props.data(educationList + " " + experienceList+ " "+ goals);
  },[goals]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.left_side}>
          <img className={styles.logo} src="images/SD_logo_baseline_RGB.png" alt="" />
            <Routes>
              <Route path="/" element={<Proceed/>} />
              <Route path="/Upload_Resume" element={<UploadResume/>} />
              <Route path="/Education" element={<Education educations={setEducationList}/>} />
              <Route exact path="/Experience" element={<Experience experinces={setExperienceList}/>} />
              <Route exact path="/Career_Goals" element={<CareerGoal goals={setGoals}/>} />
              <Route exact path="/LinkedinUrl" element={<LinkedInURL/>} />
            </Routes>
        </div>
        <div className={styles.right_side}>
          <SlideShow/>
        </div>
      </div>
    </>
  );
}

export default NewComers;
