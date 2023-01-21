import { BaseButton, DisabledButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  disabled: "disabled",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.disabled]: DisabledButton,
  }[buttonType]);

const Button = ({ children, buttonType, isExcerciseEmpty, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isExcerciseEmpty} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
