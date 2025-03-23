import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

const ErrorMessage = ({ field }: { field: string }) => {
    const errors = useSelector((state: RootState) => state.errors.errors);
    return errors[field] ? <p className=" text-sm  text-red-500">{errors[field]}</p> : null;
};

export default ErrorMessage;