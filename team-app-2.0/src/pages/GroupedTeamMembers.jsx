import 'bootstrap/dist/css/bootstrap.min.css';
import { useEmployeeContext } from '../context/EmployeeContext';

export const GroupedTeamMembers = () => {
    const { groupedEmployees, setGroupedData, setTeam } = useEmployeeContext();

    function handleTeamClick(event) {
        var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id 
                                                                ? { ...groupedData, collapsed: !groupedData.collapsed } 
                                                                : groupedData);

            /**
             * {...groupedData, () => {
             *  
             * }}
             */
        
        setGroupedData(newGroupedData);
        setTeam(event.currentTarget.id);
    }

    return (
         <main>
            {groupedEmployees.map((item) => {
                return (
                    <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                            Team Name: {item.team}
                            </h4>
                        <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                        <hr />
                                {item.members.map((member) => {
                                    return (
                                    <div key={member.id} className="mt-2">
                                        <h5 className="card-title mt-2">
                                        <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                                        </h5>
                                        <p className="card-text text-dark mt-2">
                                        <b>Designation:</b> {member.designation}
                                        </p>
                                    </div>
                                    );
                                })}
                            </div>
                        <hr />
                    </div>
                );
            })
        }
        </main>
    )
}