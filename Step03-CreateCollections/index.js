const faunadb = require("faunadb");
require("dotenv").config();

const q = faunadb.query;
(async () => {
  if (process.env.FAUNDADB_SERVER_SECRET) {
    var client = new faunadb.Client({
      secret: process.env.FAUNDADB_SERVER_SECRET,
    });

    try {
      var result = await client.query(q.CreateCollection({ name: "blogPost" }));
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
    }
  }
})();
