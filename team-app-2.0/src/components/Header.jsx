import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useEmployeeContext } from '../context/EmployeeContext';

const Header = () => {
    const { selectedTeam, teamMemberCount } = useEmployeeContext();
    
    return (    
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Team Member Allocation</h1>
                    <h3> {selectedTeam === 'null'? 
                        'Select team to view members' 
                        : selectedTeam + ' has ' + teamMemberCount +' Members'}
                    </h3>
                </div>
            </div>
        </header>
    );
}

export default Header;