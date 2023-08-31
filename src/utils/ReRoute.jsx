import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/AuthContext";

const ReRoute = () => {
    const navigate = useNavigate();
    const { isConnected } = useContext(UserContext);

    useEffect(() => {
        if (isConnected()) {
            navigate('/');
        }
    }, [navigate, isConnected]);

    return isConnected ? <Outlet /> : null;
};

export default ReRoute;