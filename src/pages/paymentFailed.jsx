function PaymentFailed() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Payment Failed ❌
        </h1>
        <p className="mt-2">
          Your payment was cancelled or failed. Please try again.
        </p>
      </div>
    </div>
  );
}

export default PaymentFailed;
