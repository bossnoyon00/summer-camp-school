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
            <div className="hero overflow-y-auto mt-4 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 max-w-sm   outline outline-offset-2 outline-orange-300  bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="name"
                                    {...register('name', { required: true })}
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                                {errors.name && (
                                    <p className="text-red-600">Please enter a name.</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="name"
                                    {...register('photo', { required: true })}
                                    name="photo"
                                    placeholder="photo url"
                                    className="input input-bordered"
                                />
                                {errors.photo && (
                                    <p className="text-red-600">Please enter a photo url.</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && (
                                    <p className="text-red-600">Please enter a valid email.</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*[\W_]).*$/,
                                    })}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered relative"
                                />
                                <p onClick={() => setShowPassword(!showPassword)}>
                                    <small className=" absolute -mt-7 ml-48 md:ml-72">
                                        {showPassword ? (
                                            <FaEyeSlash></FaEyeSlash>
                                        ) : (
                                            <FaEye></FaEye>
                                        )}
                                    </small>
                                </p>
                                {errors.password?.types?.required && (
                                    <p className="text-red-600">Password is required.</p>
                                )}
                                {errors.password?.types?.minLength && (
                                    <p className="text-red-600">
                                        Password must be at least 6 characters long.
                                    </p>
                                )}
                                {errors.password?.types?.pattern && (
                                    <p className="text-red-600">
                                        Password must have at least one capital letter and a special character.
                                    </p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    name="confirmPassword"
                                    placeholder="confirm password"
                                    className="input input-bordered relative"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-600">Please confirm your password.</p>
                                )}
                            </div>
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
