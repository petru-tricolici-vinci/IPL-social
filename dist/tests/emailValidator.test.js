"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateEmail = require('../src/emailValidator');
describe('Email validation function', () => {
    it('should return false if email contains spaces', () => {
        expect(validateEmail('test @example.com')).toBe(false);
    });
    it('should return false if email has no @', () => {
        expect(validateEmail('testexample.com')).toBe(false);
    });
    it('should return false if email has no domain dot', () => {
        expect(validateEmail('test@examplecom')).toBe(false);
    });
    it('should return false if domain dot is the last character', () => {
        expect(validateEmail('test@example.')).toBe(false);
    });
    it('should return false if there is no text before @', () => {
        expect(validateEmail('@example.com')).toBe(false);
    });
    it('should return false if there is no text after @', () => {
        expect(validateEmail('test@')).toBe(false);
    });
    it('should return true for a valid email', () => {
        expect(validateEmail('test@example.com')).toBe(true);
    });
});
//# sourceMappingURL=emailValidator.test.js.map