// import userservice
const userservice = require("../services/userservice");
const express = require("express");
const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await userservice.findAll();
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const user = await userservice.findById(req.params.id);
  res.json(user);
});

router.post("/users", async (req, res) => {
  const user = await userservice.create(req.body);
  res.json(user);
});

router.put("/users/:id", async (req, res) => {
  const user = await userservice.update(req.params.id, req.body);
  res.json(user);
});

router.delete("/users/:id", async (req, res) => {
  const user = await userservice.delete(req.params.id);
  res.json(user);
});

module.exports = router;
