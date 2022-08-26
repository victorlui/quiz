import { Item, RadioButton, RadioButtonLabel } from "./styles";

interface RadioButtonProps {
  label: string;
  selected: string;
  handleSelectChange: (value: any) => void;
}

const Radio = ({ label, selected, handleSelectChange }: RadioButtonProps) => {
  return (
    <Item>
      <RadioButton
        name="radio"
        checked={selected === label}
        value={label}
        onChange={(event) => handleSelectChange(event)}
      />
      <RadioButtonLabel />
      <div>{label}</div>
    </Item>
  );
};

export default Radio;
