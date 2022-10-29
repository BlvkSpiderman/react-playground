import React from "react";
import {useState, useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import { EmployeeDatabase } from './EmployeeDatabase';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";

function App() {
    
    const [selectedTeam, setTeam] = useState('null');
    const [employees, setEmployees] = useState(EmployeeDatabase);    

    function handleTeamSelectionChange(event) {
        console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event) { 
        if(selectedTeam === 'null') {
            return ;
        }
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }: employee);
      setEmployees(transformedEmployees);
    }

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees));
      }, [employees]);
    
      useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
      }, [selectedTeam]);
    
    return (
        <Router>
            <Nav />
            <Header />
              <Routes>
                <Route path="/" 
                  element={<Employees 
                            employees={employees}
                            selectedTeam={selectedTeam}
                            handleEmployeeCardClick={handleEmployeeCardClick}
                            handleTeamSelectionChange={handleTeamSelectionChange}/>}>
                </Route>
                  <Route path="/GroupedTeamMembers" 
                  element={<GroupedTeamMembers />}>
                </Route>
                <Route path="*" 
                  element={<NotFound />}>
                </Route>
              </Routes>          
            <Footer />
        </Router>
        );
}

export default App;