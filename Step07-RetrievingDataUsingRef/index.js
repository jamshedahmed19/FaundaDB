const faunadb = require("faunadb");
require("dotenv").config();

const q = faunadb.query;

(async () => {
  if (process.env.FAUNDADB_SERVER_SECRET) {
    var client = new faunadb.Client({
      secret: process.env.FAUNDADB_SERVER_SECRET,
    });

    try {
      var result = await client.query(
        q.Get(q.Ref(q.Collection("blogPost"),"290787649761837575"))
      );
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
    }
  } else {
    console.log("Server Key Doesn't Exist");
  }
})();
