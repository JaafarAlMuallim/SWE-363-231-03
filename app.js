const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("/public/views/bootstraped.html", {
    root: __dirname,
    layout: false,
  });
});

app.get("/index", (req, res) => {
  res.sendFile("/public/views/index.html", { root: __dirname, layout: false });
});

app.get("/about", (req, res) => {
  res.sendFile("/public/views/about.html", { root: __dirname, layout: false });
});
app.get("/index-ar", (req, res) => {
  res.sendFile("/public/views/index-ar.html", {
    root: __dirname,
    layout: false,
  });
});
app.get("/blank", (req, res) => {
  res.sendFile("/public/views/blank.html", { root: __dirname, layout: false });
});

app.get("/contact-us", (req, res) => {
  res.sendFile("/public/views/contact-us.html", {
    root: __dirname,
    layout: false,
  });
});

app.post("/contact-us", (req, res) => {
  res.sendFile("/public/views/confirmation.html", {
    root: __dirname,
    layout: false,
  });
});

app.get("/figma", (req, res) => {
  res.sendFile("/public/views/figma.html", { root: __dirname, layout: false });
});

app.get("/random_profile", (req, res) => {
  res.sendFile("/public/views/random_profile.html", {
    root: __dirname,
    layout: false,
  });
});
app.get("/XO", (req, res) => {
  res.sendFile("/public/views/ttt.html", { root: __dirname, layout: false });
});

app.get("/complexForm", (req, res) => {
  res.sendFile("/public/views/complexForm.html", {
    root: __dirname,
    layout: false,
  });
});
app.post("/complexForm", (req, res) => {
  res.sendFile("/public/views/confirmation.html", {
    root: __dirname,
    layout: false,
  });
});
app.get("/new_table", (req, res) => {
  res.sendFile("/public/views/new_table.html", {
    root: __dirname,
    layout: false,
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
