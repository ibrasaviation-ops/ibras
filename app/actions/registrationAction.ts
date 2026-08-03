'use server';

import { sendRegistrationEmail } from '../../libs/nodemailer';
import { FormData } from '../../libs/schema/registrationSchema';

export async function StudentRegistration(formData: FormData) {
  try {
    await sendRegistrationEmail(formData);

    return {
      success: true,
      message: 'Registration submitted successfully.',
      data: formData,
    };
  } catch (error) {
    console.error('StudentRegistration Error:', error);

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong.',
      data: null,
    };
  }
}
