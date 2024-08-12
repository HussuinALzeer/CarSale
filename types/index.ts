import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType:"button" | "submit" ,
    TextStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean,
    make?:string;
}

export interface SearchManufacturerProps {
    manuFacturere:string;
    setManuFacturere: (manuFacturere: string) => void
}

export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface FilterProps{
    manufacturers:string ,
    year: number,
    fuel:string,
    limit: number,
    model: string,
}

export interface OptionProps {
    title:string;
    value:string
}

export interface customfilterProps {
    title:string;
    options: OptionProps[],
}

export interface ShowMoreProps {
    pageNumber:number;
    isNext:boolean
}