import express from "express";
import BaseController from "../utils/BaseController";
import { studentsService } from "../services/StudentsService";

export class StudentsController extends BaseController {
    constructor() {
        super("api/students");
        this.router
            .get("", this.getAll)
            .post("", this.create)
    }
    // NOTE query is always api/students?name=bob
    // NOTE params is always api/students/:id
    async getAll(req, res, next) {
        try {
            res.send(await studentsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            res.send(201, await studentsService.create(req.body));
        } catch (error) {
            next(error);
        }
    }
}
