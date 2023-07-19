import { Schema, model } from "mongoose";
import { bloodGroup, gender } from "../management-departments/managementDepartments.interface";
import { AdminModel, IAdmin } from "./admin.interface";


const studentSchema = new Schema<IAdmin, AdminModel>({
    id: {
        type: 'String',
        required: true,
        unique: true,
    },
    name: {
        type: {
            firstName: {
                type: 'String',
                required: true,
            },
            middleName: {
                type: 'String',
            },
            lastName: {
                type: 'String',
                required: true,
            }
        },
        required: true,
    },
    dateOfBirth: {
        type: String, 
    },
    gender: {
        type: String,
        enum: gender
    },
    bloodGroup: {
        type: String,
        enum: bloodGroup
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contactNo: {
        type: String,
        unique: true,
        required: true,
    },
    
    emergencyContactNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
    managementDepartment:{
        type: Schema.Types.ObjectId,
        ref: 'ManagementDepartment'
    },
    designation:{
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }
},
{  timestamps: true,
    toJSON: {
        virtuals: true
    }
 })
export const Admin = model<IAdmin, AdminModel>("Admin", studentSchema)
