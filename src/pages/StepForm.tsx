"use client";
// Indicates that this code runs on the client side
import React, { FormEvent, useState } from 'react';
import FirstStep from "@/components/common/Step_01";
import SecondStep from "@/components/common/Step_02";
import StepLoader from '@/components/common/StepLoader';
import FinalStep from '@/components/common/FinalStep';
import Link from 'next/link';

const StepFormPage = () => {
  const [stepCount, setStepCount] = useState(1); // State to keep track of the current step
  console.log(stepCount);

  // Handler for form submission
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Extract form data from the event
    const formData = new FormData(event.target as HTMLFormElement);

    // Get element values from form data
    const user_name = formData.get("user_name");
    const user_email = formData.get("user_email");
    const user_password = formData.get("user_password");
    const user_phone = formData.get("user_phone");

    // Check if all fields are valid
    if (user_name && user_email && user_phone) {
      console.log("User Name: " + user_name);
      console.log("User Email: " + user_email);
      console.log("User Password: " + user_password);
      console.log("User Phone: " + user_phone);

      // Move to the next step
      setStepCount(stepCount + 1);
    }
  }

  return (
    <div>
      {/* Step loader component to indicate the current step */}
      <div className='bg-slate-50'>
        {/* Navigation section */}
        <section className='w-full flex justify-between items-center font-para font-semibold p-3 pb-6 px-8'>
          {/* Go Back button */}
          <button
            onClick={() => setStepCount(stepCount - 1)}
            className='disabled:text-slate-400 disabled:cursor-not-allowed hover:cursor-pointer font-medium'
            disabled={stepCount === 1}
          >
            <span className='text-xl font-extrabold'>←&nbsp;</span> Go Back
          </button>
          {/* Exit link */}
          <Link href={"/"}>
            Exit&nbsp; ✕
          </Link>
        </section>
        <StepLoader stepCount={stepCount} />
        {/* Form section */}
        <section>
          <form onSubmit={handleFormSubmit}>
            <h2 className='font-bold text-2xl text-center font-heading m-4'>
              Step # {stepCount}
            </h2>
            {/* Conditional rendering of steps based on the current step count */}
            {
              stepCount === 1 ?
                <FirstStep count={stepCount} setCount={setStepCount} /> :
                stepCount === 2 ?
                  <SecondStep /> :
                  <FinalStep />
            }
          </form>
        </section>
      </div>
    </div>
  );
}

export default StepFormPage;
