import React, { FC, useState } from "react";
import Button from "../../../components/Button";
import { Plus } from "lucide-react";
import LeadsModal from "./LeadsModal";

interface LeadsManagementStateProps {}
interface LeadsManagementDispatchProps {}

type LeadsManagementProps = LeadsManagementStateProps &
  LeadsManagementDispatchProps;

const LeadsManagement: FC<LeadsManagementProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = () => setIsOpen((isOpen) => !isOpen);
  return (
    <>
      <LeadsModal isOpen={isOpen} onClose={onToggle} />
      <div className="w-full">
        <Button
          className="float-right"
          variant="contained"
          color="info"
          icon={<Plus />}
          onClick={onToggle}
        >
          Novo Lead
        </Button>
      </div>
    </>
  );
};

export default LeadsManagement;
