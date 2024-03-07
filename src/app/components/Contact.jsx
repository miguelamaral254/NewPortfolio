/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
//icons
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formState, handleSubmit] = useForm("mnqyyylv");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.errors.length === 0) {
      try {
        await handleSubmit(event);

        if (formState.succeeded) {
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 6000);

          // Limpar os campos
          setEmail("");
          setName("");
          setMessage("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section className="py-16" id="contact">
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* text */}
            <div className="flex-1 flex justify-start items-center">
              <div>
                <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wider">
                  Get in touch
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 text-primary-500">
                  Let's work <br /> together!
                </h2>
                <div
                  className="
                flex
                text-[20px]
                gap-x-6
                max-w-max
                mx-auto
                lg:mx-0
                "
                >
                  <a
                    href="https://wa.me/5581996379353"
                    target="_blank"
                    className="btn hover:text-primary-300"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://github.com/miguelamaral254"
                    target="_blank"
                    className="btn hover:text-primary-300"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/miguel-augusto-8b7350217/"
                    className="btn hover:text-primary-300"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            {/* Form */}
            <motion.form
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              onSubmit={handleFormSubmit}
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            >
              {showMessage && <div className=" text-gradient mb-6"></div>}
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-cyan-500 transition-all"
                name="email"
                id="email"
                type="email"
                placeholder="Your email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={formState.errors}
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white  focus:border-cyan-500 transition-all"
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={formState.errors}
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-cyan-500 transition-all resize-none mb-12"
                id="message"
                name="message"
                type="text"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={formState.errors}
              />
              <button
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white btn ;"
                type="submit"
                disabled={formState.submitting}
              >
                Send message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
