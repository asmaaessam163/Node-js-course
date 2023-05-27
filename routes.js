const fs = require("fs");

const handleRoutes = (req, res) => {
  console.log({url: req.url, method: req.method});
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Hello frdsfkvnkjbom our first nodejs app</h1>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "GET") {
    fs.writeFileSync("message.text", "Handle Message");

    fs.writeFile("message.text", "Handle Message", () => {
      console.log("sdkfnlEND");
    });

    console.log("After");
  }

  if (req.url === "/users" && req.method === "GET") {
    //TODO: 1- get users data users.json
    return fs.readFile("users.json", (err, data) => {
      console.log({data});
      const parsedData = JSON.parse(data);
      console.log({parsedData});
      //TODO: 2- looping and listing users in web browser
      res.write(
        `<html><head><title>Users List</title></head><body><ul>${parsedData.map(
          (data) =>
            `<li>user name is ${data.name} nad his position is ${data.position}</li>`
        )}</ul><form method="GET" action="/create-user"><button type="submit">Create User</button></form></body></html>`
      );

      return res.end();
    });

    //TODO: 3- Add Button for creating user and redirect "/creat-user"
  }
  res.statusCode = 201;
  res.end();
};

module.exports = {
  handleRoutes,
};
