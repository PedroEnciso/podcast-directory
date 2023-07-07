import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const MongoClient = mongodb.MongoClient;

const PORT = process.env.PORT || 8000;

MongoClient.connect(process.env.MOVIE_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  });

export default app;
