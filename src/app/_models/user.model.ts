import { Address } from "./address.model";
import { Department } from "./department.model";
import { Gender } from "./gender.model";
import { Role } from "./role.model";
import { UserGroup } from "./userGroup.model";

export interface User {
    Email: string;
    FirstName: string;
    LastName: string;
    MiddleName: string;
    DateOfBirth?: Date;
    GenderId: number;
    Gender: Gender;    
    RoleId: number;
    Role?: Role;
    UserGroupId: number;
    UserGroup?: UserGroup;
    DepartmentId: number;
    Department: Department;
    DesignationInCollege: string;
    Qualification: string;
    ExperienceInYears: number;
    ExperienceInMonths: number;
    DateOfJoining?: Date;
    LastSeen?: Date;
    CurrentAddressId?: number;
    CurrentAddress: Address;
    PermanentAddressId?: number;
    PermanentAddress: Address;
    AccountCreated?: Date;
    ImageURL?: string;
    RelationId?: number;
    LastSeenIP?: string;
}