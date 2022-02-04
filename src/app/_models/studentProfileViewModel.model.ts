import { Address } from ".";
import { User } from ".";
import { UserStudent } from "./userStudent.model";

export interface StudentProfileViewModel {
    User: User;
    UserStudent: UserStudent;
    Address: Address;
}