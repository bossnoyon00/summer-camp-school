import { Link } from "react-router-dom";


const SectionExtra = () => {
    return (
        <div className='my-9'>
            <h2 className='text-amber-700 text-5xl text-center'>Some Enrolled User</h2>
            <div className='w-full grid md:grid-cols-3 mt-6 gap-5'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://plus.unsplash.com/premium_photo-1661270443125-4f5f9390f856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                        <p className='text-3xl text-primary'>Martial Master</p>
                        <p className='text-2xl'>Legal Instructor</p>
                        <div className="card-actions">
                            <Link to='class'> <button className="btn btn-primary">Full view</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://plus.unsplash.com/premium_photo-1661270443125-4f5f9390f856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                        <p className='text-3xl text-primary'>Martial Master</p>
                        <p className='text-2xl'>Legal Instructor</p>
                        <div className="card-actions">
                            <Link to='class'> <button className="btn btn-primary">Full view</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://plus.unsplash.com/premium_photo-1661270443125-4f5f9390f856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</h2>

                        <p className='text-3xl text-primary'>Martial Master</p>
                        <p className='text-2xl'>Legal Instructor</p>
                        <div className="card-actions">
                            <Link to='class'> <button className="btn btn-primary">Full view</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionExtra;