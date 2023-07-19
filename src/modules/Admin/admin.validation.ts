 
import { z } from "zod";
import { bloodGroup, gender } from "../management-departments/managementDepartments.interface";
 

    const createAdminZodSchema = z.object({
        body : z.object({
            id: z.string({
                required_error: "Unique ID is Required"
            }),
            name: z.object({
                firstName: z.string({
                    required_error: "first Name is Required"
                }), 
                lastName: z.string({
                    required_error: "LastName is Required"
                }),
                middleName: z.string({
                    required_error: "MiddleName is Required"
                }).optional(),
            }),
            dateOfBirth: z.string({
                required_error: "Date of Birth is Required"
            }),
            gender: z.enum([...gender] as [string, ...string[]], {
                required_error: "Gender is Required"
            }),
            bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
            email : z.string({
                required_error: "Email is Required"
            }).email(),
            contactNo: z.string({
                required_error: "Contact No is Required"
            }),
            emergencyContactNo: z.string({
                required_error: "Emmergency Contact No is Required"
            }), 
            presentAddress: z.string({
                required_error: "presenetAddress is Required"
            }),
            permanentAddress: z.string({
                required_error: "permanentAddress is Required"
            }), 
            managementDepartment: z.string({
                required_error: "managementDepartment is Required"
            }),
            designation: z.string({
                required_error: "designation is Required"
            }),
            profileImage: z.string({
                required_error: "profileImage is Required"
            })
        })
    })
        
export const AdminValidation = {
    createAdminZodSchema
}