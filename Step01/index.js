const faunadb = require("faunadb");
require("dotenv").config();

const q = faunadb.query;

(async () => {
  if (process.env.FAUNDADB_ADMIN_SECRET) {
    var client = new faunadb.Client({
      secret: process.env.FAUNDADB_ADMIN_SECRET,
    });

    try {
      var result = await client.query(
        q.CreateDatabase({ name: "demo-gatsby-app" })
      );
      console.log("result: ", result);
    } catch (error) {
      console.error("error: ", error);
    }
  }
})();
