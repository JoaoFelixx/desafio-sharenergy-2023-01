import React, {
  useState,
  useEffect,
} from 'react';
import {
  Td,
  Th,
  Tr,
  Card,
  Table,
  Button,
} from './style';
import { 
  Modal, 
  Jumbotron, 
  ClientAddForm, 
  ClientEditForm,
  ClientRemoveForm,
} from 'components';
import { useSelectorClients } from 'Context/clients-context';

interface Client {
  _id: string;
  cpf: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
}

type Options = 'add' | 'edit' | 'remove' | null

export const ClientsList = () => {
  const { clients } = useSelectorClients();
  const [options, setOptions] = useState<Options>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [clientSelected, setClientSelected] = useState<null | Client>(null);

  const cancelUserAndVisibility = () => {
    setOptions(null);
    setIsVisible(false);
    setClientSelected(null);
  }

  const clickOnClient = (client: Client) => {
    setClientSelected(client);
    setIsVisible(true)
  }

  const formatPhoneNumber = (phone_number: number) => {
    const phoneNumberFormatted = phone_number.toString()
      .replace(/\D/g, "") //Remove tudo o que não é dígito
      .replace(/^(\d{2})(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
      .replace(/(\d)(\d{4})$/, "$1-$2") //Coloca hífen entre o quarto e o quinto dígitos

    return phoneNumberFormatted;
  }

  useEffect(() => {
    if (!isVisible)
      cancelUserAndVisibility();

    if (options === 'add')
      setIsVisible(true)

  }, [isVisible, options])

  return (
    <React.Fragment>
      {options === 'add' && (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible} >
          <ClientAddForm />
       </Modal> 
      )}

      {(clientSelected && options === 'edit') && (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible} >
          <ClientEditForm clientSelected={clientSelected} />
        </Modal> 
      )}

      {(clientSelected && options === 'remove') && (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible} >
          <ClientRemoveForm cancelUserAndVisibility={cancelUserAndVisibility} clientSelected={clientSelected} />
        </Modal> 
      )}

      <Jumbotron title="Página de clientes" subTitle="Cadastre, delete e edite usuários" />
      <Card>
        <Table>
          <tbody>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>N° telefone</Th>
            </Tr>
            {React.Children.toArray(
              clients.map((client) => (
                <Tr onClick={() => clickOnClient(client)}>
                  <Td>{client.name}</Td>
                  <Td>{client.email}</Td>
                  <Td>{formatPhoneNumber(client.phone_number)}</Td>
                </Tr>
              ))
            )}
          </tbody>
        </Table>
        <div>
          <Button bgColor='#00B508' onClick={() => setOptions('add')}>Adicionar</Button>
          <Button bgColor='#0257D4' onClick={() => setOptions('edit')}>Atualizar</Button>
          <Button bgColor='#BD0003' onClick={() => setOptions('remove')}>Remover</Button>
        </div>
      </Card>
    </React.Fragment>
  )
}