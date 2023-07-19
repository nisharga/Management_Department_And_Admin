import { Schema, model } from "mongoose";
import { IManagementDepartment, IManagementDepartmentModel } from "./managementDepartments.interface";
 
const ManagementDepartmentSchema = new Schema<IManagementDepartment, IManagementDepartmentModel>(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {
       timestamps: true,
       toJSON: {
        virtuals: true
       } 
    }
)
export const ManagementDepartment = model<IManagementDepartment, IManagementDepartmentModel>('ManagementDepartment', ManagementDepartmentSchema)