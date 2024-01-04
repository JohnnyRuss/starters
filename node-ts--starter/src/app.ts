import path from "path";
import morgan from "morgan";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

import { AppError } from "./lib";
import { NODE_MODE } from "./config/env";
import { setHeaders, setCors } from "./middlewares/index";
import errorController from "./controllers/errorController";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const App = express();

App.set("view engine", "pug");
App.set("views", path.join(__dirname, "/views"));

App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(express.static(path.join(__dirname, "public")));

App.use(cookieParser());
App.use(setCors());
App.use(setHeaders);
App.use(compression());
App.use(hpp());
App.use(helmet());
App.use(mongoSanitize());

NODE_MODE === "DEV" && App.use(morgan("dev"));

App.use("/api/v1/auth", authRoutes);
App.use("/api/v1/users", userRoutes);

App.get("/views", async (req, res, next) => {
  res.status(200).render("welcome", {
    username: "",
    subHead: "",
  });
});

App.all("*", (req, _, next) => {
  next(new AppError(404, `can't find ${req.originalUrl} on this server`));
});

App.use(errorController);

export default App;
