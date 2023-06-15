import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const GoogleSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                fetch('https://summer-season.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data,'Hii bro ')
                        if (data.insertedId || data.existingUser) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Account Login Successfully By Google',
                            });
                            navigate('/', from, { replace: true });
                        }

                    }
                    )
            })
    }
    return (
        <>
            <button onClick={handleGoogleLogin} className="mx-auto mb-4 px-8 btn text-white ">Sign In With <FaGoogle className="text-primary "></FaGoogle> </button>
        </>
    );
};

export default GoogleSignIn;