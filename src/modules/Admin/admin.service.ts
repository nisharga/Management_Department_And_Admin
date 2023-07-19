import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";



const createAdmin = async(payload:IAdmin): Promise<IAdmin | null> => {
    const id = "one";
    const data = {id, ...payload};
    const result = (await Admin.create(data)).populate('managementDepartment');
    return result;
}

const getSingleAdmin = async (id: string): Promise<IAdmin | null> => {
    const result = await Admin.findById(id).populate('managementDepartment');
    return result;
}

const deleteSingleAdmin = async (id: string): Promise<IAdmin | null> => {
    const result = await Admin.findByIdAndDelete(id).populate('managementDepartment');
    return result;
  };

export const AdminService = {
    createAdmin,
    getSingleAdmin,
    deleteSingleAdmin
}