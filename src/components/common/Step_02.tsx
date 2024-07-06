"use client"
// Importing necessary modules and components
import { CountType } from "@/types/count.module";
import Button from "./Button";
import { delete_user_details_to_ls } from "@/services/ls_service";
import { useRouter } from "next/navigation";

// Define the Step02 component that accepts count and setCount props of type CountType
const Step02 = ({ count, setCount }: CountType) => {
    const router = useRouter(); // Initialize Next.js router for navigation
    let is_submitted = localStorage.getItem("is_submitted") || null;// Check if user details are already submitted

    return (
        // Main container to center the content
        <div className="flex justify-center items-center">
            {
                is_submitted ? (
                    // If details are already submitted, show the success message and action buttons
                    <div className="m-5">
                        <h2 className="md:text-3xl text-xl font-heading font-bold">
                            Your details have been successfully submitted.
                        </h2>
                        <div className="w-full flex justify-between p-5">
                            {/* Button to delete user details and refresh the page */}
                            <Button bt_type="button" clickFunc={() => {
                                delete_user_details_to_ls();
                                router.refresh();
                            }} delete_for={true}>
                                Delete Details
                            </Button>
                            {/* Button to proceed to the next step */}
                            <Button bt_type="button" delete_for={false} clickFunc={() => setCount(count + 1)}>
                                Next Step
                            </Button>
                        </div>
                    </div>
                ) : (
                    // If details are not submitted, show the form to enter user details
                    <div className="w-2/5">
                        {/* Form field for user name */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="user_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your name
                            </label>
                        </div>

                        {/* Form field for user email */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                                required
                            />
                            <label
                                htmlFor="user_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>

                        {/* Form field for user password */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="user_password"
                                id="user_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="user_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>

                        {/* Form field for user phone */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="user_phone"
                                id="user_phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="user_phone"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone number (904-326-3050)
                            </label>
                        </div>

                        {/* Text area for additional user input */}
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="message" className="block mb-2 text-sm text-gray-500">
                                Anything else you&apos;d like to share?
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            />
                        </div>

                        {/* Submit button for the form */}
                        <div className="flex justify-center items-center">
                            <Button bt_type="submit" delete_for={false}>
                                Send Request
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Step02;
