'use server';

import { sendSchadualMeetingEmail } from '../../libs/nodemailer';

export const schadualMeeting = async (data: any) => {
  try {
    // console.log(data);
    await sendSchadualMeetingEmail(data);
    return { success: true, message: 'Successfully Booked meeting' };
  } catch (error) {
    console.error('Schadual Meeting Error:', error);

    return {
      success: false,
      status: 500,
      message: error instanceof Error ? error.message : 'Something went wrong.',
      data: null,
    };
  }
};
