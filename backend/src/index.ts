import app from './app';

const PORT = process.env.PORT || 5000;

// Only listen if not running in a serverless environment (Vercel)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;
