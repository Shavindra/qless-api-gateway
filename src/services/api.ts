import { Request, Response } from 'express';

/**
 * GET /
 * API Home page.
 */
export let index = (req: Request, res: Response) => {
    res.json({ message: 'API WORKS!' });
};
