"use client";
// Indicates that this code runs on the client side
import React, { FormEvent, useState } from 'react';
import FirstStep from "@/components/common/Step_01";
import SecondStep from "@/components/common/Step_02";
import StepLoader from '@/components/common/StepLoader';
import FinalStep from '@/components/common/FinalStep';
import { store_user_details_to_ls } from '@/services/ls_service';
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
    if (user_name && user_email && user_password && user_phone) {
      console.log(user_name);
      // Store user details in local storage
      store_user_details_to_ls({
        user_name: String(user_name),
        user_email: String(user_email),
        user_password: String(user_password),
        user_phone: String(user_phone)
      });
      // Move to the next step
      setStepCount(stepCount + 1);
    }
  }

  return (
    <div>
      {/* Step loader component to indicate the current step */}
      <StepLoader stepCount={stepCount} />
      <div className='bg-slate-50 p-6 h-screen'>
        {/* Navigation section */}
        <section className='w-full flex justify-between font-para font-semibold'>
          {/* Go Back button */}
          <button
            onClick={() => setStepCount(stepCount - 1)}
            className='disabled:text-slate-400 disabled:cursor-not-allowed hover:cursor-pointer'
            disabled={stepCount === 1}
          >
            ↞ Go Back
          </button>
          {/* Exit link */}
          <Link href={"/"}>
            Exit&nbsp;✕
          </Link>
        </section>
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
                  <SecondStep count={stepCount} setCount={setStepCount} /> :
                  <FinalStep />
            }
          </form>
        </section>
      </div>
    </div>
  );
}

export default StepFormPage;
