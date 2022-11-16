import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const ProfileHeader = () => {
    
    return (    
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1 style={{fontSize: '45px'}}>
                        Employee Profile
                    </h1>
                </div>
            </div>
        </header>
    );
}

export default ProfileHeader;