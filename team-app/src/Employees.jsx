import React from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';


const Employees = (props) => {

    return (    
        <main className='container'>
            <div className="row justify-content-center mt-3 mb-3">
                <div className='col-6'>
                <select className="form-select form-select-lg" id="teams" value={props.selectedTeam} onChange={props.handleTeamSelectionChange}>
                    <option value="null" defaultValue={true}>Select Team</option>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                    <option value="Team D">Team D</option>
                </select>        
                </div>
                <div className="col-8">
                    <div className="card-collection">
                        {
                            props.employees.map((employee) => (
                                <div id={employee.id} key={employee.id.toString()} className={(employee.teamName === props.selectedTeam? 'card m-2 standout': 'card m-2')} 
                                style={{cursor: 'pointer'}} onClick={props.handleEmployeeCardClick} >                            
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