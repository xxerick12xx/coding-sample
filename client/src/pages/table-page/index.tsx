import TablePageComponent from "./table-page";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "./../../store/reducers/referral_list";

function TablePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/user`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(updateData(response));
      });
  }, [dispatch]);

  return <TablePageComponent />;
}

export default TablePage;
