import ProfileHeader from "./ProfileHeader";
import EmployeeProfile from "./EmployeeProfile";
import { useEffect } from "react";

const ProfilePage = () => {
    useEffect(() => {
        document.title = 'Employee Profile';        
    }, []);

    return (
        <>
            <ProfileHeader/>
            <EmployeeProfile/>
        </>
    )
}

export default ProfilePage;