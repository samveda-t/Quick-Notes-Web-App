const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Create Note
router.post("/", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all Notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Update Note
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Note
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
