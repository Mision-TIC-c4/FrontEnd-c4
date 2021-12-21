import React, { useEffect, useState } from 'react'
import Sidebar from 'components/Sidebar'
import { useNavigate, Outlet } from 'react-router-dom'


const PrivateLayout = () => {
    const navigate = useNavigate();
    //token const { setToken } = useAuth();
    //loading const [loadingAuth, setLoadingAuth] = useState(true);

    // const [refreshToken, { data: dataMutation, loading: loadingMutation }] =
    // useMutation(REFRESH_TOKEN);

    // useEffect(() => {
    //     refreshToken();
    // }, [refreshToken]);

    // useEffect(() => {
    //     if (dataMutation) {
    //     if (dataMutation.refreshToken.token) {
    //         setToken(dataMutation.refreshToken.token);
    //     } else {
    //         setToken(null);
    //         navigate('/auth/login');
    //     }
    //     setLoadingAuth(false);
    //     }
    // }, [dataMutation, setToken, loadingAuth, navigate]);

    // if (loadingMutation || loadingAuth) return <div>Loading...</div>;


    return (
        <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
            <Sidebar />
            <div className='flex w-full h-full'>
                <div className='w-full h-full  overflow-y-scroll'>

                    <Outlet />

                </div>
            </div>

        </div>
    )
}

export default PrivateLayout
