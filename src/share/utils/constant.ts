export const HTTP_TIMEZONE_TIME = "http://worldtimeapi.org/api/timezone";

export const SWAGGER_OPTIONS = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Api documentation Time is ",
      description: "Api documentacion for us",
      contact: {
        name: "Rafael Mayor Alberto",
        url: "https://www.linkedin.com/in/rafael-mayor-alberto",
      },
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      servers: ["http://localhost:3000"],
    },
  },
  basePath: "/",
  apis: ["./dist/modules/**/*.js"],
};
