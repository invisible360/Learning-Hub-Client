import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthConext/AuthProvider';

const SignUp = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const fullName = form.fullname.value;
        const photourl = form.photourl.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('User Successfully Created!');
                setError('');
                handleProfile(fullName, photourl);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error('An Error Occured!');
            })
    }

    const handleProfile = (name, photourl) => {

        profileUpdate({
            displayName: name,
            photoURL: photourl
        })
            .then(() => {
                navigate(0);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error('An Error Occured!');
            })
    }

    return (
        <div>
            <div>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold my-3">Sign Up Here</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='fullname' placeholder="Full Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' required placeholder="Email" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered" />
                                </div>

                                <label className="label">
                                    <span className="label-text text-red-700">{error}</span>
                                </label>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">sign up</button>
                                </div>
                                <label className="label text-center">
                                    <p>Already have an account? <Link to='/login' className="btn btn-link">Login</Link></p>
                                </label>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;