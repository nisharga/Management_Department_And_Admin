import { z } from "zod";

const createManagementDepartmentZodSchema = z.object({
    body: z.object({ 
        title: z.string({
            required_error: 'Title is Required'
        }) 
    }),
  });
const updateManagementDepartmentZodSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: 'Title is Required For Updatting'
        })
    })
})

//   const updateFacultyZodSchema = z.object({
//     body: z.object({
//         title: z.string({
//             required_error: 'Title is Required'
//         })
//     }),
//   })

export const ManagementDepartmentValidation = {
    createManagementDepartmentZodSchema,
    updateManagementDepartmentZodSchema
}