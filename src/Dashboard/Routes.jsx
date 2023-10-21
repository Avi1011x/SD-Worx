import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Course from "./pages/Course";
import Academy from "../Academy/Academy";

const Rout = (props) => {
    useEffect(()=>{
        console.log(props.data)
      },[]);
    return (
        <Routes>
            <Route path="/" element={<HomePage data={props.data} />} />
            <Route path="/statistics" element={<Academy/>} />
            <Route path="/customers" element={<h1>Customers Page</h1>} />
            <Route path="/diagrams" element={<h1>Diagrams Page</h1>} />
        </Routes>
    );
};

export default Rout;