"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const main_1 = require("../main");
//test suite for testing two get request endpoints
describe('post requests', () => {
    it('should authenticate user login', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest_1.default(main_1.app)
            .post('/login')
            .send({
            username: "tabby@gmail.com",
            password: "t001",
            role: "admin"
        });
        expect(res.statusCode).toBe(200);
    }));
});
//test suite for testing two get request endpoints
describe('get requests', () => {
    it('landing page route', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest_1.default(main_1.app)
            .get('/landingPage');
        expect(res.statusCode).toBe(200);
    }));
    it('search route', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest_1.default(main_1.app)
            .get('/search');
        expect(res.statusCode).toBe(200);
    }));
});
