import { useLocalStorage } from "./useLocalStorage";
import { v4 } from "uuid";
import { checksNewStatus } from "../utils/checksNewStatus";
import { User } from "./useUser";

export enum Status {
  PotentialClient = 10,
  ConfirmedData = 20,
  LeadAnalysis = 30,
}

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  status?: number;
  userId?: string;
  opportunities: Array<string>;
}

export const useLead = () => {
  const [leads, setLeads] = useLocalStorage<Array<any>>("leads", []);
  const user: null | User = JSON.parse(
    window.localStorage.getItem("user") || ""
  );

  const createLead = ({ name, phone, email, opportunities }: Lead) => {
    const newLead = {
      id: v4(),
      name,
      email,
      opportunities,
      phone,
      userId: user ? user.id : undefined,
      status: Status.PotentialClient,
    };

    const existUser = leads.find(
      (e) => e.email === email && e.userId === user?.id
    );

    if (existUser) throw new Error("O lead já existe");

    setLeads((prevSate: Array<Lead>) => [...prevSate, newLead]);
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
    leads: leads.filter((lead) => lead.userId === user?.id),
    createLead,
    updateStatus,
  };
};
