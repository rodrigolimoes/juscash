import React, { FC, useRef, DragEvent } from "react";
import { Status, useLead } from "../../../hooks/useLeads";
import { toast } from "react-toastify";
import { checksNewStatus } from "../../../utils/checksNewStatus";

const status = ["Dados confirmados", "Análise do lead", "Cliente em potencial"];
const positions = [
  Status.PotentialClient,
  Status.ConfirmedData,
  Status.LeadAnalysis,
];

interface LeadListStateProps {}
interface LeadListDispatchProps {}

type LeadListProps = LeadListStateProps & LeadListDispatchProps;

const LeadList: FC<LeadListProps> = () => {
  const { leads, updateStatus } = useLead();
  const itemOver = useRef<string | null>(null);

  const onDragOver = (
    event: DragEvent<HTMLTableCellElement>,
    { currentStatus, previousStatus }
  ) => {
    event.preventDefault();

    if (event.currentTarget.id !== itemOver?.current) {
      if (checksNewStatus(currentStatus, previousStatus)) {
        event.currentTarget.classList.add("drag-over-success");
      } else {
        event.currentTarget.classList.add("drag-over-error");
      }
    }
  };

  const onDragLeave = (event: DragEvent<HTMLTableCellElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove("drag-over-error");
    event.currentTarget.classList.remove("drag-over-success");
  };

  const onDragStart = (event: DragEvent<HTMLDivElement>, { item, id }) => {
    event.dataTransfer.setData("id", id);
    event.dataTransfer.effectAllowed = "move";
    itemOver.current = item;
  };

  const onDrop = async (
    event: DragEvent<HTMLTableCellElement>,
    { currentStatus, previousStatus }
  ) => {
    event.preventDefault();

    event.currentTarget?.classList?.remove("drag-over-error");
    event.currentTarget?.classList?.remove("drag-over-success");
    try {
      if (checksNewStatus(currentStatus, previousStatus)) {
        const id = event.dataTransfer.getData("id");
        await updateStatus(id, currentStatus);
        toast.success("Status atualizado com successo");
      }
    } catch (e) {
      const { message } = e as Error;
      toast.error(message);
    }
  };

  const rows = leads.map((lead) => {
    const columns = positions.map((status, i) => {
      const identifier = `${lead.id}-${i}`;
      return (
        <td
          className="text-center"
          key={identifier}
          id={identifier}
          onDragLeave={onDragLeave}
          onDragOver={(event) => {
            onDragOver(event, {
              currentStatus: status,
              previousStatus: lead.status,
            });
          }}
          onDrop={async (event) =>
            await onDrop(event, {
              currentStatus: status,
              previousStatus: lead.status,
            })
          }
        >
          <div
            className={"p-16"}
            id={identifier}
            draggable
            onDragStart={(event) => {
              onDragStart(event, { item: identifier, id: lead.id });
            }}
          >
            {status === lead.status ? lead.name : ""}
          </div>
        </td>
      );
    });

    return <tr key={`${lead.id}-${lead.name}`}>{columns}</tr>;
  });

  return (
    <div className="w-full m-t-12">
      <table className="w-full">
        <thead>
          <tr>
            {status.map((status) => (
              <th key={status} className="p-16">
                {status}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default LeadList;
