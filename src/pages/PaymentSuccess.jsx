import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { confirmPaymentAPI } from "../services/allAPIs";

function PaymentSuccess() {
//   const { bugId } = useParams();

//   useEffect(() => {
//     const token = sessionStorage.getItem("token");
//     const reqHeader = { Authorization: `Bearer ${token}` };
//     confirmPaymentAPI(bugId, reqHeader);
//   }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful 
        </h1>
        <p className="mt-2">Your payment has been processed successfully.</p>
      </div>
    </div>
  );
}

export default PaymentSuccess;
