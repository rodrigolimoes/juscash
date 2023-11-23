import { Status } from "../hooks/useLeads";

export const checksNewStatus = (
  currentStatus: number,
  previousStatus: number
) =>
  (previousStatus === Status.PotentialClient &&
    currentStatus === Status.ConfirmedData) ||
  (previousStatus === Status.ConfirmedData &&
    currentStatus === Status.LeadAnalysis);
