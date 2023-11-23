import React, { FC, useState } from "react";
import Button from "../../../components/Button";
import { Plus } from "lucide-react";
import LeadsModal from "./LeadsModal";
import { Lead, useLead } from "../../../hooks/useLeads";
import LeadList from "./LeadList";

interface LeadsManagementStateProps {}
interface LeadsManagementDispatchProps {}

type LeadsManagementProps = LeadsManagementStateProps &
  LeadsManagementDispatchProps;

const LeadsManagement: FC<LeadsManagementProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lead, setLead] = useState<Lead | undefined>(undefined);
  const { leads, createLead, updateStatus } = useLead();

  const onToggle = () => {
    setIsOpen((isOpen) => !isOpen);
    setLead(undefined);
  };

  const onViewLead = (lead: Lead) => {
    setIsOpen((prevState) => {
      const isOpen = !prevState;

      if (isOpen) {
        setLead(lead);
      } else {
        setLead(undefined);
      }

      return isOpen;
    });
  };

  return (
    <>
      <LeadsModal
        isOpen={isOpen}
        data={lead}
        onClose={onToggle}
        createLead={createLead}
      />
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
      <LeadList
        leads={leads}
        updateStatus={updateStatus}
        onViewLead={onViewLead}
      />
    </>
  );
};

export default LeadsManagement;
