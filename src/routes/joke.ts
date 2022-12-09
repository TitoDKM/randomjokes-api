import express from 'express';
import { RowDataPacket } from 'mysql2';
import { db } from '../db';

const router = express.Router();

router.get('/', (req, res) => {
    db.query('SELECT * FROM jokes ORDER BY rand() LIMIT 1', (err, result) => {
        if(err) res.status(500).json({message: "Error while trying to get a random joke"});
        else res.status(200).json((<RowDataPacket> result)[0]);
    });
});

export default router;