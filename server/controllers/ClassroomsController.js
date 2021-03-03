import express from "express";
import BaseController from "../utils/BaseController";
import { classroomsService } from "../services/ClassroomsService";
import { assignmentsService } from "../services/AssignmentsService";
import { studentClassroomsService } from "../services/StudentClassroomsService";

export class ClassroomsController extends BaseController {
  constructor() {
    super("api/classrooms");
    this.router
      .get("", this.getAll)
      .get("/:id/assignments", this.getAllAssignmentsByClassroomId)
      .get("/:id/students", this.getAllStudentsByClassroomId)
      .post("", this.create)
  }
  // NOTE query is always api/classrooms?name=bob
  // NOTE params is always api/classrooms/:id
  async getAll(req, res, next) {
    try {
      res.send(await classroomsService.find(req.query));
    } catch (error) {
      next(error);
    }
  }

  async getAllAssignmentsByClassroomId(req, res, next) {
    try {
      res.send(await assignmentsService.find({ classroom: req.params.id }));
    } catch (error) {
      next(error);
    }
  }
  async getAllStudentsByClassroomId(req, res, next) {
    try {
      res.send(await studentClassroomsService.find({ classroom: req.params.id }));
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(201, await classroomsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}
