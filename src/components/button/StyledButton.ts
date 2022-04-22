import styled from 'styled-components';
import { SizeEnum, VariantEnum } from './ButtonModel';

interface ButtonProps {
  size?: SizeEnum;
  variant?: VariantEnum;
  width?: number;
}

export const StandardItemPrimaryButton = styled.button`
  color: black;
  border-color: transparent;
  border-radius: 0.3rem;
  padding: 0.1rem 2.5rem;
  background-color: orange;
  font-size: 0.8rem;
  font-weight: normal;
`;

const bgColourPicker = (primaryColor: string, variant?: VariantEnum) => {
  switch (variant) {
    case VariantEnum.Secondary:
      return 'white';
    default:
      return primaryColor;
  }
};

const borderColourPicker = (primaryColor: string, variant?: VariantEnum) => {
  switch (variant) {
    case VariantEnum.Secondary:
      return 'black';
    default:
      return primaryColor;
  }
};

const hoverColourPicker = (primaryColor: string, variant?: VariantEnum) => {
  switch (variant) {
    case VariantEnum.Secondary:
      return '#EEE';
    default:
      return primaryColor;
  }
};

export const ButtonVariation = styled.button<ButtonProps>`
  color: black;
  border: 1px solid
    ${(p) => borderColourPicker(p.theme.colors.highlightColor, p.variant)};
  border-radius: 0.3rem;
  padding: 1rem;
  line-height: 1rem;
  background-color: ${(p) =>
    bgColourPicker(p.theme.colors.highlightColor, p.variant)};
  width: ${(p) => (p.width ? `${p.width}px` : 'inherit')};
  &:hover {
    background-color: ${(p) =>
      hoverColourPicker(p.theme.colors.colourLink.primaryHover, p.variant)};
  }
`;

export const AddItemButton = styled.button`
  text-transform: capitalize;
  border: 0;
  background: #ba8585;
  color: #fff;
  padding: 7px 16px;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 20px;
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const ContactFormSubmitButton = styled(AddItemButton)`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
`;
export const ContactFormBackButton = styled.span`
  text-transform: capitalize;
  border: 0;
  background: #ba8585;
  color: #fff;
  padding: 8px 26px;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: #d4d1d1;
  color: #313131;
  cursor: pointer;
  font-size: 14px;
`;
