import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";

function MainLayout({ children }) {
    const router = useHistory();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [])

    return (
        <div className='MainLayout'>
            <Header></Header>
            {children}
        </div>
    );
}

export default MainLayout;