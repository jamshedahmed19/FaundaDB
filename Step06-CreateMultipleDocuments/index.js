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
        q.Map(
          ["Test Blog 01", "Test Blog 02", "Test Blog 03"],
          q.Lambda(
            "post",
            q.Create(q.Collection("blogPost"), {
              data: {
                title: q.Var("post"),
              },
            })
          )
        )
      );
      console.log("result", result);
    } catch (error) {
      console.log("error: ", error);
    }
  } else {
    console.log("Server Key Doesn't Exist");
  }
})();
