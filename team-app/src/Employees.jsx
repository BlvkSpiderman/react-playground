import {useState} from 'react';
import React from 'react';
import { EmployeeDatabase } from './EmployeeDatabase';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';


const Employees = () => {
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
        <main className='container'>
            <div className="row justify-content-center mt-3 mb-3">
                <div className='col-6'>
                <select className="form-select form-select-lg" id="teams" value={selectedTeam} onChange={handleTeamSelectionChange}>
                    <option value="null" defaultValue={true}>Select Team</option>
                    <option value="TeamA">Team A</option>
                    <option value="TeamB">Team B</option>
                    <option value="TeamC">Team C</option>
                    <option value="TeamD">Team D</option>
                </select>        
                </div>
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map((employee) => (
                                <div id={employee.id} className={(employee.teamName === selectedTeam? 'card m-2 standout': 'card m-2')} style={{cursor: 'pointer'}} onClick={handleEmployeeCardClick} >                            
                                {(employee.gender === 'male') ? <img src={maleProfile} alt='male profile pic' className="card-ing-top" />
                                                            :<img src={femaleProfile} alt='female profile pic' className="card-ing-top" />}                            
                                <div className="card-body"> 
                                  <h5 className="card-title">Full Name: {employee.fullName}</h5>                            
                                  <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Employees;

/**
    function EmployeeCards(props) {
        return(
            <ul>
                {props.employees.map((employee) => 
                    <li key={employee.id}>
                        {employee.fullName}
                    </li>
                )
                }
            </ul>
        )
    }
    <EmployeeCards employees={employees} />
     */