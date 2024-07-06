// Importing necessary modules and components
import Button from "./Button";
import Image from "next/image";
import LockIcon from "../../../public/lock_icon-16.png"

// Define the Step02 component that accepts count and setCount props of type CountType
const Step02 = ({ count }: { count: number }) => {

    return (
        // Main container to center the content
        <div className="flex flex-col justify-center items-center">
            <h2 className='font-bold text-2xl text-center font-heading p-8'>
                Step # {count}
            </h2>
            <div className="flex flex-col justify-center gap-2 items-center m-4 md:w-2/5 text-center">
                <h1 className="font-semibold ">
                    Details
                </h1>
                <p className="text-gray-600 leading-relaxed">We&apos;re thrilled at the opportunity to help you grow your business online. Please let us know the best way to reach you.</p>
            </div>
            <div className="w-full md:w-2/5 m-7 p-5">
                {/* Form field for user name */}
                <div className="w-full mb-5">
                    <label
                        htmlFor="user_name"
                        className="font-semibold text-sm"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        className="p-3 w-full text-sm text-gray-900 rounded-sm border border-zinc-200"
                        placeholder=""
                        required
                    />
                </div>

                <div className="w-full mb-5 flex sm:flex-row flex-col gap-4">
                    {/* Form field for user email */}
                    <div>
                        <label
                            htmlFor="user_email"
                            className="font-semibold text-sm"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            className="p-3 w-full text-sm text-gray-900 rounded-sm border border-zinc-200"
                            placeholder=""
                            required
                        />
                    </div>
                    {/* Form field for user phone */}
                    <div>
                        <label
                            htmlFor="user_phone"
                            className="font-semibold text-sm"
                        >
                            Phone number
                        </label>
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}"
                            name="user_phone"
                            id="user_phone"
                            className="p-3 w-full text-sm text-gray-900 rounded-sm border border-zinc-200"
                            placeholder=" "
                            required
                        />
                    </div>
                </div>

                {/* Text area for additional user input */}
                <div className="w-full mb-5">
                    <label htmlFor="message" className="font-semibold text-sm">
                        Anything else you&apos;d like to share?
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="p-2.5 w-full text-sm text-gray-900 border-2 rounded-sm border-zinc-200 appearance-none focus:outline-none focus:ring-0 focus:border-black"
                    />
                </div>

                {/* Submit button for the form */}
                <div className="flex justify-center items-center m-4 mb-7">
                    <Button bt_type="submit" delete_for={false}>
                        Send Request
                    </Button>
                </div>
                <div className="flex md:flex-row flex-col gap-3 md:items-start items-center justify-center">
                    <Image src={LockIcon} alt="Lock" />
                    <p className="text-gray-600 text-center">
                        We promise never to share your information or spam your inbox
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Step02;
