import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../Home/provider/AuthProvider';
import GoogleSignIn from '../Home/Home/GoogleSignIn/GoogleSignIn';

const Signup = () => {



    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        criteriaMode: 'all',
    });

    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        if (data.password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match.',
            });
            return;
        }

        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                userUpdateProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photo };
                        fetch('https://summer-season.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(saveUser),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    navigate('/');
                                }
                            });
                    })
                    .catch((error) => console.log(error));
            });
    };

    return (
        <div>
            
                            <div className="form-control mt-6">
                                <input
                                    className="btn text-white bg-red-500 hover:bg-black"
                                    type="submit"
                                    value="signup"
                                />
                            </div>
                            <p>
                                Already Have an Account in PowerPlay Fusion Edge?{' '}
                                <Link to="/login">Login</Link>
                            </p>
                            <div className="divider mb-0">OR</div>
                        </form>
                        <GoogleSignIn></GoogleSignIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
