// Importing necessary modules and components
import React from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';

// Defining the HomePage component
const HomePage = () => {
  return (
    // Main container with full-screen height and gradient background, centered content
    <div className='h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 flex justify-center items-center'>
      <div className='flex flex-col gap-7 justify-center'>
        {/* Header text with responsive font sizes and styles */}
        <h1 className='text-xl sm:text-3xl md:text-5xl font-heading text-white font-bold '>
          Stepper Form Task For Front-end!
        </h1>
        {/* Button component with a link to the step-form page */}
        <Button bt_type='button' delete_for={false}>
          <Link href={"/step-form"}>
            Go To Task
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
