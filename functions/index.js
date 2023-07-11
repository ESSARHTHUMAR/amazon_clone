/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import { https } from "firebase-functions";
import express, { json } from "express";
import cors from "cors";
import { request, response } from "express";
const stripe = require("stripe")(
  "sk_test_51N7a5sSGmImoVJjJLu4195yNfF93NsKAAWEi6F2JMnkUWwBo6mhfurkgtETufRQlm4qNzw9q4coBZJbg3kYpYgla007uiP8PDy");

//API

//API config
const app = express();

//Middlewears
app.use(cors({ origin: true }));
app.use(json());

//API Routes
app.get('/', (request,response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment request received >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

export const api = https.onRequest(app);