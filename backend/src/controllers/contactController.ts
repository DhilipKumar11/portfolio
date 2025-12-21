import { Request, Response } from 'express';
import { z, ZodError } from 'zod';

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone is required'),
    subject: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
});

export const submitContact = async (req: Request, res: Response) => {
    try {
        const validatedData = contactSchema.parse(req.body);

        // Here you would typically save to DB or send email
        console.log('Contact Form Submission:', validatedData);

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        res.status(200).json({ message: 'Message received successfully', data: validatedData });
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({ errors: error.issues });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};
