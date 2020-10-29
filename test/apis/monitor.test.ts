import supertest from 'supertest';

import app from '../../src/app';
import { HTTPStatus } from '../../src/types/httpStatus';

describe('Test the monitor API', () => {
    const request = supertest(app);

    test('GET /', async () => {
        const res = await request.get('/monitor');
        expect(res.status).toBe(HTTPStatus.OK);
        expect(res.body.state).toBe('This is a sample');
    });
});
