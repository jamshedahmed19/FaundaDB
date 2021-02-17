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
        q.Create(q.Collection("blogPost"), {
          // always remember we can diff fields in data as its no sql database
          data: {
            title: "Test Blog 01",
            content: "First Entry, Hello World!!",
          },
        })
      );
      console.log("result: ", result);
    } catch (error) {
      console.log("error: ", error);
    }
  } else {
    console.log("Server Key Doesn't Exist");
  }
})();
