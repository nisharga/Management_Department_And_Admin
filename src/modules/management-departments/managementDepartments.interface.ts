import { Model } from 'mongoose';
 
export type IManagementDepartment = {
    title: string;
}

export type IManagementDepartmentModel = Model<IManagementDepartment, Record<string, unknown>
>

export type IManagementDepartmentFilters = {
    searchTerm?: string;
}


// constant 

export const gender = ['male', 'female']; 
export const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const studentSearchableFields = [
    'id','email', 'contactNo', 'name.firstName', 'name.middleName', 'name.lastName'
]
export const studentFilterableFields = [
    'searchTerm', 'id', 'bloodGroup', 'email', 'contactNo', 'emergencyContactNo'
]
// constant 