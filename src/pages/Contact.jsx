import { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';
import DynamicTitle from '../components/DynamicTitle';

const ContactFormStatus = {
  NONE: "",
  SENDING: "Sending....",
  SUCCESS: "Message Sent Successfully",
  ERROR: "Error"
}

export function Contact({ about }) {
  const [result, setResult] = useState(ContactFormStatus.NONE);
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "YOUR_ACCESS_KEY";

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(ContactFormStatus.SENDING);
    const formData = new FormData(event.target);

    formData.append("access_key", web3FormsAccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(ContactFormStatus.SUCCESS);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(ContactFormStatus.ERROR);
    }
  };

  if (!about) {
    return null;
  }

  return (
    <AnimatedPage>
      <DynamicTitle title="Loc Le - Contact" />
      <div id="contact" className="section flex flex-col justify-start items-center w-full h-full py-20 px-6 xl:px-12 bg-white">
        <h2 className="text-4xl font-bold text-black">Contact</h2>
        <div className="section flex flex-col w-full h-max pt-20 gap-16 bg-white">
          <Section title="Contact me">
            {
              result === ContactFormStatus.SENDING &&
              (
                <div className="p-6  md:mx-auto">
                  <img src="/images/waiting.svg" alt="Success" className="w-16 h-16 mx-auto mb-6" />
                  <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                      Seding...
                    </h3>
                    <p className="text-gray-600 my-2">
                      Please wait while we send your message.
                    </p>
                    <p>Thank you for your patience.</p>
                  </div>
                </div>
              )
            }
            {
              result === ContactFormStatus.SUCCESS &&
              (
                <div className="p-6  md:mx-auto">
                  <img src="/images/success.svg" alt="Success" className="w-16 h-16 mx-auto mb-6" />
                  <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 my-2">
                      Thank you for messaging me. I will get back to you soon.
                    </p>
                    <p> Have a great day!</p>
                  </div>
                </div>
              )
            }
            {
              result === ContactFormStatus.ERROR &&
              (
                <div className="p-6  md:mx-auto">
                  <img src="/images/error.svg" alt="Success" className="w-16 h-16 mx-auto mb-6" />
                  <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                      Oops! Something went wrong.
                    </h3>
                    <p className="text-gray-600 my-2">
                      An error occurred while sending your message.
                    </p>
                    <button onClick={() => setResult(ContactFormStatus.NONE)} className="text-blue-600 hover:underline">Try again</button>
                  </div>
                </div>
              )
            }
            {
              !result &&
              (
                <div className="flex flex-col gap-10 w-full max-w">
                  <p>Email me at <span className="text-black">{about.email}</span> or message me here:</p>
                  <form onSubmit={onSubmit}>
                    {/* This is a working contact form. 
               Get your free access key from: https://web3forms.com/ */}
                    <div className="flex flex-col gap-6">

                      <div className="flex flex-col xl:flex-row gap-6">
                        <div className="relative z-0 w-full">
                          <input required type="text" name="name" className="peer text-black block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                        </div>
                        <div className="relative z-0 w-full">
                          <input required type="text" name="email" className="peer text-black block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                        </div>
                      </div>

                      <div className="relative z-0 col-span-2">
                        <textarea required name="message" rows="5" className="peer text-black block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                      </div>
                      <div className="w-max">
                        <Button>Send Message</Button>
                      </div>
                    </div>
                  </form>
                </div>

              )
            }
          </Section>
        </div>
      </div>
    </AnimatedPage>
  );
}

