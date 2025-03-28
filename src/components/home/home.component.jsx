"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import onsite from "@/common/assets/images/onsite.png"
import wellnes from "@/common/assets/images/wellnes.png"
import workshop from "@/common/assets/images/workshop.png"
import Button from "@/common/components/button/button";
import patien1 from "@/common/assets/images/patient-1.png"
import patien2 from "@/common/assets/images/patient-2.png"
import insurance1 from "@/common/assets/images/insurance-1.png"
import insurance2 from "@/common/assets/images/insurance-2.png"
import insurance3 from "@/common/assets/images/insurance-3.png"
import insurance4 from "@/common/assets/images/insurance-4.png"
import CalendlyEmbed from "@/common/components/calendly/calendly.component";
import { useRouter } from "next/navigation";
import tick from "@/common/assets/images/tick.svg";
import hand from "@/common/assets/images/hand.svg"
import light from "@/common/assets/images/light.svg"
import calender from "@/common/assets/images/r-calender.svg"

export default function HomeComponent() {
  const accordionData = {
    companies:{
      tagLine:"SPECIALITY",
      title:"Corporate Wellness Solutions",
      desc:"We offer a range of services designed to improve employee well-being, reduce workplace pain, and boost productivity.",
      accordionDataList : [
        {
          id: 1,
          title: "On-Site Pain Screenings",
          content: {
            description:
              "Help employees prevent and manage pain through a brief physical assessment, personalized exercises, and follow-up support.",
            features: [
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "30-minute assessments",
                description: "To evaluate pain and movement restrictions",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Pre-screening questionnaire",
                description: "Before the visit to understand each employee's needs",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Personalized home exercise program",
                description: "Appropriate referral after the screening",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Follow-ups at 1, 2, and 4 weeks",
                description: "Track progress and adjust treatment if needed",
              },
              {
                icon: hand,
                iconBg: "#fdc794",
                iconColor: "#f9a671",
                title:
                  "Reduce time lost due to pain & improve workplace productivity",
                description: "",
                highlight: true,
              },
            ],
            image: onsite,
            buttonText: "Schedule a Screening",
            buttonUrl:"screening"
          },
        },
        {
          id: 2,
          title: "Workshops – Interactive & Educational",
          content: {
            description:
              "One-hour engaging, interactive in-person workshops with Q&A to empower employees to take control of their health.",
            features: [
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Back Pain",
                description: "Self-Treatment & Prevention Strategies",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Neck Pain",
                description: "Self-Treatment & Prevention Strategies",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Ergonomics & Body Mechanics",
                description: "Ergonomics & Body Mechanics for Holistic Well-being",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Move Well, Age Well",
                description: "Healthy movement habits for longevity",
              },
              {
                icon: light,
                iconBg: "#fdc794",
                iconColor: "#f9a671",
                title:
                  "Custom workshops available based on your company’s needs",
                description: "",
                highlight: true,
              },
            ],
            image: wellnes,
            buttonText: "Book a Workshop",
            buttonUrl:"workshop"
          },
        },
        {
          id: 3,
          title: "Wellness Video Platform",
          label: "Coming Soon",
          content: {
            description:
              "A powerful resource for companies looking to provide ongoing health support to employees.",
            features: [
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                description: "Personalized video-guided movement plans",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                description: "Mobility & stretching classes",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                description: "Pilates & HIIT workouts",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                description: "Pain neuroscience education",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                description: "Ergonomics & movement techniques",
              },
              {
                icon: calender,
                iconBg: "#fdc794",
                iconColor: "#f9a671",
                title:
                  "Launching in a few months - Stay ahead of workplace wellness!",
                description: "",
                highlight: true,
              },
            ],
            image: workshop,
            buttonText: "Join the Waitlist",
            buttonUrl:"waitlist"
          },
        },
      ]
    },
    patients:{
      tagLine:"SPECIALITY",
      title:"Physiotherapy for Patients",
      desc:"Personalized care to help you move better, feel stronger, and live pain-free—all from the comfort of your home.",
      accordionDataList : [
        {
          id: 1,
          title: "Why Choose Physiotherapy?",
          content: {
            description:
              "Physiotherapy helps restore movement, reduce pain, and prevent future injuries. Whether you're recovering from an injury or dealing with chronic pain, our approach is tailored to your needs.",
            features: [
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Pain relief",
                description: "Pain relief without medication",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Recover faster",
                description: "Recover faster from injuries or surgery",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Improve",
                description: "Improve mobility & flexibility",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Prevent",
                description: "Prevent future injuries with targeted exercises",
              },
              
            ],
            image: patien1,
            buttonText: "Schedule a Virtual Visit",
          },
        },
        {
          id: 2,
          title: "Conditions We Treat",
          content: {
            description:
              "We specialize in orthopedic and musculoskeletal conditions, including.",
            features: [
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Neck & Back Pain",
                description: "(Herniated discs, sciatica, muscle strain)",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Shoulder Pain",
                description: "(Rotator cuff injuries, frozen shoulder)",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Elbow & Wrist Pain",
                description: "(Tennis elbow, carpal tunnel)",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Hip & Knee Pain",
                description: "(Arthritis, meniscus injuries, post-surgery rehab)",
              },
              {
                icon: tick,
                iconBg: "#fff1f2",
                iconColor: "#fd707b",
                title: "Ankle & Foot Pain",
                description: "(Sprains, plantar fasciitis, Achilles tendon issues)",
              },
              {
                icon: calender,
                iconBg: "#fdc794",
                iconColor: "#f9a671",
                title:
                  "Not sure if physiotherapy is right for you? Book a consultation and let's discuss your needs.",
                description: "",
                highlight: true,
              },
            ],
            image: patien2,
            buttonText: "Schedule a Virtual Visit",
          },
        },
        
      ]
    }
  }
  

  const [openAccordion, setOpenAccordion] = useState(1);
  const [toggle, setToggle] = useState("Companies");
  const [data, setData] = useState(null);
  const router = useRouter();
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? 0 : id);
  };

  const toggleFeature = () => {
    if(toggle === "Companies"){
      setData(accordionData.companies)
    } else if(toggle === "Patients"){
      setData(accordionData.patients)
    }
  }
  useEffect(()=>{
    toggleFeature()
  }, [toggle])
  return (
    <>
      <div className="max-w-[1200px] mx-auto space-y-4 pt-[80px]">
        <div className="flex justify-center gap-2 mt-[75px] mb-[38px]">
          <Button 
            text="Companies" 
            className={`${toggle === "Companies" ? "bg-(--primary) text-white" : "bg-white text-(--primary)"} cursor-pointer bg-(--primary) !w-fit rounded-[24px] border border-(--primary)`} 
            onClick={()=>setToggle("Companies")}
          />
          <Button 
            text="Patients" 
            onClick={()=>setToggle("Patients")}
            className={`${toggle === "Patients" ? "bg-(--primary) text-white" : "bg-white text-(--primary)"} cursor-pointer  !w-fit rounded-[24px]  border border-(--primary)`} 
          />
        </div>
        <div className="text-center mb-11 max-w-[737px] mx-auto">
          <span className="block text-(--red) -[14px] font-medium pb-2 text-center">{data?.tagLine}</span>
          <h2 className="text-[#030303] font-semibold lg:text-[40px] sm:text-3xl text-xl text-center">{data?.title}</h2>
          <p className="text-center sm:text-base text-sm text-[#5D606D] pt-1">{data?.desc}</p>
        </div>
        {data?.accordionDataList?.map((accordion) => (
          <div
            key={accordion.id}
            className="border border-[#E9E9E9] rounded-[12px] overflow-hidden mb-[27px]"
          >
            <div
              className="flex justify-between items-center p-6 cursor-pointer bg-white"
              onClick={() => toggleAccordion(accordion.id)}
            >
              <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-base font-semibold text-[#030303] ">
                {accordion.title}
                {accordion.label && (
                  <span className="text-[#FD707B] lg:text-[28px] md:text-2xl text-base font-medium ml-2">
                    {accordion.label}
                  </span>
                )}
              </h2>
              <div className="w-[46px] h-[46px] flex items-center justify-center bg-[#F9FCFB] rounded-lg">
              {openAccordion === accordion.id ? (
                <FaChevronUp className="w-[20px] text-[#475467]" />
              ) : (
                <FaChevronDown  className="w-[20px] text-[#475467]" />
              )}
              </div>
            </div>

            {openAccordion === accordion.id && (
              <div className="p-6 pt-0">
                <p className="text-[#5d606d] sm:text-base text-sm mb-6">
                  {accordion.content.description}
                </p>

                {accordion.content.features.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="space-y-6 flex-1">
                      {accordion.content.features.map((feature, index) => (
                        <div key={index} className="flex gap-3">
                          <div
                            className={`h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0`}
                            
                          >
                            {/* <span style={{ color: feature.iconColor }}>
                              {feature.icon}
                            </span> */}
                            {feature.icon && <Image src={feature.icon} alt="Feature icon" width={20} height={20} /> }
                          </div>
                          <div>
                            <p
                              className={
                                feature.highlight
                                  ? `text-[#FD707B]`
                                  : "font-medium text-[#001225]"
                              }
                            >
                              {feature.title}
                            </p>
                            {feature.description && (
                              <p className="text-sm text-[#373940]">
                                {feature.description}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}

                      {accordion.content.buttonText && (
                        <button 
                          onClick={()=>router.push(`book-demo?role=employer&service=${accordion.content.buttonUrl}`)}
                          type="button" 
                          className="cursor-pointer mt-4 px-6 py-2 border border-(--primary) text-(--primary) rounded-full hover:bg-[#f9fcfb] transition-colors"
                        >
                          {accordion.content.buttonText}
                        </button>
                      )}
                    </div>

                    {accordion.content.image && (
                      <div className="flex-1">
                        <Image
                          src={accordion.content.image || "/placeholder.svg"}
                          alt="Service illustration"
                          width={500}
                          height={400}
                          className="rounded-lg w-full h-auto object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {
        toggle === "Patients" &&
        <>
          <div>
          <h2 className="text-[#030303] font-semibold lg:text-[40px] sm:text-2xl text-xl text-center pt-7">Insurance & Payment</h2>
          <p className="text-[#5D606D] text-center">We currently accept</p>
          <div className="flex flex-wrap justify-center lg:gap-[95px] gap-[30px] items-center my-7">
            <Image src={insurance1} alt=""  width={94} height={36} />
            <Image src={insurance2} alt=""  width={159} height={43} />
            <Image src={insurance3} alt=""  width={72} height={44} />
            <Image src={insurance4} alt="" width={56} height={83} />
          </div>
        </div>

          <div>
            <h2 className="text-[#030303] font-semibold lg:text-[40px] sm:text-2xl text-xl text-center pt-7">Book Your Virtual Session</h2>
            <p className="text-[#5D606D] text-center"> No Copay Required</p>
            <div className="calendly mt-3">
              <CalendlyEmbed url="https://calendly.com/admin-hannahealthhub/onehour" />
            </div>
          </div>
        </>
      }
    </>
  );
}
