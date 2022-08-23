const router = require('express').Router();
const apiRoutes = require('./api');

// API prefixes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Route incorrect!</h1>")
});

module.exports = router;