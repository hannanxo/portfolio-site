import React from "react";
const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#ececec] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/88b6fd57-a151-4270-98e8-13f938e385b4" className="flex flex-col md:max-w-[600px] max-w-[400px] w-full pt-10 md:mt-10">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#ff4655] text-[#0f1923] leading-normal ">Contact</p>
          <p className="md:py-4 mb-4 mt-4 text-[#768079]">Submit the form below or hit me up at my email - ah4hannan@gmail.com</p>
        </div>
        <input className="bg-[#e1e1e1] p-2 rounded-lg" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 bg-[#e1e1e1] rounded-lg" type="email" placeholder="Email" name="email" />
        <textarea className="bg-[#e1e1e1] p-2 rounded-lg" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-white border-2 border-[#ff4655] bg-[#ff4655] hover:bg-[#0f1923] hover:border-[#0f1923] px-4 py-3 my-8 mx-auto rounded-lg">Let's Chat</button>
      </form>
    </div>
  );
};

export default Contact;
