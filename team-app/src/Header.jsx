import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = ({selectedTeam, teamMemberCount}) => {
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
/**
 * {selectedTeam === 'null'? 'Select team to view members': '{selectedTeam} has {teamMemberCount} Members}
 */
export default Header;