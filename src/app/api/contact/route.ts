import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, company, businessSize, services } =
            body;

        // Validate required fields
        if (!firstName || !lastName || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        // Note: You'll need to configure SMTP credentials in environment variables
        // For Gmail, you'll need an app password or OAuth2
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Verify transporter configuration
        if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error('SMTP credentials not configured');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'celoeman@gmail.com',
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                ${
                    businessSize
                        ? `<p><strong>Business Size:</strong> ${businessSize}</p>`
                        : ''
                }
                ${
                    services
                        ? `<p><strong>Services Interested In:</strong><br/>${services.replace(
                              /\n/g,
                              '<br/>'
                          )}</p>`
                        : ''
                }
                <hr/>
                <p><em>This email was sent from the contact form on your website.</em></p>
            `,
            replyTo: email,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
