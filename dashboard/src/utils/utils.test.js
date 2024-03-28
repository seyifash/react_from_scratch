import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('getFullYear', () => {
    it('returns the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
        });
});
    
describe('getFooterCopy', () => {
    it('returns the correct string when the argument is true', () => {
    const isIndex = true;
    const expectedCopy = 'Holberton School';
    expect(getFooterCopy(isIndex)).toBe(expectedCopy);
    });

    it('returns the correct string when the argument is false', () => {
    const isIndex = false;
    const expectedCopy = 'Holberton School main dashboard';
    expect(getFooterCopy(isIndex)).toBe(expectedCopy);
    });
});
    
describe('getLatestNotification', () => {
    it('returns the latest notification string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});