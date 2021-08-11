const express = require("express");

const router = express.Router();

const Form = require("../models/form");

router.post("/", async (req, res) => {
  const form = new Form({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedData = await form.save();
    res.json(savedData);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const datas = await Form.find();
    res.json(datas);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Form.remove({ _id: req.params.postId });
    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:postId', async(req,res) => {
  try{
    const updatedPost = await Form.updateOne(
      {_id: req.params.postId},
      {$set: {name: req.body.name, phone: req.body.phone, email: req.body.email}}
    );
    res.json(updatedPost);  
  } catch (err) {
    res.json({message: err})
  }
});

module.exports = router;
