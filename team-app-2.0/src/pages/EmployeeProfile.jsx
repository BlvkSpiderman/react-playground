import React from "react";
import { useEmployeeContext } from "../context/EmployeeContext";

const EmployeeProfile = () => {
   const { selectedMember } = useEmployeeContext();

    return <main>
        <h1>It worked: this is { selectedMember.fullName}</h1>
    </main>
}

export default EmployeeProfile;