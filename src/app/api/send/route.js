
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST()  {
  try {
    const data = await resend.emails.send({
      from: 'Kelvin <kellvin1@icloud.com>',
      to: ['kellvin1@icloud.com'],
      subject: 'Hello world',
      react: <>
      <p>Email Body</p>
      </>
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
