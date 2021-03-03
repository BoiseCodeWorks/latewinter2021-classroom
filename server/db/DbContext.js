import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import ClassroomSchema from "../models/Classroom";
import AssignmentSchema from "../models/Assignment";
import StudentClassroomSchema from "../models/StudentClassroom";
import StudentSchema from "../models/Student";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Classrooms = mongoose.model("Classroom", ClassroomSchema)
  Assignments = mongoose.model("Assignment", AssignmentSchema)
  Students = mongoose.model("Student", StudentSchema)
  StudentClassrooms = mongoose.model("StudentClassroom", StudentClassroomSchema)
}

export const dbContext = new DbContext();
