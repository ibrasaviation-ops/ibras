'use server';

import { sendFlightBookingEmail } from '../../libs/nodemailer';

export const boookFlightAction = async (data: any) => {
  try {
    // console.log(data);
    await sendFlightBookingEmail(data);
    return {
      success: true,
      message: 'Successfully submitted',
    };
  } catch (error) {
    console.error('Flight booking Error:', error);

    return {
      success: false,
      status: 500,
      message: error instanceof Error ? error.message : 'Something went wrong.',
      data: null,
    };
  }
};
