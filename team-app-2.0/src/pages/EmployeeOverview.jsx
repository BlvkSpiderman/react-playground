import { useEmployeeContext } from "../context/EmployeeContext";
import maleProfile from '../images/maleProfile.jpg';
import femaleProfile from '../images/femaleProfile.jpg';
import { useNavigate } from "react-router-dom";

export const EmployeeOverview = () => {
    const { employees, selectedTeam, handleTeamSelectionChange, setSelectedMember, selectedMember } = useEmployeeContext();
    const navigate = useNavigate();

    /*
    function navigateToProfile() {
        let employeeName = selectedMember;
        navigate(`profile/`); 
    }

    const filterAndSetMember = new Promise((resolve) => {
            const teamMember = employees.filter((employee) => employee.id === id);
            resolve(teamMember[0]);
        });

        filterAndSetMember
        .then((member) => setSelectedMember(member))
        .then(() => {
            let employeeName = selectedMember;
            navigate(`profile/${employeeName.fullName}`);
        });
    
        async function again(id) {
        const teamMember =  employees.filter((employee) => employee.id === id);
        setSelectedMember(teamMember[0]);
        const employee = await selectedMember;
        navigate(`profile/${employee.fullName}`);
    }
    */
    
    function HandleEmployeeCardClick(id) { 
        const teamMember =  employees.filter((employee) => employee.id === id);
        setSelectedMember(teamMember[0]);
        navigate(`profile/${selectedMember.fullName}`);
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
                                <div id={employee.id} key={employee.id.toString()} className={(employee.teamName === selectedTeam? 'card m-2 standout': 'card m-2')} 
                                style={{cursor: 'pointer'}} onClick={() => HandleEmployeeCardClick(employee.id)} >                            
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
    // <Link className="nav-link" to='/'>Home</Link>
}