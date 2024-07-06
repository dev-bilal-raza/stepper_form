"use client"
import { CountType } from "@/types/count.module"
import { budget_data } from "@/data/budget_data"
import { store_budget_to_ls, delete_budget_to_ls } from "@/services/ls_service"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "./Button"

const Step01 = ({ count, setCount }: CountType) => {
    const [error, setError] = useState("");
    const router = useRouter();
    let budgetExist = typeof window !== "undefined" && localStorage.getItem("user_budget");
    const handleFirstForm = (budget: string) => {
        if (count === 1) {
            try {
                const message = store_budget_to_ls(budget);
                console.log(message);
                setCount(count + 1);
            } catch (error: any) {
                // console.log(error.message);
                setError(error.message)
            }
        }
    }
    const delete_budget = () => {
        const message = delete_budget_to_ls();
        console.log(message);
        router.refresh();
    }
  
    return (
        <div className="flex flex-col justify-center items-center">
            {
                budgetExist ? (
                    <div className="m-5">
                        <h2 className="md:text-3xl text-xl font-heading font-bold">
                            You have successfully added budget to <span className="text-blue-700 border p-1 bg-white rounded-md">{budgetExist}</span>
                        </h2>
                        <div className="w-full flex justify-between p-5">
                            <Button bt_type="button" delete_for={true} clickFunc={delete_budget}>
                                Delete Budget
                            </Button>
                            <Button bt_type="button" delete_for={false} clickFunc={() => setCount(count + 1)}>
                                Next Step
                            </Button>
                        </div>
                    </div>
                ) : (

                    <div className="w-full">
                        <h2 className="md:text-3xl text-xl font-heading font-bold text-center">
                            What is your monthly digital marketing budget?
                        </h2>
                        <p className=" text-red-500 m-3">
                            {error ? error : ""}
                        </p>
                        <div className="w-full flex flex-col justify-center items-center">
                            {
                                budget_data.map((item) => (
                                    <div key={item.data_id} onClick={() => handleFirstForm(item.data)} className="p-5 m-3 bg-white w-3/12 hover:bg-black hover:text-white duration-500 hover:cursor-pointer" >
                                        <p className="text-center">
                                            {item.data}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Step01