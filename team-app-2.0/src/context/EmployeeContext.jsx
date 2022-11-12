import React from "react";
import { EmployeeDatabase } from "../database/EmployeeDatabase";
import { useState, useEffect, useContext } from "react";


const EmployeeContext = React.createContext();

export const EmployeeContextProvider = (props) => {
    const [selectedTeam, setTeam] = useState('null');
    const [employees, setEmployees] = useState(EmployeeDatabase);    
    const [teamMemberCount, setMemberCount] = useState(0);
    const [selectedMember, setSelectedMember] = useState({});
    const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers());

    function handleTeamSelectionChange(event) {
        // console.log(event.target.value);
        setTeam(event.target.value);
    }
    
    useEffect(() => {
        const countMembers = () => {
            const members = employees.filter((employee) => employee.teamName === selectedTeam);
            setMemberCount(members.length);
        }
        if(selectedTeam === null ) {
            return 
        } else {
            countMembers();
        }
    }, [selectedTeam, employees]);

    useEffect(() => {
        localStorage.setItem('employeeList', JSON.stringify(employees));
    }, [employees]);
    
    useEffect(() => {
        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    }, [selectedTeam]);

    function groupedTeamMembers() {
        const teams = ['TeamA', 'TeamB', 'TeamC', 'TeamD']; 
        var teamData = [];
        
        for(let x = 0; x < teams.length; x++) {
            var teamMembers = employees.filter((employee) => employee.teamName === teams[x]);
            var data  = {team: teams[x], members: teamMembers, collapsed: selectedTeam === x ? false : true}
            teamData.push(data);
        }
        return teamData;
    }
    /**
     * var teamMembers = employees.filter((employee) => employee.teamName === x);
     * var data  = {team: 'TeamC', members: teamMembers, collapsed: selectedTeam === x ? false : true}
        x = data;
    */

    return <EmployeeContext.Provider value={{employees,
                                            setEmployees,
                                            handleTeamSelectionChange,
                                            setTeam,
                                            selectedTeam,
                                            teamMemberCount,
                                            selectedMember, 
                                            setSelectedMember,
                                            groupedEmployees,
                                            setGroupedData,
                                            groupedTeamMembers
                                        }}>
        {props.children}
    </EmployeeContext.Provider>
}

export const useEmployeeContext = () => useContext(EmployeeContext);