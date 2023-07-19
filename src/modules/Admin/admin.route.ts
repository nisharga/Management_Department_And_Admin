import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AdminController } from './admin.controler';
import { AdminValidation } from './admin.validation';
 
const router = express.Router();

router.post(
    '/', 
    validateRequest(AdminValidation.createAdminZodSchema),
    AdminController.createAdmin
)
router.get('/:id', AdminController.getSingleAdmin);

router.delete('/delete/:id', AdminController.deleteSingleAdmin);


export const AdminRoutes = router;