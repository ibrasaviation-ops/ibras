'use server';

import { sendRegistrationEmail } from '../../libs/nodemailer';
import { FormData } from '../../libs/schema/registrationSchema';

export async function StudentRegistration(formData: FormData) {
  try {
    await sendRegistrationEmail(formData);

    return {
      success: true,
      status: 200,
      message: 'Registration submitted successfully.',
      data: formData,
    };
  } catch (error) {
    console.error('StudentRegistration Error:', error);

    return {
      success: false,
      status: 500,
      message: error instanceof Error ? error.message : 'Something went wrong.',
      data: null,
    };
  }
}
