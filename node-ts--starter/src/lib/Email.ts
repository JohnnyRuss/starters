import {
  NODE_MODE,
  MAILTRAP_HOST,
  MAILTRAP_PORT,
  MAILTRAP_USERNAME,
  MAILTRAP_PASSWORD,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_SERVICE,
  EMAIL_USERNAME,
  EMAIL_PASSWORD,
} from "../config/env";
import {
  SendForgotPasswordPinArgsT,
  SendWelcomeArgsT,
} from "../types/lib/email.types";
import nodemailer, { Transporter } from "nodemailer";
import pug from "pug";
import path from "path";

export class Email {
  MAILER_SERVICE: string = "";
  MAILER_HOST: string = "";
  MAILER_PORT: number = NaN;
  MAILER_USERNAME: string = "";
  MAILER_PASSWORD: string = "";
  SECURE: boolean = false;
  IS_PROD: boolean = false;

  constructor() {
    const IS_PROD = NODE_MODE === "PROD";

    this.IS_PROD = IS_PROD;
    this.MAILER_HOST = IS_PROD ? EMAIL_HOST : MAILTRAP_HOST;
    this.MAILER_PORT = IS_PROD ? +EMAIL_PORT : +MAILTRAP_PORT;
    this.MAILER_USERNAME = IS_PROD ? EMAIL_USERNAME : MAILTRAP_USERNAME;
    this.MAILER_PASSWORD = IS_PROD ? EMAIL_PASSWORD : MAILTRAP_PASSWORD;
    this.SECURE = IS_PROD ? true : false;

    if (IS_PROD) this.MAILER_SERVICE = EMAIL_SERVICE;
  }

  transporter(): Transporter {
    const transportConfig: any = {
      host: this.MAILER_HOST!,
      port: this.MAILER_PORT,
      secure: this.SECURE,
      auth: {
        user: this.MAILER_USERNAME,
        pass: this.MAILER_PASSWORD,
      },
    };

    if (this.IS_PROD) transportConfig.service = EMAIL_SERVICE;

    return nodemailer.createTransport(transportConfig);
  }

  async sendWelcome(args: SendWelcomeArgsT) {
    try {
      await this.transporter().sendMail({
        from: "<APP>",
        to: args.to,
        subject: "Welcome to <APP>",
        html: pug.renderFile(this.generateDirPath("welcome"), {
          username: this.generateUppercaseUsername(args.username),
          subHead: `Dear ${this.generateUppercaseUsername(
            args.username
          )} Welcome to <APP>! We're thrilled to have you on board. Thank you for choosing us.`,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async sendDeleteAccount(args: SendWelcomeArgsT) {
    try {
      await this.transporter().sendMail({
        from: "<APP>",
        to: args.to,
        subject: "<APP> Account Deletion Confirmation",
        html: pug.renderFile(this.generateDirPath("deleteAccount"), {
          username: this.generateUppercaseUsername(args.username),
          subHead: `Account Deletion`,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async sendForgotPasswordPin(args: SendForgotPasswordPinArgsT) {
    try {
      await this.transporter().sendMail({
        from: "<APP>",
        to: args.to,
        subject: "<APP> Forgot Password",
        html: pug.renderFile(this.generateDirPath("forgotPassword"), {
          username: this.generateUppercaseUsername(args.username),
          pin: args.pin,
          subHead: "Forgot Password",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  // UTILS
  generateDirPath(filename: string) {
    return path.resolve(__dirname, "..", "views", `${filename}.pug`);
  }

  generateUppercaseUsername(username: string) {
    return username
      .split(" ")
      .map((fragment) =>
        fragment[0].toLocaleUpperCase().concat(fragment.slice(1))
      )
      .join(" ");
  }
}

export default new Email();
