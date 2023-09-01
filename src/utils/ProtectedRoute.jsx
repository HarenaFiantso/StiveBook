import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/AuthContext.jsx";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { isConnected } = useContext(UserContext);

    useEffect(() => {
        if (!isConnected()) {
            navigate('/login');
        }
    }, [navigate, isConnected]);

    return isConnected ? <Outlet /> : null;
};

export default ProtectedRoute;