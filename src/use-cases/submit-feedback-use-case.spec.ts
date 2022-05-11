// test('sum 2 + 2', () => {
//     expect(2 + 2).toBe(4)
// });
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {}},
            { sendMail: async () => {}}
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot:'data:image/png;base64, 89999992321457',
        })).resolves.not.toThrow();
     
    });

    it('should not be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {}},
            { sendMail: async () => {}}
        )

        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot:'data:image/png;base64, 89999992321457',
        })).rejects.toThrow();
    
    });

    it('should not be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {}},
            { sendMail: async () => {}}
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot:'data:image/png;base64, 89999992321457',
        })).rejects.toThrow();
     
    });
    
    it('should not be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {}},
            { sendMail: async () => {}}
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: '',
        })).rejects.toThrow();
     
    });
});