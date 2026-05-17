import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmPaymentAPI } from "../services/allAPIs";

function PaymentSuccess() {
  const { bugId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmPayment = async () => {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await confirmPaymentAPI(bugId, reqHeader);
        console.log(response);
        toast.success("Payment successful");
        setTimeout(() => {
          navigate(`/workspace/${bugId}`);
        }, 2000);
      } catch (err) {
        console.log(err);

        toast.error("Payment confirmation failed");
      }
    };

    confirmPayment();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful
        </h1>

        <p className="mt-2">Redirecting to workspace...</p>
      </div>
    </div>
  );
}

export default PaymentSuccess;
