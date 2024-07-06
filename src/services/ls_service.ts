// Importing the FormType type from the form module
import { FormType } from "@/types/form.module";

// Function to store the budget in localStorage
export const store_budget_to_ls = (data: string) => {
    const budget = localStorage.getItem("user_budget");
    if (budget) {
        // If budget already exists, throw an error
        throw new Error("User budget already exists.");
    } else {
        // If budget does not exist, store it in localStorage
        localStorage.setItem("user_budget", data);
    }
    return data;
}

// Function to delete the budget from localStorage
export const delete_budget_to_ls = () => {
    const budget = localStorage.getItem("user_budget");
    if (budget) {
        // If budget exists, remove it from localStorage
        localStorage.removeItem("user_budget");
    } else {
        // If budget does not exist, throw an error
        throw new Error("User budget does not exist.");
    }
    return "Budget has been removed successfully.";
}

// Function to store user details in localStorage
export const store_user_details_to_ls = (data: FormType) => {
    const user_name = localStorage.getItem("user_name");
    const user_email = localStorage.getItem("user_email");
    const user_password = localStorage.getItem("user_password");
    const user_phone = localStorage.getItem("user_phone");
    if (user_name || user_email || user_password || user_phone) {
        // If any user detail already exists, throw an error
        throw new Error("User details already exist.");
    } else {
        // If user details do not exist, store them in localStorage
        localStorage.setItem("user_name", data.user_name);
        localStorage.setItem("user_email", data.user_email);
        localStorage.setItem("user_password", data.user_password);
        localStorage.setItem("user_phone", data.user_phone);
        localStorage.setItem("is_submitted", "true");
    }
    return data;
}

// Function to delete user details from localStorage
export const delete_user_details_to_ls = () => {
    const isSubmitted = localStorage.getItem("is_submitted");
    if (isSubmitted) {
        // If user details exist, remove them from localStorage
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_password");
        localStorage.removeItem("user_phone");
        localStorage.removeItem("is_submitted");
    } else {
        // If user details do not exist, throw an error
        throw new Error("User details do not exist.");
    }
    return "User details have been removed successfully.";
}
