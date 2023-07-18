import { SortOrder } from "mongoose";
import { IGenericResponse, IPaginationOptions, managementDepartmentSearchableFields, paginationHelpers } from "../../interfaces/common";
import { IManagementDepartment, IManagementDepartmentFilters } from "./managementDepartments.interface";
import { ManagementDepartment } from "./managementDepartments.model";
 
const createManagementDepartment = async(payload: IManagementDepartment): Promise<IManagementDepartment | null> => {
    const result = await ManagementDepartment.create(payload);
    return result;
} 
const updateManagementDepartment = async(id: string, payload: Partial<IManagementDepartment>): Promise<IManagementDepartment | null> => {
    const result = await ManagementDepartment.findOneAndUpdate({_id: id}, payload, {new: true});
    return result;
} 
const getAllManagementDepartments = async(filters: IManagementDepartmentFilters, pagination: IPaginationOptions): Promise<IGenericResponse<IManagementDepartment[] | null>> => {
    const {searchTerm, ...filtersData} = filters;

    const andConditions=[]; 
    if(searchTerm){
        andConditions.push({
           $or: managementDepartmentSearchableFields.map(field => ({
             [field]: {
                $regex: searchTerm,
                $options: 'i',
              }
         }))
        })
    }

    if(Object.keys(filtersData).length){
        andConditions.push({
             $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
             }))
        })
    }

    const {page, limit, skip, sortBy, sortOrder} = paginationHelpers.calculatePagination(pagination)

    const sortConditions:{[key: string]: SortOrder} = {}

    if(sortBy && sortOrder){
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? {$and: andConditions} : {}


    const result = await ManagementDepartment.find(whereConditions).sort(sortConditions).skip(skip).limit(limit);
    const total = await ManagementDepartment.countDocuments()
     return {
             meta: {
                 page,
                 limit,
                 total,
             },
             data: result 
             }
} 

 
  
export const ManagementDepartmentService = {
    createManagementDepartment, 
    updateManagementDepartment,
    getAllManagementDepartments
}

 