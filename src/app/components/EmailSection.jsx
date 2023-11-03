/* eslint-disable react/no-unescaped-entities */
import React from "react";
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
            {''}
            I'm currently looking for new opportunities, my inbox is always open.
            Wether you have a question or just want to say hi, I'll try my best
            to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href='https://github.com/kelvinrosa1'>
            <Image src={GithubIcon} alt="Github Icon"/>
          </Link>
          <Link>
          <Image src={LinkedinIcon} alt="Linkedin Icon"/>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" type='email' className="text-white">Your Email</label>
          <input type="email" id="email" required placeholder=""/>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
