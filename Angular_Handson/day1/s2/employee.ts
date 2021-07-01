import {Department as department} from './department';
import {Skill as skill} from './Skill';
export interface Employee extends department{
    id : number,
    name: string,
    salary: number,
    permanent: boolean,
    department_id: number
    department_name: string
    skillArray: skill[]
};