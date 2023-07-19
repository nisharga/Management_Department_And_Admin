 import express from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { ManagementDepartmentRoutes } from '../modules/management-departments/managementDepartments.route';
 

const router = express.Router();

const moduleRoutes = [
    {
        path: '/managment',
        route: ManagementDepartmentRoutes,
    },{
        path: '/admin',
        route: AdminRoutes,
    }
]
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;