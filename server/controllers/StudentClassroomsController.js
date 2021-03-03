import express from "express";
import BaseController from "../utils/BaseController";
import { studentClassroomsService } from "../services/StudentClassroomsService";

export class StudentClassroomsController extends BaseController {
    constructor() {
        super("api/studentclassrooms");
        this.router
            .post("", this.create)
            .delete("/:id", this.delete)
    }

    async create(req, res, next) {
        try {
            res.send(201, await studentClassroomsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await studentClassroomsService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
}
