// __tests__/server.test.js
const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

const formData = {
    name: 'Test User',
    email: 'test@example.com',
    address: '123 Test St',
    deliveryMethod: 'courier',
    paymentMethod: 'online',
};

jest.mock('nodemailer', () => ({
    createTransport: () => ({
        sendMail: jest.fn((mailOptions, callback) => callback(null, { envelope: { from: 'test@example.com', to: [formData.email] } })),
    }),
}));

const submitFormRoute = require('../indexpost'); // імпорт вашого маршруту з indexpost.js
app.post('/submit-form', submitFormRoute);

describe('POST /submit-form', () => {
    test('should respond with a 200 status and confirmation message', async () => {
        const response = await request(app).post('/submit-form').send(formData);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Form submitted and emails sent' });
    });

    test('should send email with correct details', async () => {
        const response = await request(app).post('/submit-form').send(formData);
        expect(response.status).toBe(200);

        const sendMailMock = require('nodemailer').createTransport().sendMail;
        expect(sendMailMock).toHaveBeenCalled();
        expect(sendMailMock.mock.calls[0][0]).toMatchObject({
            from: process.env.EMAIL,
            to: formData.email,
            subject: 'Нове замовлення',
        });
    });
});
