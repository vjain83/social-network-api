const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

} = require('../../controllers/Thought-controller');

// Set up GET all and POST at /api/Thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/Thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

router.route('/:thoughtId/reactions/').post(addReaction).delete(removeReaction);


module.exports = router;