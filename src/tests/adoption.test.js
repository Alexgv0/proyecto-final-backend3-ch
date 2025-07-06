import request from 'supertest';
import { fakerES as faker } from '@faker-js/faker';
import app from './../app.js';

describe("Conjunto de pruebas funcionales para adoption", () => {

  describe('GET /api/adoptions', () => {
    it('Debería retornar una lista de adopciones con largo mayor o igual a 0', async () => {
      // Etapa de ejecución
      const res = await request(app).get('/api/adoptions');

      // Etapa de afirmaciones
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.payload).toBeInstanceOf(Array);
      expect(res.body.payload.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('GET /api/adoptions/:aid', () => {
    it('Debería retornar una adopción específica', async () => {
      const adoptionId = faker.database.mongodbObjectId();

      // Etapa de ejecución
      const res = await request(app).get(`/api/adoptions/${adoptionId}`);

      // Etapa de afirmaciones
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.payload).toBeDefined();
    });

    it('Debería retornar 404 si la adopción no existe', async () => {
      const invalidAdoptionId = 'invalidID';

      // Etapa de ejecución
      const res = await request(app).get(`/api/adoptions/${invalidAdoptionId}`);

      // Etapa de afirmaciones
      expect(res.status).toBe(404);
      expect(res.body.status).toBe('error');
      expect(res.body.error).toBe('Adoption not found');
    });
  });

  describe('POST /api/adoptions/:uid/:pid', () => {
    it('Debería crear una adopción correctamente', async () => {
      const userId = faker.database.mongodbObjectId();
      const petId = faker.database.mongodbObjectId();

      // Etapa de ejecución
      const res = await request(app).post(`/api/adoptions/${userId}/${petId}`);

      // Etapa de afirmaciones
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('success');
      expect(res.body.message).toBe('Pet adopted');
    });

    it('Debería retornar 404 si el usuario no existe', async () => {
      const invalidUserId = 'invalidUserId';
      const validPetId = faker.database.mongodbObjectId();

      // Etapa de ejecución
      const res = await request(app).post(`/api/adoptions/${invalidUserId}/${validPetId}`);

      // Etapa de afirmaciones
      expect(res.status).toBe(404);
      expect(res.body.status).toBe('error');
      expect(res.body.error).toBe('User not found');
    });

    it('Debería retornar 404 si la mascota no existe', async () => {
      const validUserId = faker.database.mongodbObjectId();
      const invalidPetId = 'invalidPetId';

      // Etapa de ejecución
      const res = await request(app).post(`/api/adoptions/${validUserId}/${invalidPetId}`);

      // Etapa de afirmaciones
      expect(res.status).toBe(404);
      expect(res.body.status).toBe('error');
      expect(res.body.error).toBe('Pet not found');
    });

    it('Debería retornar 400 si la mascota ya está adoptada', async () => {
      const validUserId = faker.database.mongodbObjectId();
      const adoptedPetId = faker.database.mongodbObjectId();

      // Etapa de ejecución
      const res = await request(app).post(`/api/adoptions/${validUserId}/${adoptedPetId}`);

      // Etapa de afirmaciones
      expect(res.status).toBe(400);
      expect(res.body.status).toBe('error');
      expect(res.body.error).toBe('Pet is already adopted');
    });
  });
});
