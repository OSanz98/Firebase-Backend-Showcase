import * as functions from "firebase-functions";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { app } from './requestController';

const main = express();

main.use('/op', app)
main.use(bodyParser.json())
main.use(bodyParser.urlencoded({extended: false}))

export const webApi = functions.https.onRequest(main)
