import React from "react";
import {useState} from 'react';
import './App.css';
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import { EmployeeDatabase } from './EmployeeDatabase';

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

    
        return (
        <div>
            <Header 
            selectedTeam={selectedTeam}
            teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
            <Employees 
            employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange} />
            <Footer />
        </div>
        );
}

export default App;