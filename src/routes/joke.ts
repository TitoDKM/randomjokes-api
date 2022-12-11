import express from 'express';
import { RowDataPacket } from 'mysql2';
import { db } from '../db';
import { Joke, Vote } from '../types';

const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM jokes ORDER BY rand() LIMIT 1', (err, result) => {
        if(err) res.status(500).json({message: "Error while trying to get a random joke"});
        else res.status(200).json((<RowDataPacket> result)[0] as Joke);
    });
});

// This logic would be complete with a check for duplicate votes and so more
router.post('/vote', (req, res) => {
    const voteInfo = req.body as Vote;
    
    let queryStr = 'UPDATE jokes SET likes = likes + 1 WHERE id = ' + voteInfo.joke_id;
    if(voteInfo.type === 'dislike')
        queryStr = 'UPDATE jokes SET dislikes = dislikes + 1 WHERE id = ' + voteInfo.joke_id;
    db.query(queryStr);

    db.query('SELECT * FROM jokes WHERE id = ' + voteInfo.joke_id, (err, result) => {
        if(err) res.status(500).json({message: "Error while trying to get joke after update"});
        else res.status(200).json((<RowDataPacket> result)[0] as Joke);
    });
});

export default router;