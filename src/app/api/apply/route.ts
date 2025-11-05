import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        // Extract form fields
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const linkedin = formData.get('linkedin');
        const portfolio = formData.get('portfolio');
        const coverLetter = formData.get('coverLetter');
        const jobTitle = formData.get('jobTitle');
        const jobId = formData.get('jobId');
        const resume = formData.get('resume') as File;

        // Validate required fields
        if (
            !firstName ||
            !lastName ||
            !email ||
            !phone ||
            !coverLetter ||
            !resume
        ) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate resume file
        if (resume.size > 10 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'Resume file too large (max 10MB)' },
                { status: 400 }
            );
        }

        // TODO: Implement your submission logic here
        // Examples:
        // - Send email with application details
        // - Save to database
        // - Upload resume to cloud storage
        // - Send notification to HR team

        // For now, just log the application
        console.log('Application received:', {
            jobTitle,
            jobId,
            firstName,
            lastName,
            email,
            phone,
            linkedin,
            portfolio,
            resumeFileName: resume.name,
            resumeSize: resume.size,
            coverLetterLength: coverLetter.length,
        });

        // Return success response
        return NextResponse.json(
            {
                message: 'Application submitted successfully',
                jobTitle,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json(
            { error: 'Failed to process application' },
            { status: 500 }
        );
    }
}
