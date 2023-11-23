import { useState } from "react";

export const useShowPassword = (
  initialValue?: boolean
): [boolean, () => void] => {
  const [showPassword, setShowPassword] = useState<boolean>((): boolean => {
    try {
      return initialValue !== undefined ? initialValue : false;
    } catch (e) {
      return false;
    }
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return [showPassword, handleClickShowPassword];
};
