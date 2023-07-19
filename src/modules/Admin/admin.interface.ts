import { Model, Types } from "mongoose";
import { IManagementDepartment } from "../management-departments/managementDepartments.interface";

type FullName = {
    firstName: string;
    lastName: string;
    middleName: string;
}

export type IAdmin = {
    id: string;
    name: FullName;
    dateOfBirth: string;
    gender: 'male' | 'female';
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
    managementDepartment: Types.ObjectId | IManagementDepartment;
    designation: string;
    profileImage: string;
}

export type AdminModel = Model<IAdmin>