import { Router } from 'express';
import { HTTPStatus } from '../types/httpStatus';
import { APIWrapper } from '../utils/APIWrapper';

export const monitor = Router();

monitor.get(
    '/',
    APIWrapper(async (req, res) => {
        res.status(HTTPStatus.OK).send({ state: 'This is a sample' });
    })
);
