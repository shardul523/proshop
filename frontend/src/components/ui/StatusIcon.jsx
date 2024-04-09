import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function StatusIcon({ status }) {
  return (
    <div className="flex justify-center">
      {status === "success" && (
        <div className="text-green-500 font-medium">
          <AiOutlineCheck />
        </div>
      )}
      {status === "fail" && (
        <div className="text-red-500 font-medium">
          <AiOutlineClose />
        </div>
      )}
    </div>
  );
}
export default StatusIcon;
