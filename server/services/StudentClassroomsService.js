import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StudentClassroomsService {
    async delete(id) {
        return await dbContext.StudentClassrooms.findByIdAndDelete(id)
    }
    async create(body) {
        return await dbContext.StudentClassrooms.create(body)
    }
    async find(query = {}) {
        return await dbContext.StudentClassrooms.find(query).populate("student classroom");
    }
    async findById(id) {
        // let studentClassroom = await dbContext.StudentClassrooms.findById(id);
        // if (!studentClassroom) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return studentClassroom;
    }
}

export const studentClassroomsService = new StudentClassroomsService();