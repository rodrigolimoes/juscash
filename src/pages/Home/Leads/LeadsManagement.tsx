import React, { FC, useState } from "react";
import Button from "../../../components/Button";
import { Plus } from "lucide-react";
import LeadsModal from "./LeadsModal";
import { useLead } from "../../../hooks/useLeads";
import LeadList from "./LeadList";

interface LeadsManagementStateProps {}
interface LeadsManagementDispatchProps {}

type LeadsManagementProps = LeadsManagementStateProps &
  LeadsManagementDispatchProps;

const LeadsManagement: FC<LeadsManagementProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggle = () => setIsOpen((isOpen) => !isOpen);
  const { leads, createLead, updateStatus } = useLead();

  return (
    <>
      <LeadsModal isOpen={isOpen} onClose={onToggle} createLead={createLead} />
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
      <LeadList leads={leads} updateStatus={updateStatus} />
    </>
  );
};

export default LeadsManagement;
