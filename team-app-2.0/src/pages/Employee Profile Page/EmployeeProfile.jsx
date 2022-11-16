import React from "react";
import { useEmployeeContext } from "../../context/EmployeeContext";
import maleProfile from '../../images/maleProfile.jpg';
import femaleProfile from '../../images/femaleProfile.jpg';

const EmployeeProfile = () => {
   const { selectedMember } = useEmployeeContext();

    return <main style={{marginBottom: '80px'}}>
        <div id="main-profile-container">
        {(selectedMember.gender === 'male') ? <img src={maleProfile} alt='male profile pic' className="card-ing-top" />
                                                            :<img src={femaleProfile} alt='female profile pic' className="card-ing-top" />}                            
        <h1 style={{marginBottom: '20px', fontSize: '40px', display:'block'}}>
            <span>{selectedMember.fullName}</span>
        </h1>                       
        <div className="profile-detail-area">
            <div className="col1">
            <p><span>ID:</span> {selectedMember.id}</p> 
            <p><span>Designation:</span> {selectedMember.designation}</p>
            </div>
            <div className="col1">
            <p><span>Gender:</span> {selectedMember.gender}</p>
            <p><span>Team Name:</span> {selectedMember.teamName}</p>
            </div>
        </div>
        </div>
    </main>
}

export default EmployeeProfile;