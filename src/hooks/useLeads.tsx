import { useLocalStorage } from "./useLocalStorage";
import { v4 } from "uuid";
import { checksNewStatus } from "../utils/checksNewStatus";

export enum Status {
  PotentialClient = 10,
  ConfirmedData = 20,
  LeadAnalysis = 30,
}

interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  status?: number;
  opportunities: Array<string>;
}

export const useLead = () => {
  const [leads, setLeads] = useLocalStorage<Array<any>>("leads", []);

  const createLead = ({ name, phone, email, opportunities }: Lead) => {
    const newLead = {
      id: v4(),
      name,
      email,
      opportunities,
      phone,
      status: Status.PotentialClient,
    };

    const existUser = leads.find((e) => e.email === email);

    if (existUser) throw new Error("O lead já existe");

    setLeads((prevSate) => [...prevSate, newLead]);
  };

  const updateStatus = (id: string, status: number) => {
    const currentLeads = [...leads];
    const index = currentLeads.findIndex((lead) => lead.id === id);
    const lead = currentLeads[index];

    if (checksNewStatus(status, lead.status)) {
      currentLeads[index] = {
        ...lead,
        status,
      };

      setLeads(currentLeads);
    } else {
      throw new Error("Não foi possivel alterar o status");
    }
  };

  return {
    leads,
    createLead,
    updateStatus,
  };
};
