import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ManagementDepartmentController } from './managementDepartment.controller';
import { ManagementDepartmentValidation } from './managementDepartments.validation';
 
const router = express.Router();

router.post('/create-management', 
validateRequest(ManagementDepartmentValidation.createManagementDepartmentZodSchema),
ManagementDepartmentController.createManagementDepartment)

router.patch(
    '/update/:id',
    validateRequest(ManagementDepartmentValidation.updateManagementDepartmentZodSchema),
    ManagementDepartmentController.updateManagementDepartment
  );

  router.get('/', ManagementDepartmentController.getSinglelManagementDepartment);
export const ManagementDepartmentRoutes = router;