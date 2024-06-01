import { config } from "dotenv";
config();

export default {
  port: 3000,
  mongoDb_uri: "mongodb://localhost:27017/hotel-booking",
  accessTokenKey: process.env.AccessKey,
  refreshTokenKey: process.env.RefreshKey,
};
