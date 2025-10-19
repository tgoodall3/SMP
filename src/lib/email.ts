import nodemailer from "nodemailer";
import { env } from "@/lib/env";

type SendEmailOptions = {
  subject: string;
  html: string;
  text: string;
};

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  if (!env.smtpHost || !env.smtpUser || !env.smtpPass) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    secure: env.smtpPort === 465,
    auth: {
      user: env.smtpUser,
      pass: env.smtpPass,
    },
  });

  return transporter;
}

export async function sendEmail({ subject, html, text }: SendEmailOptions) {
  const tx = getTransporter();
  if (!tx) {
    console.info("[email] SMTP env vars missing. Logging message instead.", { subject, text });
    return { delivered: false };
  }

  await tx.sendMail({
    from: env.smtpFrom,
    to: env.email,
    subject,
    html,
    text,
  });

  return { delivered: true };
}

