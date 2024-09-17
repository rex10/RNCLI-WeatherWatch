import { formatDate } from "../globalFunctions";

describe('formatDate', () => {
    it('should format the provided date correctly', () => {
        const inputDate = '2024-09-10T00:00:00Z';
        const formattedDate = formatDate(inputDate);
        expect(formattedDate).toBe('10/09/24');
    });

    it('should format the current date correctly when no date is provided', () => {
        const mockDate = new Date('2024-09-10T12:00:00Z');
        jest.useFakeTimers().setSystemTime(mockDate);

        const formattedDate = formatDate();
        expect(formattedDate).toBe('10/09/24');

        jest.useRealTimers();
    });

    it('should handle invalid date inputs gracefully', () => {
        const invalidDate = 'invalid-date';
        const formattedDate = formatDate(invalidDate);
        expect(formattedDate).toBe('Invalid Date');
    });

    it('should handle empty string input gracefully', () => {
        const formattedDate = formatDate('');
        expect(formattedDate).toMatch(/^\d{2}\/\d{2}\/\d{2}$/);
    });
});
