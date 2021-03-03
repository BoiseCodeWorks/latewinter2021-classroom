import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StudentsService {
    async create(body) {
        return await dbContext.Students.create(body)
    }
    async find(query = {}) {
        return await dbContext.Students.find(query);
    }
    async findById(id) {
        // let student = await dbContext.Students.findById(id);
        // if (!student) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return student;
    }
}

export const studentsService = new StudentsService();