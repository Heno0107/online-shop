import { useNavigate } from 'react-router-dom'

import './profile.css'

export function Profile ({authorizated , logOut}) {
    const navigate = useNavigate()

    return (
        <div className="profileFlex">
            <button className = 'goBack' onClick={() => navigate('/')}>Home</button>

            <div className="profile">
                <h2>@{authorizated.name}</h2>
                <h3>{authorizated.email}</h3>
                <button onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}