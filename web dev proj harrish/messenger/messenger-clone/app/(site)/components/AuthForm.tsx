'use client';
import axios from "axios";
import Button from "@/app/components/Button";
import Input from "@/app/components/input/Input";
import React, { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import {BsGithub, BsGoogle}from 'react-icons/bs'
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";


// To know it's client
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'REGISTER') {
      axios.post('/api/register',data)
      .catch(()=>toast.error('something went wrong'))
      .finally(()=>setIsLoading(false))
    }
    if (variant === 'LOGIN') {
      // NextAuth signin
      signIn('credentials',{
        ...data,
        redirect:false
       }).then((callback)=>{
        if(callback?.error){
          toast.error('Invalid Credentials')
        }
        if(callback?.ok){
          toast.success('Logged in Sucessfully!')
        }
       }).finally(()=>setIsLoading(false))
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action,{redirect:false})
    .then((callback)=>{
      if(callback?.error){
        toast.error('Invalid Credentials')
      }
      if(callback?.ok){
        toast.success('Logged in Sucessfully!')
      }
     }).finally(()=>setIsLoading(false))

    }
 
  

  return (
    <div className="mt-8 sm:mx-auto sm::w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" 
            onSubmit={handleSubmit(onSubmit)//to acess data in onsubmit fn
            
            }>
                {variant=='REGISTER'&&(  <Input label="Name" register={register} id='name' errors={errors} disabled={isLoading}/>)}

              
 <Input label="Email Address" register={register} id='email' errors={errors} type="email"/>
 <Input label="Password" register={register} id='password' errors={errors} type="password"/>
 <div>
    <Button
    disabled={isLoading}
    fullwidth
    type="submit"
    >{variant=='LOGIN'?'Sign in':'Register'}</Button>
 </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"/>
                    </div>
                    <div className="relative flex justify-center text-sm ">
                        <span className="bg-white px-2 text-gray-500"> or Continue With</span>
                        </div>
                </div>
                <div className="mt-6 flex gap-2">
                    <AuthSocialButton icon={BsGithub} onClick={()=>socialAction('github')}/>
                    <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('google')}/>
                
       </div>
       <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
        {variant=='LOGIN'?'New to Messenger?':'Aldready Have An Account?'}
        <div onClick={toggleVariant} className="underline cursor-pointer">{variant=='LOGIN'?'Create an account':'Login'}</div>
            
            </div>
       </div>
       

        </div>
    </div>
  );
};

export default AuthForm;
