// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//        if (req.method !== 'POST') {
//               return res.status(405).json({ message: 'Method not allowed' });
//        }

//        const { fullName, email, phone, website, message } = req.body;

//        // Configure your email transporter
//        const transporter = nodemailer.createTransport({
//               service: 'taggbox', // or your email service
//               auth: {
//                      user: process.env.EMAIL_USER,
//                      pass: process.env.EMAIL_PASSWORD,
//               },
//        });

//        // Email content
//        const mailOptions = {
//               from: process.env.EMAIL_USER,
//               to: process.env.RECEIVING_EMAIL, // Your receiving email address
//               subject: `New Contact Form Submission from ${fullName}`,
//               html: `
//               <h2>New Contact Form Submission</h2>
//               <p><strong>Name:</strong> ${fullName}</p>
//               <p><strong>Email:</strong> ${email}</p>
//               <p><strong>Phone:</strong> ${phone}</p>
//               <p><strong>Website:</strong> ${website || 'Not provided'}</p>
//               <p><strong>Message:</strong></p>
//               <p>${message}</p>
//        `,
//        };

//        try {
//               await transporter.sendMail(mailOptions);
//               res.status(200).json({ message: 'Email sent successfully' });
//        } catch (error) {
//               console.error('Error sending email:', error);
//               res.status(500).json({ message: 'Error sending email' });
//        }
// }