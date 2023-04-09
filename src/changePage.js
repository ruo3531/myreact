import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProblemList from './ProblemList';
import Problem from './Problem';
import HomePage from './HomePage';

function changePage(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="ProblemList" element={<ProblemList/>} />
            <Route path="Problem" element={<Problem />} />
          </Routes>
        </BrowserRouter>
      );
}
