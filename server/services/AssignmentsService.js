import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AssignmentsService {
    async create(body) {
        return await dbContext.Assignments.create(body)
    }
    async find(query = {}) {
        // return await dbContext.Assignments.find(query).populate("classroom", "-description");
        return await dbContext.Assignments.find(query).populate("classroom", "title description");
    }
    async findById(id) {
        // let classroom = await dbContext.Assignments.findById(id);
        // if (!classroom) {
        //   throw new BadRequest("Invalid Id");
        // }
        // return classroom;
    }
}

export const assignmentsService = new AssignmentsService();