 import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from "../../errors/catchAsync";
import sendResponse from '../../middleware/sendResponse';
import { ManagementDepartmentService } from "./managementDepartment.service";
import { IManagementDepartment } from "./managementDepartments.interface";

const createManagementDepartment = catchAsync(async (req : Request, res: Response ) => { 
       const { ...ManagementDepartmentData } = req.body; 
       const result = await ManagementDepartmentService.createManagementDepartment(ManagementDepartmentData); 
       sendResponse<IManagementDepartment>(res, {
           statusCode: httpStatus.OK,
           success: true,
           message: "Management Department created successfully",
           data: result
       }) 
})  

const updateManagementDepartment = catchAsync(async (req : Request, res: Response ) => { 
      const {id} = req.params;
 
      const { updatedData } = req.body; 
       const result = await ManagementDepartmentService.updateManagementDepartment(id, updatedData); 
       
       sendResponse<IManagementDepartment>(res, {
           statusCode: httpStatus.OK,
           success: true,
           message: "update Management Department successfully",
           data: result
       }) 
})  

export const ManagementDepartmentController = {
  createManagementDepartment,
  updateManagementDepartment
}