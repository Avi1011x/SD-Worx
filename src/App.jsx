import NewComers from "./newcomers/newcomers";
import { HashRouter, Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import Dash from "./Dashboard/Dashboard";
import { useEffect, useState } from "react";
import Education from "./newcomers/education";
import Experience from "./newcomers/experience";
import CareerGoal from "./newcomers/career_goal";
import LinkedInURL from "./newcomers/linkedinURL";
import Academy from "./Academy/Academy";

function App() {
  const[data, setData] = useState("");


  useEffect(()=>{
    console.log(data)
  },[data]);
  return (
    <>
      <HashRouter>
        <Routes>
          <Route>
          <Route path="/" element={<NewComers data={setData} />}>
            <Route path="/Education" element={<Education />} />
              <Route exact path="/Experience" element={<Experience />} />
              <Route exact path="/Career_Goals" element={<CareerGoal/>} />
              <Route exact path="/LinkedinUrl" element={<LinkedInURL/>} />
          </Route>
          <Route path="/Dashboard" element={<Dash data={data}/>} />
            <Route path="/statistics" element={<Academy/>} />
            <Route path="/customers" element={<h1>Customers Page</h1>} />
            <Route path="/diagrams" element={<h1>Diagrams Page</h1>} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
