import { api } from 'services';
import { toast } from 'react-toastify';
import { environments } from 'constants/environments';
import { useSelectorClients } from 'Context/clients-context';
import { useForm, SubmitHandler } from "react-hook-form";
import { FormCard } from './style';

interface Client {
  _id: string;
  cpf: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
};

type Inputs = Omit<Client, '_id'>

export const ClientAddForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { dispatch } = useSelectorClients();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const token = localStorage.getItem('token_SHARENERGY') || "";

      const { 
        data: client 
      } = await api.post<Client>(`${environments.URL_API}/clients`, data, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(token)}`
        } 
      });

      dispatch?.({
        type: 'add-client',
        payload: client
      })

    } catch (error) {
      toast.error('Erro ao registrar cliente');
    }
  }

  return (
    <FormCard onSubmit={handleSubmit(onSubmit)}>
      <h1>Formulário de criação de clientes</h1>
      
      <br/>

      <label>Nome</label>
      <input {...register("name")} type="text" required />

      <label>CPF</label>
      <input {...register("cpf")} type="number" required />

      <label>Email</label>
      <input {...register("email")} type="email" required />

      <label>Endereço</label>
      <input {...register("address")} type="text" required />

      <label>N° telefone</label>
      <input {...register("phone_number")} type="text" required />

      <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
      </div>
    </FormCard>
  )
}