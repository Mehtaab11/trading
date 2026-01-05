"use client"

import InputField from "@/components/forms/InputField"
import { useForm, SubmitHandler } from "react-hook-form"

const SignUpPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'US',
            investmentGoals: 'Growth',
            riskTolerance: 'Medium',
            preferredIndustry: 'Technology',
        },
        mode: 'onBlur'
    },)

    const onSubmit = async (data: SignUpFormData) => {

        try {
            console.log(data)
        } catch (e) {
            console.error(e)
        }

    }
    return (
        <>
            <h1 className="form-title"> Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/*  */}

            <InputField />
                <button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating Account' : 'Start Your Investing Journey'}
                </button>
            </form>

        </>
    )
}

export default SignUpPage
