const express = require('express')
const router = express.Router()



const { addCandidate, addMarks, getAverageMarksOfCandidate, getHighestScorer } = require('../controllers')


//ADD CANDIDATE
router.post('/addCandidate',addCandidate)


//ADD TEST MARKS
router.post('/addScore', addMarks)


//GET AVERAGE MARKS OF EACH CANDIDATE
router.get('/getAvgMarks', getAverageMarksOfCandidate)


//GET THE CANDIDATE WHO HAS SCORED HIGHEST MARK
router.get('/getHighScore', getHighestScorer)




module.exports = router