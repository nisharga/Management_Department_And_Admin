import httpStatus from 'http-status';
import catchAsync from "../../errors/catchAsync";
import sendResponse from '../../middleware/sendResponse';
import { IAdmin } from "./admin.interface";
import { AdminService } from './admin.service';



const createAdmin = catchAsync(async (req : Request, res: Response ) => { 
    const { ...adminData } = req.body; 
    const result = await AdminService.createAdmin(adminData); 
    sendResponse<IAdmin>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin created successfully",
        data: result
    }) 
})
const getSingleAdmin = catchAsync(async (req : Request, res: Response ) => { 
    const { id } = req.params; 
    const result = await AdminService.getSingleAdmin(id); 

    sendResponse<IAdmin>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin Get successfully",
        data: result
    }) 
    
})

const deleteSingleAdmin = catchAsync(async (req : Request, res: Response ) => { 
    const { id } = req.params; 
    const result = await AdminService.deleteSingleAdmin(id); 

    sendResponse<IAdmin>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin Delete successfully",
        data: result
    }) 
    
})

export const AdminController = {
    createAdmin,
    getSingleAdmin,
    deleteSingleAdmin
}