import React, { ChangeEvent, FC, useState } from "react";
import { Body, Footer, Header, Modal } from "../../../components/Modal";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Checkbox } from "../../../components/Checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadsFormDto } from "./LeadsFormDto";
import { useLead } from "../../../hooks/useLeads";
import { toast } from "react-toastify";

interface Opportunity {
  label: string;
  isChecked: boolean;
}

const defaultOpportunities = [
  {
    label: "Todos",
    isChecked: true,
  },
  {
    label: "Honorários Sucumbenciais",
    isChecked: true,
  },
  {
    label: "Honorários Contratuais",
    isChecked: true,
  },
  {
    label: "Honorários Dativos",
    isChecked: true,
  },
  {
    label: "Crédito do Autor",
    isChecked: true,
  },
];
const defaultValues = {
  name: "",
  email: "",
  phone: "",
};

interface LeadsModalStateProps {
  isOpen: boolean;
  data?: any;
}
interface LeadsModalDispatchProps {
  onClose: () => void;
}

type LeadsModalProps = LeadsModalStateProps & LeadsModalDispatchProps;

const LeadsModal: FC<LeadsModalProps> = ({ data, isOpen, onClose }) => {
  const [opportunities, setOpportunities] =
    useState<Array<Opportunity>>(defaultOpportunities);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(leadsFormDto),
    criteriaMode: "all",
    mode: "all",
    defaultValues,
  });
  const { createLead } = useLead();

  const onChangeOpportunities = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === "Todos") {
      setOpportunities((prevState) =>
        prevState.map((e) => ({
          ...e,
          isChecked: checked,
        }))
      );
    } else {
      const currentOpportunities = [...opportunities];
      const index = currentOpportunities.findIndex((e) => e.label === name);

      currentOpportunities[index] = {
        ...currentOpportunities[index],
        isChecked: !currentOpportunities[index].isChecked,
      };

      setOpportunities(currentOpportunities);
    }
  };

  const onSubmit = handleSubmit(async ({ name, email, phone }: any) => {
    try {
      await createLead({
        name,
        email,
        phone,
        opportunities: opportunities.map((e) => e.label),
      });

      onClose();
      toast.success("Lead criado com sucesso");
    } catch (e) {
      const { message } = e as Error;

      toast.error(message);
    }
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>{data ? "Lead" : "Novo Lead"}</Header>
      <Body className="flex flex-col justify-start gap-16">
        <div className="flex flex-col gap-4">Dados do Lead</div>
        <div className="flex flex-col gap-4">
          <label>Nome Completo: *</label>
          <Input
            {...register("name")}
            className="w-full"
            type="text"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label>E-mail: *</label>
          <Input
            {...register("email")}
            className="w-full"
            type="email"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label>Telefone: *</label>
          <Input
            {...register("phone")}
            className="w-full"
            type="text"
            error={!!errors.phone}
            helperText={errors?.phone?.message}
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-8">
          <strong>Oportunidades</strong>
          <div className="flex flex-col gap-6">
            {opportunities.map((e, index) => (
              <Checkbox
                name={e.label}
                key={`${e.label}-${index}`}
                checked={e.isChecked}
                onChange={onChangeOpportunities}
              >
                {e.label}
              </Checkbox>
            ))}
          </div>
        </div>
      </Body>
      <Footer>
        <div className="w-full flex justify-end gap-6">
          <Button variant={"outlined"} color={"secondary"} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant={"contained"}
            color={"info"}
            onClick={async () => {
              await onSubmit();
            }}
          >
            Salvar
          </Button>
        </div>
      </Footer>
    </Modal>
  );
};

export default LeadsModal;
