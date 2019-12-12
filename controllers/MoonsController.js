import express from "express";
import moonsService from "../services/MoonsService";

export default class MoonsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await moonsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await moonsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await moonsService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
