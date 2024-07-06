import { CountType } from "@/types/count.module"
import { budget_data } from "@/data/budget_data"


const Step01 = ({ count, setCount }: CountType) => {
    const handleFirstForm = (user_budget: string) => {
        if (count === 1) {
            console.log(`You have selected ${user_budget} budget.`);
            setCount(count + 1);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full">
                <h2 className="md:text-3xl text-xl font-heading font-bold text-center">
                    What is your monthly digital marketing budget?
                </h2>
                <div className="w-full flex flex-col justify-center items-center">
                    {
                        budget_data.map((item) => (
                            <div key={item.data_id} onClick={() => handleFirstForm(item.data)} className="p-5 m-3 bg-white w-full sm:w-3/12 hover:bg-black hover:text-white duration-500 hover:cursor-pointer" >
                                <p className="text-center">
                                    {item.data}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Step01