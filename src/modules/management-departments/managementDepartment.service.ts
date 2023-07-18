import { IManagementDepartment } from "./managementDepartments.interface";
import { ManagementDepartment } from "./managementDepartments.model";
 
const createManagementDepartment = async(payload: IManagementDepartment): Promise<IManagementDepartment | null> => {
    const result = await ManagementDepartment.create(payload);
    return result;
} 
const updateManagementDepartment = async(id: string, payload: Partial<IManagementDepartment>): Promise<IManagementDepartment | null> => {
    const result = await ManagementDepartment.findOneAndUpdate({_id: id}, payload, {new: true});
    return result;
} 
  
export const ManagementDepartmentService = {
    createManagementDepartment, 
    updateManagementDepartment
}

 