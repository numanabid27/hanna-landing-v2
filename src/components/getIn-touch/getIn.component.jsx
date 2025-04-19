"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import contactImg from "@/common/assets/images/contact.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import spinner from "@/common/assets/images/loading.svg"
import Link from "next/link";

export default function GetIn() {
  const [toggle, setToggle] = useState("patient");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const params = useSearchParams();
  const getParams = params.get("role");
  const getService = params.get("service");
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    condition: "",
    service:"",
    otherCondition: "",
    previousTreatment: false,
    insuranceProvider: "",
    description: "",
    companyName:"",
    workshopTopic:"",
    noOfParticipants:"",
    noOFEmployees:"",
    wellNessTopic:"",
    hearSource:""
  });

  const resetForm = () => {
    setInitialValues({
      fullName: "",
      phoneNo: "",
      email: "",
      condition: "",
      otherCondition: "",
      previousTreatment: false,
      insuranceProvider: "",
      description: "",
      companyName: "",
      workshopTopic: "",
      noOfParticipants: "",
      noOFEmployees: "",
      wellNessTopic: "",
      hearSource: "",
      service: "",
    });
    setIsError(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues({ ...initialValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(getParams === "employer" || getService){
        if(!initialValues.fullName || 
            !initialValues.email || 
            !initialValues.service 
        ){
            setIsError(true);
            return;
        }
        if (
            (initialValues.service === "Book a Workshop" || 
            initialValues.service === "Schedule a Screening") &&
            (!initialValues.companyName || !initialValues.phoneNo)
        ) {
            setIsError(true);
            return;
        }
    } 
    else if(toggle === "patient"){
        if(!initialValues.fullName || 
            !initialValues.email || 
            !initialValues.phoneNo
        ){
            setIsError(true);
            return;
        } 
    }  
    
    setIsLoading(true);
    const paylaod = {
      ...initialValues,
      previousTreatment: Boolean(initialValues.previousTreatment),
      role: getParams,
    };
    try {
      const response = await axios.post(
        "https://dev-api.hannahealthhub.com/inquiry",
        paylaod
      );
      if (response.status === 200) {
        resetForm()
        toast.success(response.data.message);
      }
    } catch (error) {
        toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  
  const handleToggle = (role) => {
    setToggle(role);
    resetForm();
    router.replace(`?role=${role}`); 
  };

  useEffect(() => {
    if (!getParams) {
      router.replace("?role=patient");
    }
  }, [getParams, router]);

  useEffect(() => {
    if (getService) {
      setInitialValues((prevValues) => ({
        ...prevValues,
        service:
          getService === "waitlist"
            ? "Join the Wellness Platform Waitlist"
            : getService === "screening"
            ? "Schedule a Screening"
            : getService === "workshop"
            ? "Book a Workshop"
            : "",
      }));
    }
  }, [getService]);

  return (
    <main className="flex-grow container mx-auto px-4 py-8 ">
      <div className="grid md:grid-cols-2 gap-8 pt-[80px]">
        {/* Contact Us Section */}
        <div className="relative rounded-lg overflow-hidden sm:h-[500px] h-[400px]">
          <Image src={contactImg} alt="Yoga pose" fill />
          <div className="absolute inset-0 bg-black/30 sm:px-8 px-2 lg:pt-8 pb-2 flex flex-col justify-end text-white">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              We'd love to hear from you! Whether you're curious about our
              programs, need assistance, or want to explore how Hanna Health can
              support your health journey, we're here to help.
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Alternative Contact Options:</h3>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <p className="text-sm font-medium">Email Us At:</p>
                  <Link href="mailto:admin@hannahealthhub.com" className="text-sm">admin@hannahealthhub.com</Link>
                </div>
                <div>
                  <p className="text-sm font-medium">Contact Us:</p>
                  <Link href="tel:(441) 732-7030" className="text-sm">(441) 732-7030</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch Form */}
        <div className="bg-white rounded-lg md:p-8 p-3 border border-[#e3e3e3]">
          <h2 className="lg:text-[40px] sm:text-3xl text-xl font-bold text-center mb-2">
            Get In Touch
          </h2>
          <p className="text-center text-[#475467] mb-6">
            Fill out the form to reach us.
          </p>

          <div className="w-fit flex justify-center items-center mb-6 mx-auto border border-[#E3E3E3] p-2 rounded-lg">

            <button
              onClick={() => {handleToggle("patient")}}
              className={`${
                getParams === "patient"
                  ? "bg-[#e6f1ed] text-[#036e49]"
                  : "bg-white text-[#717680]"
              } w-fit px-4 py-2  font-medium rounded-md cursor-pointer`}
            >
              Patient
            </button>
            <button
              onClick={() => {handleToggle("employer")}}
              className={`${
                getParams === "employer"
                  ? "bg-[#e6f1ed] text-[#036e49]"
                  : "bg-white text-[#717680]"
              } w-fit px-4 py-2  font-medium rounded-md cursor-pointer`}
            >
              Employer
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {getParams === "patient" ? (
                <>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-[#414651] mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={initialValues.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px]"
                    />
                    {
                        isError && initialValues.fullName === "" ? <span className="text-red-500 text-xs">Full name is required</span> : null
                    }
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#414651] mb-1"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={initialValues.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px]"
                      />
                      {
                        isError && (initialValues.email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(initialValues.email)) ? (
                          <span className="text-red-500 text-xs">
                            {initialValues.email === "" ? "Email is required" : "Invalid email format"}
                          </span>
                        ) : null
                      }
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#414651] mb-1"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNo"
                        value={initialValues.phoneNo}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px]"
                      />
                    {
                        isError && initialValues.phoneNo === "" ? <span className="text-red-500 text-xs">Phone No is required</span> : null
                    }
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="condition"
                      className="block text-sm font-medium text-[#414651] mb-1"
                    >
                      What Condition Are You Seeking Treatment For?
                    </label>
                    <div className="relative">
                      <select
                        name="condition"
                        value={initialValues.condition}
                        onChange={handleChange}
                        className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px] appearance-none"
                      >
                        <option value="">Select Condition</option>
                        {[
                          "Neck & Back Pain",
                          "Shoulder Pain",
                          "Elbow & Wrist Pain",
                          "Hip & Knee Pain",
                          "Ankle & Foot Pain",
                          "Other",
                        ].map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#414651]" />
                    </div>
                  </div>

                  {initialValues.condition === "Other" && (
                    <div>
                      <label
                        htmlFor="other"
                        className="block text-sm font-medium text-[#414651] mb-1"
                      >
                        Other
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="otherCondition"
                        value={initialValues.otherCondition}
                        placeholder="Write here"
                        className="w-full text-sm p-[13px] outline-0 border border-[#d9dadf] rounded-[12px]"
                      />
                    </div>
                  )}

                  <div>
                    <p className="block text-sm font-medium text-[#414651] mb-2">
                      Have You Had Any Previous Treatments?
                    </p>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <div className="relative flex items-center justify-center w-5 h-5 mr-2">
                          <input
                            type="radio"
                            name="previousTreatment"
                            value={initialValues.previousTreatment}
                            onChange={handleChange}
                            className="accent-[#036e49]"
                          />
                        </div>
                        Yes
                      </label>
                      <label className="flex items-center">
                        <div className="relative flex items-center justify-center w-5 h-5 mr-2">
                          <input
                            type="radio"
                            onChange={handleChange}
                            value={initialValues.previousTreatment}
                            name="previousTreatment"
                            className="accent-[#036e49]"
                            defaultChecked
                          />
                        </div>
                        No
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="provider"
                      className="block text-sm font-medium text-[#414651] mb-1"
                    >
                      Insurance Provider
                    </label>
                    <div className="relative">
                      <select
                        name="insuranceProvider"
                        value={initialValues.insuranceProvider}
                        onChange={handleChange}
                        className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px] appearance-none"
                      >
                        <option value="">Select Insurance provider</option>
                        {["BF&M", "Argus", "CG", "GEHI", "Private"].map(
                          (option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          )
                        )}
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#414651]" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="pain"
                      className="block text-sm font-medium text-[#414651] mb-1"
                    >
                      Tell Us About Your Pain or Concern
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="description"
                      value={initialValues.description}
                      rows={4}
                      placeholder="Describe what you're experiencing so we can help..."
                      className="w-full p-[13px] outline-0 border border-[#d9dadf] rounded-[12px]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                      disabled={isLoading}
                    className="w-full py-3 bg-[#036e49] mt-5 disabled:opacity-50 disabled:cursor-not-allowed rounded-[24px] cursor-pointer text-white font-medium hover:bg-[#025a3c] transition-colors"
                    >
                        {isLoading ? <span className="flex gap-2 justify-center"><Image src={spinner} width={24} height={24} alt="" /> Submit Inquiry</span> : "Submit Inquiry"}
                    </button>
                </>
              ) : (
                getParams === "employer" && (
                    <>
                        <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-[#414651] mb-1"
                            >
                            Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                            type="text"
                            name="fullName"
                            value={initialValues.fullName}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px]"
                            />
                            {
                                isError && initialValues.fullName === "" ? <span className="text-red-500 text-xs">Full name is required</span> : null
                            }
                        </div>
                        <div>
                            <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#414651] mb-1"
                            >
                            Email <span className="text-red-500">*</span>
                            </label>
                            <input
                            type="email"
                            name="email"
                            value={initialValues.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px]"
                            />
                           
                            {
                              isError && (initialValues.email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(initialValues.email)) ? (
                                <span className="text-red-500 text-xs">
                                  {initialValues.email === "" ? "Email is required" : "Invalid email format"}
                                </span>
                              ) : null
                            }
                        </div>
                        </div>

                        {/* service */}
                        <div>
                        <label
                            htmlFor="service"
                            className="block text-sm font-medium text-[#414651] mb-1"
                        >
                            Service <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                            name="service"
                            value={initialValues.service}
                            onChange={handleChange}
                            className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px] appearance-none"
                            >
                            <option value="">Select A Service</option>
                            {[
                                "Schedule a Screening",
                                "Book a Workshop",
                                "Join the Wellness Platform Waitlist",
                            ].map((option, index) => (
                                <option key={index} value={option}>
                                {option}
                                </option>
                            ))}
                            </select>
                            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#414651]" />
                           
                        </div>
                        {
                                isError && initialValues.service === "" ? <span className="text-red-500 text-xs">Service is required</span> : null
                            }
                        </div>
                        
                        
                        {
                            (initialValues.service === "Book a Workshop" || 
                            initialValues.service === "Schedule a Screening") && 
                            <>
                            {/* phone number */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-[#414651] mb-1"
                                    >
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNo"
                                        value={initialValues.phoneNo}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px]"
                                    />
                                    {
                                        isError && initialValues.phoneNo === "" ? <span className="text-red-500 text-xs">Phone No is required</span> : null
                                    }
                                    </div>
                                {/* company name  */}
                                <div>
                                    <label
                                        htmlFor="companyName"
                                        className="block text-sm font-medium text-[#414651] mb-1"
                                    >
                                            Company Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="companyName"
                                        value={initialValues.companyName}
                                        placeholder="Company Name"
                                        className="w-full text-sm p-[13px] outline-0 border border-[#d9dadf] rounded-[12px]"
                                    />
                                    {
                                        isError && initialValues.companyName === "" ? <span className="text-red-500 text-xs">Company Name is required</span> : null
                                    }
                                </div>
                            </>
                        
                            
                        }
                    
                        {
                            initialValues.service === "Book a Workshop" &&
                            <>
                                {/* workshop topic */}
                                <div>
                                    <label
                                        htmlFor="service"
                                        className="block text-sm font-medium text-[#414651] mb-1"
                                    >
                                        Workshop Topic
                                    </label>
                                    <div className="relative">
                                        <select
                                        name="workshopTopic"
                                        value={initialValues.workshopTopic}
                                        onChange={handleChange}
                                        className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px] appearance-none"
                                        >
                                        <option value="">Select A Workshop Topic</option>
                                        {[
                                            "Back Pain",
                                            "Neck Pain",
                                            "Ergonomics & Body Mechanics",
                                            "Move Well, Age Well",
                                            "Custom Workshop"
                                        ].map((option, index) => (
                                            <option key={index} value={option}>
                                            {option}
                                            </option>
                                        ))}
                                        </select>
                                        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#414651]" />
                                    </div>
                                </div>
                                <div>
                                    <label
                                    htmlFor="noOfParticipants"
                                    className="block text-sm font-medium text-[#414651] mb-1"
                                >
                                    Number of participants
                                
                                </label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name="noOfParticipants"
                                    value={initialValues.noOfParticipants}
                                    placeholder="Enter number of participants"
                                    className="w-full text-sm p-[13px] outline-0 border border-[#d9dadf] rounded-[12px]"
                                />
                                </div>  

                                {/* <div>
                                    <label
                                    htmlFor="customRequests"
                                    className="block text-sm font-medium text-[#414651] mb-1"
                                >
                                    Customer Request?
                                
                                </label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name="customRequests"
                                    value={initialValues.customRequests}
                                    placeholder="Write here.."
                                    className="w-full text-sm p-[13px] outline-0 border border-[#d9dadf] rounded-[12px]"
                                />
                                
                                </div>       */}
                            </> 
                        }
                        {
                            initialValues.service === "Schedule a Screening" &&
                            <div>
                                <label
                                    htmlFor="noOFEmployees"
                                    className="block text-sm font-medium text-[#414651] mb-1"
                                >
                                    Number of Employees to Screen  
                                </label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    name="noOFEmployees"
                                    value={initialValues.noOFEmployees}
                                    placeholder="Enter number of employees to screen"
                                    className="w-full text-sm p-[13px] outline-0 border border-[#d9dadf] rounded-[12px]"
                                />
                        
                            </div>
                        }
                        {
                            initialValues.service === "Join the Wellness Platform Waitlist" &&
                            <>
                                <div>
                                    <label
                                        htmlFor="service"
                                        className="block text-sm font-medium text-[#414651] mb-1"
                                    >
                                        Which wellness topics interest you?
                                    </label>
                                    <div className="relative">
                                        <select
                                        name="wellNessTopic"
                                        value={initialValues.wellNessTopic}
                                        onChange={handleChange}
                                        className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px] appearance-none"
                                        >
                                        <option value="">Select A Wellness Topic</option>
                                        {[
                                            "Personalized Video-Guided Movement Plans",
                                            "Mobility & Stretching",
                                            "Pilates & HIIT Workouts",
                                            "Pain Neuroscience Education",
                                            "Ergonomics & Movement Techniques"
                                        ].map((option, index) => (
                                            <option key={index} value={option}>
                                            {option}
                                            </option>
                                        ))}
                                        </select>
                                        <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#414651]" />
                                    </div>
                                </div>

                                <div>
                                <label
                                    htmlFor="service"
                                    className="block text-sm font-medium text-[#414651] mb-1"
                                >
                                How did you hear about us?
                                </label>
                                <div className="relative">
                                    <select
                                    name="hearSource"
                                    value={initialValues.hearSource}
                                    onChange={handleChange}
                                    className="w-full p-[13px] text-sm outline-0 border border-[#d9dadf] rounded-[12px] appearance-none"
                                    >
                                    <option value="">Select A Source</option>
                                    {[
                                        "Website",
                                        "Social Media",
                                        "Referral",
                                        "Others"
                                    ].map((option, index) => (
                                        <option key={index} value={option}>
                                        {option}
                                        </option>
                                    ))}
                                    </select>
                                    <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#414651]" />
                                </div>
                                </div>
                            </>
                        
                            
                        }
                            
                        
                        {
                            (initialValues.service === "Book a Workshop" || 
                            initialValues.service === "Schedule a Screening") &&
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-[#414651] mb-1"
                                >
                                    Additional Notes
                                </label>
                                <textarea
                                    onChange={handleChange}
                                    name="description"
                                    value={initialValues.description}
                                    rows={4}
                                    placeholder="Write here.."
                                    className="w-full p-[13px] outline-0 border border-[#d9dadf] rounded-[12px]"
                                ></textarea>
                            </div>
                        }

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-[#036e49] mt-5 disabled:opacity-50 disabled:cursor-not-allowed rounded-[24px] cursor-pointer text-white font-medium hover:bg-[#025a3c] transition-colors"
                        >
                            {isLoading ? <span className="flex gap-2 justify-center"><Image src={spinner} width={24} height={24} alt="" /> Submit Inquiry</span> : 
                              `${initialValues.service === "Book a Workshop" ? "Book a Workshop" : 
                                initialValues.service === "Schedule a Screening" ? "Schedule a Screening" : 
                                initialValues.service === "Join the Wellness Platform Waitlist" ? "Join the Wellness Platform Waitlist" : 
                                "Submit Inquiry"
                              }`
                            }
                        </button>

                        
                        
                    </>
                )
              )}
            </div>

            
          </form>
        </div>
      </div>
    </main>
  );
}
