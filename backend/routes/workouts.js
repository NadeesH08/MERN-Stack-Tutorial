const express = require('express');
const Workout = require('../models/Workout');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'Get all workouts' });
});

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({ msg: 'Get a single workout' });
});

// POST a new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a workout' });
});

module.exports = router;