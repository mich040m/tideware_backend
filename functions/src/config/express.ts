import cors = require("cors");

const allowedOrigins = [true];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};


export { corsOptions };