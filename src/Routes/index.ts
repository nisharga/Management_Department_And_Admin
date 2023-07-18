 import express from 'express';
import { ManagementDepartmentRoutes } from '../modules/management-departments/managementDepartments.route';
 

const router = express.Router();

const moduleRoutes = [
    {
        path: '/managment',
        route: ManagementDepartmentRoutes,
    }
]
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;