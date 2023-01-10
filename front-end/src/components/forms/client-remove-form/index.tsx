import { api } from 'services';
import { toast } from 'react-toastify';
import { FormCard } from './style';
import { environments } from 'constants/environments';
import { useSelectorClients } from 'Context/clients-context';

interface Client {
  _id: string;
  cpf: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
};

interface Props {
	clientSelected: Client;
	cancelUserAndVisibility: () => void
}

export const ClientRemoveForm = ({ clientSelected, cancelUserAndVisibility }: Props) => {
	const { dispatch } = useSelectorClients()

	const removeClient = async () => {
		try {
			const token = localStorage.getItem('token_SHARENERGY') || "";

			await api.delete(`${environments.URL_API}/clients/${clientSelected._id}`, {
				headers: {
					'Authorization': `Bearer ${JSON.parse(token)}`
				}
			})

			dispatch?.({
				type: 'del-client',
				payload: clientSelected
			});

			cancelUserAndVisibility()

		} catch (error) {
			toast.error('Erro ao deletar cliente');
		}
	}

	return (
		<FormCard>
			<p>Deseja mesmo apagar "{clientSelected.name}" ?</p>
			<br/><br/>
			<button onClick={removeClient}>Deletar</button>
		</FormCard>
	)
}