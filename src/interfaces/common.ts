import { SortOrder } from "mongoose";

export type IGenericErrorMessage = {
    path: string | number
    message: string
}

export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessage: IGenericErrorMessage[]
}

export type IGenericResponse<T> = {
    meta: {
      page: number,
      limit: number,
      total: number,
    }
    data: T
}

 
export type IPaginationOptions = {
    page?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: 'asc' | 'desc',
}

export const managementDepartmentFilterableFields = [
    'searchTerm', 'title'
]

export const managementDepartmentSearchableFields = ['title'];


type IoptionResult = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: SortOrder;
}

// pagination 

type IOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: SortOrder;
}


const calculatePagination = (
    option: IOptions
): IoptionResult => {
    const page = Number(option.page || 1);
    const limit = Number(option.limit || 10);
    
    const skip = (page - 1) * limit

    const sortBy = option.sortBy || 'createAt';
    const sortOrder = option.sortOrder || 'asc';

    return{
        page,
        limit,
        skip,
        sortBy,
        sortOrder,
    }
}


export const paginationHelpers = {
    calculatePagination
}

// other
function pick<T extends Record<string, unknown>, K extends keyof T>(obj: T,
    keys: K[]): Partial<T> {
    const finalObj: Partial<T> = {};
    for (const key of keys) {
      if (obj && Object.hasOwnProperty.call(obj, key)) {
        finalObj[key] = obj[key];
      }
    }
    return finalObj;
  }
    
    export default pick;


    export const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder']


    export type IGenericResponse<T> = {
        meta: {
          page: number,
          limit: number,
          total: number,
        }
        data: T
    }