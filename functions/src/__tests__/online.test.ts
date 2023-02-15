import 'jest';
import * as functions from 'firebase-functions-test';
import * as admin from 'firebase-admin';
import { webApi } from '../index';


const testEnv = functions({
    // databaseURL:'',
    // storageBucket: '',
    projectId: 'work-showcase-db'
}, './service-account.json');

// provide any third party api keys here
// testEnv.mockConfig();

// Test Express Functions
describe('Express Functions', () => {
    
    test('returns successful response with valid user', () => {
        const req = {
            body: {
                firstName: 'Oscar',
                lastName: 'Sanz',
                email: '123@123.com',
                employeeID: 123,
                companyID: 10,
                contactNo: '07123456'
            }
        }

        const res = {
            send: (response: any) => {
                expect(response.status).toEqual(200);
            }
        }

        webApi
    });
});