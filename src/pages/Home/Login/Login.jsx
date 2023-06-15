import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import GoogleSignIn from '../Home/GoogleSignIn/GoogleSignIn';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully.',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email or password.',
                });
            });
    };

    return (
        <div>
            
                            <p>
                                Don't have an account? <Link to="/signup">Signup</Link>
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

export default Login;
