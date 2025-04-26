"use server";
import {Resend} from "resend";
import {validetaString , getErrorMessage} from "@/lib/utils";


const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail =  async (formData : FormData) => {
 const senderEmail = formData.get("senderEmail")
 const message = formData.get("message")

if (!validetaString(senderEmail , 500)){
  return {
    error: "Invalid sender Email"}
}

if (!validetaString(message , 1000)){
  return {
    error: "Invalid message"}
}
//  simple server side validation 

try {
  await resend.emails.send({
    from: 'Contact Me <onboarding@resend.dev>',
    to: 'kerodex224@gmail.com',
    subject: 'Message from contact form',
    reply_to : senderEmail as string,
    text : message as string,
    
  });
 } catch (error) {
 
      return {
        error : getErrorMessage (error)
      }
   } 
 }
