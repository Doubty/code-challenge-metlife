export interface ICharacter {
    gender: string;
    img: string;
    _id: string;
    name: string;
    psiPowers: IPsiPower[];
  }
  
  export interface IPsiPower {
    description: string;
    img: string;
    _id: string;
    name: string;
  }