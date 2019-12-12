import express from "express";
import galaxiesService from "../services/GalaxiesService";
import starsService from "../services/StarsService";
import planetsService from "../services/PlanetsService";
export default class GalaxiesController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getStarsByGalaxyId)
      .get("/:id/stars", this.getPlanetsByStarId)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      let data = await galaxiesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await galaxiesService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getStarsByGalaxyId(req, res, next) {
    try {
      let data = await starsService.getStarsByGalaxyId(req.params.id.Types);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getPlanetsByStarId(req, res, next) {
    try {
      let data = await planetsService.getPlanetsByGalaxyId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await galaxiesService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
}
