"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/common/assets/images/logo.svg"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import useFooter from './use-footer.hook'
import loading from "@/common/assets/images/loading.svg"

export default function Footer() {
    const {
        handleSubmit,
        handleChange,
        isLoading,
        formErrors,
        initalValues
    } = useFooter();


    return (
        <footer className="bg-white mt-20 border-t border-[#e9e9e9]">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <Image src={logo} alt="Hanna Health" width={91} height={76} className="h-12 w-auto mb-4" />
                        <p className="text-[#777B8B] max-w-md mb-6 sm:text-base text-sm">
                            Hanna Health is all about proactive lifestyle management! Here you will find exercises and resources to
                            help you feel better, reduce pain and prevent injuries.
                        </p>
                        <div className='flex gap-3 flex-wrap text-[#777B8B]'>
                            <Link href="/">Home</Link>
                            <Link href="#">Employers</Link>
                            <Link href="#">Patients</Link>
                            <Link href="#">About Us</Link>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className='bg-[#F8F8F8] rounded-[12px] p-4'>
                    <h3 className="text-xl font-bold text-[#414651] mb-6">Get in Touch</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm text-[#5d606d] mb-1">
                                Full Name <span className="text-[#fd707b]">*</span>
                            </label>
                            <input
                                type="text"
                                name='fullName'
                                value={initalValues.fullName}
                                onChange={handleChange}
                                placeholder="Enter full name"
                                className="w-full p-2 border border-[#e9e9e9] rounded-md bg-white outline-0"
                            />
                            {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-[#5d606d] mb-1">
                                Email <span className="text-[#fd707b]">*</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                value={initalValues.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full p-2 border border-[#e9e9e9] rounded-md bg-white outline-0"
                            />
                            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="phoneNo" className="block text-sm text-[#5d606d] mb-1">
                                Phone Number <span className="text-[#fd707b]">*</span>
                            </label>
                            <input
                                type="tel"
                                onChange={handleChange}
                                name='phoneNo'
                                value={initalValues.phoneNo}
                                placeholder="Enter phone number"
                                className="w-full p-2 border border-[#e9e9e9] rounded-md bg-white outline-0"
                            />
                            {formErrors.phoneNo && <p className="text-red-500 text-sm mt-1">{formErrors.phoneNo}</p>}
                        </div>
                        </div>

                        <div>
                        <p className="block text-sm text-[#5d606d] mb-2">Preferred Contact Method?</p>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-2">
                                <input type="radio"  value="email"   onChange={handleChange} name="contactMethod" className="accent-[#036e49]" defaultChecked />
                                <span className="text-[#5d606d]">Email</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" value="phone call" onChange={handleChange} name="contactMethod" className="accent-[#036e49]" />
                                <span className="text-[#5d606d]">Phone Call</span>
                            </label>
                        </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm text-[#5d606d] mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                onChange={handleChange}
                                name='message'
                                value={initalValues.message}
                                rows={4}
                                placeholder="Write here..."
                                className="w-full p-2 border border-[#e9e9e9] rounded-md bg-white outline-0"
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-6 py-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-full bg-[#036e49] text-white hover:bg-[#025a3c] transition-colors"
                            >
                                {isLoading ? 
                                <span className='flex gap-2'><Image src={loading} width={24} height={24} alt="" /> Submit</span> : 
                                "Submit"}
                            </button>
                        </div>
                    </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-[#e9e9e9]">
                    <p className="text-sm text-[#5d606d] mb-4 md:mb-0">© 2024 Hana Health. All rights reserved.</p>
                    <div className="flex gap-4">
                    <Link href="https://www.instagram.com/HANNAHEALTHHUB/" target="_blank" className="text-[#FD707B] hover:text-[#fd707b]">
                        <FaInstagram className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/66651996/admin/dashboard/" target="_blank" className="text-[#FD707B] hover:text-[#0077b5]">
                        <FaLinkedin className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.youtube.com/@HannaHealth" target="_blank" className="text-[#FD707B] hover:text-[#ff0000]">
                        <FaYoutube className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.facebook.com/hannahealthub/" target="_blank" className="text-[#FD707B] hover:text-[#1877f2]">
                        <FaFacebook className="h-5 w-5" />
                    </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
