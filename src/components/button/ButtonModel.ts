import {MouseEvent} from "react";

export enum VariantEnum {
    Primary,
    Secondary
}

export enum SizeEnum{
    Large,
    Small
} 

export interface ButtonProps  {
    children: React.ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>)=> void;
    size?: SizeEnum,
    variant?: VariantEnum,
    width?: number
}
