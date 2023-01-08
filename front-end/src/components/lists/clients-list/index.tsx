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
import { Jumbotron, Modal } from 'components';
import { useSelectorClients } from 'Context/clients-context';

interface Client {
  _id: string;
  cpf: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
}

export const ClientsList = () => {
  const { clients, dispatch } = useSelectorClients();
  const [clientSelected, setClientSelected] = useState<null|Client>(null); 
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const cancelUserAndVisibility = () => {
    setIsVisible(false);
    setClientSelected(null);
  }

  const clickOnClient = (client:  Client) => {
    setClientSelected(client);
    setIsVisible(true)
  }

  useEffect(() => {
    if (!isVisible)
      setClientSelected(null)
  }, [isVisible])

  return ( 
    <React.Fragment>
      {clientSelected && (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible} >
          <p>{clientSelected.name}</p>
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
                  <Td>{client.phone_number}</Td>
                </Tr>
              ))
            )}
          </tbody>
        </Table>
        <div>
          <Button bgColor='#00B508' >Adicionar</Button>
          <Button bgColor='#0257D4' >Atualizar</Button>
          <Button bgColor='#BD0003' >Remover</Button>
        </div>
      </Card>
    </React.Fragment>
  )
}