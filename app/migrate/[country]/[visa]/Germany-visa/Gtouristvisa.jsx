import React from "react";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
    return (
        <div
          style={{
            position: 'relative',
            padding: '10px',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            fontFamily:'Times New Roman',
            position: 'relative',
            overflow: 'hidden',
            marginTop:'-7%',
          }}
        >
          {/* ✅ NEW ADDED HEADING AT THE TOP */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>
              Germany Tourist Visa - <span style={{ color: 'orange' }}>VJC Overseas</span>
            </h2>
          </div>

          {/* ORIGINAL HEADING (kept unchanged as requested) */}
          <div style={{marginBottom: '40px' }}>
            <h3 className="text-2xl font-semibold text-black text-center">
              <Link href="/migrate/germany/tourist-visa">
                <span style={{ fontWeight: 'bold', color: 'black' }}>Germany Tourist Visa</span>
              </Link> - <span style={{ color: 'rgb(220, 4, 4)' }}>VJC Overseas</span>
            </h3>
          </div>
      
          <p style={{ marginBottom: '20px' }}>
            Germany, a country rich in history, culture, and natural beauty, attracts millions of travelers every year. Whether you're planning to visit historic castles, explore vibrant cities, or enjoy scenic landscapes, Germany offers a unique experience for every type of traveler.
          </p>
      
          <p style={{ marginBottom: '20px' }}>
            At <Link href="https://www.vjcoverseas.com/"><strong>VJC Overseas</strong></Link>, we specialize in providing professional visa assistance to help you obtain your Germany Tourist Visa quickly and efficiently. Our dedicated team ensures that your application process is smooth, hassle-free, and meets all the requirements set by the German authorities.
          </p>
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">Why Choose VJC Overseas for Your Germany Tourist Visa?</h3>

          <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
            {/* Image Section */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <Image
                src="/gtvimage.jpg"
                alt="Image description"
                width={500}
                height={300}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-70 object-contain shadow-lg rounded-lg"
                priority
                unoptimized
              />
            </div>
          
            <ul style={{marginBottom:'20px'}}>
              <li>
                <strong style={{ color: 'rgb(3, 60, 65)', fontWeight: 'bolder' }}>• Expert Guidance:</strong> Our experienced visa consultants ensure your application is complete and error-free.
              </li>
              <li>
                <strong style={{ color: 'rgb(3, 60, 65)' }}>• Personalized Service:</strong> Customized services to suit your specific travel needs.
              </li>
              <li>
                <strong style={{ color: 'rgb(3, 60, 65)' }}>• Quick and Reliable:</strong> Submit your visa application on time, avoiding unnecessary delays.
              </li>
              <li style={{marginBottom:'20px'}}>
                <strong style={{ color: 'rgb(3, 60, 65)' }}>• Comprehensive Support:</strong> From document verification to appointment scheduling and application submission.
              </li>
            </ul>
          </div>
      
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">What is a <Link href="https://www.vjcoverseas.com/schengen-visas/germany"><strong>Germany Tourist Visa</strong></Link>?</h3>
          <p style={{marginBottom:'20px'}}>
            A <Link href="/migrate/germany/tourist-visa"><strong>Germany Tourist Visa</strong></Link> (Schengen Visa Type C) allows you to visit Germany for tourism, sightseeing, or visiting friends and family. This short-stay visa is valid for up to 90 days within a 180-day period and permits travel to other Schengen Area countries.
          </p>
      
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">Requirements for a <Link href="https://www.vjcoverseas.com/schengen-visas/germany"><strong>Germany Visit Visa</strong></Link></h3>
          <ul style={{marginBottom:'20px'}}>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)', fontWeight: 'bolder' }}>• Completed Visa Application Form:</strong> Accurately filled and signed.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Valid Passport:</strong> At least three months beyond your planned stay with two blank pages.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Passport-sized Photographs:</strong> Recent color photos meeting Schengen visa requirements.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Travel Itinerary:</strong> Detailed travel plan including flight bookings and accommodation details.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Travel Insurance:</strong> Coverage of at least €30,000 for emergencies.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Proof of Financial Stability:</strong> Bank statements or sponsorship letters.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Cover Letter:</strong> Explaining the purpose and details of your visit.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Accommodation Proof:</strong> Hotel bookings or invitation letters.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Visa Fee:</strong> Payable during the application process.
            </li>
          </ul>
      
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl" style={{marginBottom:'20px'}}>The Germany Visa Application Process</h3>
          <ol>
            <li>• Consultation with VJC Overseas to assess your eligibility.</li>
            <li>• Guidance in preparing necessary documents.</li>
            <li>• Submission of the <Link href="https://www.vjcoverseas.com/schengen-visas/germany"><strong>Germany Visit Visa</strong></Link> application to the German Embassy or Consulate.</li>
            <li>• Assistance in preparing for the visa interview (if required).</li>
            <li>• Notification and collection of your approved visa.</li>
          </ol>
      
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">Travel to Germany – What to Expect</h3>
          <p>
            Germany offers diverse experiences depending on where you go. From Berlin’s rich history to Munich’s Bavarian charm, the Black Forest’s natural beauty, and Cologne’s stunning cathedral, there’s something for everyone.
          </p>

          <p style={{ marginTop: '20px' }}>
            Need more clarity about your travel options? Learn more about the <Link href="https://www.vjcoverseas.com/schengen-visas/germany"><strong>Germany Schengen Visa</strong></Link> for broader travel flexibility across Europe.
          </p>
      
          <h4 style={{marginBottom:'20px'}}>Contact VJC Overseas today and let us help you embark on your Germany adventure!</h4>
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
            Why Apply for Your Germany Tourist Visa with VJC Overseas?
          </h3>
          <ul style={{marginBottom:'20px'}}>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)', fontWeight: 'bolder' }}>• Ease and Convenience:</strong> Applying for a visa can often feel overwhelming, but we make it simple by providing clear, step-by-step guidance tailored to your needs.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Time-Saving:</strong> With VJC Overseas handling the details, you can focus on other parts of your trip, like planning your activities, exploring the best places to visit, and preparing for your journey.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Transparency:</strong> We ensure that all visa-related costs and processing times are communicated clearly, so there are no surprises along the way.
            </li>
            <li>
              <strong style={{ color: 'rgb(3, 60, 65)' }}>• Customer-Centric Approach:</strong> Your satisfaction is our priority. We offer ongoing support before, during, and after the application process, ensuring that you’re informed every step of the way.
            </li>
          </ul>

          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl">
            Let <Link href="https://www.vjcoverseas.com/"><strong>VJC Overseas</strong></Link> Be Your Travel Partner to Germany
          </h3>
          <p style={{ marginBottom: '20px' }}>
            Whether it’s your first time in Germany or your tenth, getting your Germany Tourist Visa shouldn’t be complicated. Trust VJC Overseas to take the stress out of the process and help you achieve your travel dreams.
          </p>
          <p>
            If you’re considering other migration options, we also provide guidance for those applying for the Germany Schengen Visa.
          </p>
          <p>
            Looking for expert help? Get in touch with the <Link href="https://www.vjcoverseas.com/"><strong>Best Visa Immigration Consultants</strong></Link> at VJC Overseas today.
          </p>
          <p>
            Contact us today for a consultation or to start your application process, and let us help you on your way to Germany!
          </p>
        </div>
      );
};

export default Content;
