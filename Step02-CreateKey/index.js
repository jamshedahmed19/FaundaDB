const faunadb = require("faunadb");
require("dotenv").config();

q = faunadb.query;

(async () => {
  if (process.env.FAUNDADB_ADMIN_SECRET) {
    var client = new faunadb.Client({
      secret: process.env.FAUNDADB_ADMIN_SECRET,
    });

    try {
      var result = await client.query(
        q.CreateKey({
          database: q.Database("demo-gatsby-app"),
          role: "server",
        })
      );
      console.log("result: ", result);
    } catch (error) {
      console.error("error: ", error);
    }
  }
})();
