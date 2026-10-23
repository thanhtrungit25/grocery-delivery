import { KeyRoundIcon } from "lucide-react";

const OrderOTP = ({ order }: { order: any }) => {
  return (
    <div className="p-6 text-white rounded-2xl bg-linear-to-r from-app-green to-app-green-light">
      <div className="flex items-center gap-3 mb-3">
        <div className="size-10 rounded-full bg-white/15 flex-center">
          <KeyRoundIcon className="size-5" />
        </div>
        <div>
          <h3 className="font-semibold">Delivery OTP</h3>
          <p className="text-xs text-white/70">
            Share this with your delivery partner
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        {order.deliveryOtp.split("").map((digit: string, i: number) => (
          <div key={i} className="w-11 h-13 bg-white/15 font-mono font-bold flex-center text-2xl rounded-xl tracking-wider">
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderOTP;
