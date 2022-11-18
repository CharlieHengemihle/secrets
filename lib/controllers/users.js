const { Router } = require('express');
const UserService = require('../services/UserService');
const User = require('../models/User');
const authenticate = require('../middleware/authenticate');

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  })
  .get('/me', [authenticate], (req, res) => {
    res.json(req.user);
  });
