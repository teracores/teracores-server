import { Router } from "express";
import { createForm } from "../controller/createFormController.js";

const formRoutes = Router();

formRoutes.route("/").post(createForm);

export default formRoutes;
