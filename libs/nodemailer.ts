import nodemailer from 'nodemailer';
import path from 'path';
import ejs from 'ejs';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registrationEmailTemplatePath = path.join(__dirname, 'templates', 'RegistrationMail.ejs');
const sendSchadualMeetingTemplatePath = path.join(
  __dirname,
  'templates',
  'SchadualMeetingMail.ejs'
);

const flightBookingEmailTemplatePath = path.join(__dirname, 'templates', 'FlightBookingMail.ejs');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Course mapping for display
const getCourseLabel = (courseValue: string) => {
  const courseMap: Record<string, string> = {
    'private-pilot': 'Private Pilot License (PPL)',
    'commercial-pilot': 'Commercial Pilot License (CPL)',
    'instrument-rating': 'Instrument Rating (IR)',
    'multi-engine': 'Multi-Engine Rating (ME)',
    'flight-instructor': 'Certified Flight Instructor (CFI)',
    'airline-transport': 'Airline Transport Pilot License (ATPL)',
    dispatcher: 'Aircraft Dispatcher Course',
    'ground-school': 'Ground School Training',
  };
  return courseMap[courseValue] || courseValue;
};

// Generate student ID
const generateStudentId = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `IBR${timestamp}${random}`;
};

// Format date
const formatDate = () => {
  return new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Main function to send registration email
export const sendRegistrationEmail = async (data: any) => {
  try {
    const templateData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      course: getCourseLabel(data.course),
      authorization: data.authorization,
      studentId: generateStudentId(),
      submissionDate: formatDate(),
    };

    // Render EJS template
    const html = await ejs.renderFile(registrationEmailTemplatePath, templateData);

    const mailOptions = {
      from: `"Ibras Aviation Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `New Admission Registration - ${templateData.studentId}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);

    throw new Error('Failed to send registration email');
  }
};

export const sendSchadualMeetingEmail = async (data: any) => {
  try {
    const templateData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      selectedDate: data.selectedDate,
      selectedTime: data.selectedTime,
    };

    // Render EJS template
    const html = await ejs.renderFile(sendSchadualMeetingTemplatePath, templateData);

    const mailOptions = {
      from: `"Ibras Aviation Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `New meeting is Schadualed`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);

    throw new Error('Failed to send meeting email');
  }
};

export const sendFlightBookingEmail = async (data: any) => {
  try {
    const templateData = {
      customer: { ...data.customer },
      total: data.total,
      flightTitle: data.flightTitle,
    };

    // Render EJS template
    const html = await ejs.renderFile(flightBookingEmailTemplatePath, templateData);

    const mailOptions = {
      from: `"Ibras Aviation Admissions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `New flight is booked`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('Error sending email:', error);

    throw new Error('Failed to send booking email');
  }
};
