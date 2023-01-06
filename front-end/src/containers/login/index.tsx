import React from 'react';
import { toast } from 'react-toastify';
import { CardLogin } from 'components';
import { useNavigate } from 'react-router-dom';
import { useSelectorAuth } from 'Context/auth-context';
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  username: string,
  password: string,
};

export const Login = () => {
  
  const navigate = useNavigate()
  const { handleLogin } = useSelectorAuth();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await handleLogin(data);

      if (result instanceof Error)
        throw new Error();

      navigate('/');

    } catch (error) {
      toast.error('Senha ou username incorretos');
    }
  }

  return (
    <CardLogin>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Username</label>
                <input {...register("username")} type="text" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Senha</label>
                <input {...register("password")} type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>
        </div>
      </form>
    </CardLogin>
  )
}