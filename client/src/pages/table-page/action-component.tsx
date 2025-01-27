import { useState } from "react";
import { Trash, Pencil } from "lucide-react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { Button, Dialog } from "./../../ui";
import { useDispatch } from "react-redux";
import { updateData } from "./../../store/reducers/referral_list";

const DeleteModal = (props: { id: number }) => {
  const { id } = props;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async () => {
    await fetch(`${import.meta.env.VITE_API_ENDPOINT}/user/${id}`, {
      method: "DELETE",
    });

    toast.success("Referral deleted", {
      position: "top-center",
    });

    await fetch(`${import.meta.env.VITE_API_ENDPOINT}/user`)
      .then((response) => response.json())
      .then((response) => {
        dispatch(updateData(response));
      });

    setIsOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size="icon">
          <Trash fill="#111" color="#fff" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content className="sm:max-w-md">
        <Dialog.Header>
          <Dialog.Title>Delete Referral</Dialog.Title>
        </Dialog.Header>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <p>Are you sure you want to permanently delete this item?</p>
          </div>
        </div>
        <Dialog.Footer className="sm:justify-start gap-4">
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={handleClick}
          >
            Delete
          </Button>
          <Dialog.Close asChild>
            <Button type="button" variant="secondary" size="md">
              Close
            </Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

const ActionComponents = (props: { id: number }) => {
  const { id } = props;

  return (
    <>
      <Link to={`/create/${id}`}>
        <Button variant="ghost" size="icon">
          <Pencil fill="#111" color="#fff" />
        </Button>
      </Link>

      <DeleteModal id={id} />
    </>
  );
};

export default ActionComponents;
