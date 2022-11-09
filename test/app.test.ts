import supertest from 'supertest';
import app from '../src/app';

const api = supertest(app);

test('pinging works', async () => {
    const res = await api.get('/ping').expect(200);
    expect(res.body).toBe('pong');
});
