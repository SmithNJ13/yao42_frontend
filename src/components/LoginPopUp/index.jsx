import { useNavigate } from 'react-router-dom';
import "../PopUp/PopUp.css"

const LoginPopUp = ({ onClose }) => {
    const navigate = useNavigate();

    const handleBackgroundClick = (e) => {
        e.stopPropagation();
        onClose(false);
    };

    return (
        <div onClick={handleBackgroundClick} className="modalBackground">
            <div onClick={(e) => e.stopPropagation()} className="modalContainer">
                <div className="title">
                    <h1>Access Denied</h1>
                </div>
                <div className="body">
                    <p>You must be logged in to view your profile details!</p>
                </div>
                <div className="footer">
                    <button onClick={() => { 
                        onClose(false);
                        navigate('/login');
                    }}>
                        Login Here
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPopUp;
