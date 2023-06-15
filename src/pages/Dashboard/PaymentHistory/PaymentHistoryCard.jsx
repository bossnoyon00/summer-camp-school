import React from 'react';

const PaymentHistoryCard = ({ payFile, index }) => {
    console.log(payFile);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Name</th>
                        <th>Class Price</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistoryCard;