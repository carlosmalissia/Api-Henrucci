// this is for local connection to mongodb
const DBUser = "musicarlos72";
const DBPassword = "spiderman_1347";
const DBUrl = `mongodb+srv://${DBUser}:${DBPassword}@cluster0.rfksbwt.mongodb.net/`;
const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: DBUrl,
  henrucciEmail: "henrucciwebsite@gmail.com",
};

// this is mongodb Atlas connection
// const config = {
//   env: process.env.NODE_ENV,
//   port: process.env.PORT,
//   jwtSecret: process.env.JWT_SECRET,
//   mongoUri: process.env.mongoUri,
//   sgAPIKey: process.env.sgAPIKey,
//   herucciEmail: process.env.herucciEmail,
// };

export default config;
