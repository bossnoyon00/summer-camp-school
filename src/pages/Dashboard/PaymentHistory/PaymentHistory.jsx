import React from 'react';
import usePayment from '../AllUser/hook/usePayment';
import PaymentHistoryCard from './PaymentHistoryCard';

const PaymentHistory = () => {

    const [paymentHistory] = usePayment();
    console.log(paymentHistory);
    return (
        <div>
            <h2 className='text-4xl text-red-900'>Payment History : {paymentHistory.length}</h2>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    Index
                                </th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Class Price</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                paymentHistory.map((payFile, index) =>
                                    <tr>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <img className='w-12 rounded' src={
                                                payFile.enrolledClassImage
                                            } alt="" />
                                        </td>
                                        <td>
                                            {payFile.enrolledClassName}
                                        </td>
                                        <td>
                                            {payFile.classPrice}
                                        </td>
                                        <td>
                                            {payFile.email}
                                        </td>
                                        <td>{payFile.status}</td>

                                    </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>


        </div>
    );
};

export default PaymentHistory;