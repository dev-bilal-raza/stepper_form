import React from 'react';

// Define the StepLoader component that accepts a prop stepCount of type number
const StepLoader = ({ stepCount }: { stepCount: number }) => {
    return (
        // Container for the loader with a full width and gray background
        <div className='w-full bg-gray-300'>
            {/* Inner div that represents the loader bar with dynamic width based on stepCount */}
            <div 
                className={`h-2 duration-500 bg-green-600 ${stepCount === 1 ? "w-2/5" : stepCount === 2 ? "w-9/12" : "w-full"}`} 
            />
        </div>
    );
}

export default StepLoader;