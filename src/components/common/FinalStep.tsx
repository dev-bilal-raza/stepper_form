import React from 'react'
import Button from './Button'
import Link from 'next/link'

const FinalStep = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <div className='p-10 block bg-gray-200'/>
            <div className='w-3/5 text-center'>
                <h2 className='font-bold font-heading md:text-4xl sm:text-2xl text-xl m-3'>
                    Your Request for a Proposal Has Been Submitted!
                </h2>
                <p className='font-para sm:text-lg text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, culpa? Rerum officiis esse doloremque hic, quo culpa optio ex fugiat fugit saepe, modi cumque voluptatibus sapiente natus earum totam architecto accusantium consectetur qui amet!
                </p>
            </div>
            <div>
                <Link href={"/"}>
                    <Button bt_type='button' delete_for={false}>
                        Return Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FinalStep