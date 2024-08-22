import Section from '../components/Section';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';

// TODO: Implement the contact form using https://web3forms.com/#start
export function Contact({ about }) {
  if (!about) {
    return null;
  }

  return (
    <AnimatedPage>
      <div id="contact" className="section flex flex-col justify-center items-center w-full h-full py-20 px-6 xl:px-12 bg-white">
        <h2 className="text-4xl font-bold text-black">Contact</h2>
        <div className="section flex flex-col w-full h-max pt-20 gap-16 bg-white">
          <Section title="Contact me">
            <div className="flex flex-col gap-10 w-full max-w">
              <p>Email me at <span className="text-black">{about.email}</span> or message me here:</p>
              <form>
                {/* This is a working contact form. 
               Get your free access key from: https://web3forms.com/ */}
                <div className="flex flex-col gap-6">

                  <div className="flex flex-col xl:flex-row gap-6">
                    <div className="relative z-0 w-full">
                      <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
                    </div>
                    <div className="relative z-0 w-full">
                      <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
                    </div>
                  </div>

                  <div className="relative z-0 col-span-2">
                    <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
                  </div>
                  <div className="w-max">
                    <Button>Send Message</Button>
                  </div>
                </div>
              </form>

            </div>
          </Section>
        </div>
      </div>
    </AnimatedPage>
  );
}

