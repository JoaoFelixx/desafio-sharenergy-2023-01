import React, { useState } from 'react';
import { GrFilter } from 'react-icons/gr';
import { useSelectorApi } from 'Context/api-context';
import { 
  Flex, 
  Card, 
  Image,
  Detail, 
  Content, 
  FullName, 
} from './style';
import { UserModal } from '../../modals'

export const UsersList = () => {
  const { users } = useSelectorApi();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Card>
      <UserModal isVisible={isVisible} setIsVisible={setIsVisible}>
        <form>
          <label>Filtro</label>
          <input />
        </form>
      </UserModal>
      <div className="bg-white">
        <GrFilter onClick={() => setIsVisible(true)}/>
        <h2 className="sr-only">Usuários</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
          {React.Children.toArray(
            users.map((user) => (
              <Flex>
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-60 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-50">
                  <Image
                    src={user.picture.large}
                    alt={user.login.uuid}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <Content>
                  <FullName>{user.name.fullName}</FullName>
                  <div>
                    <p><Detail>Email: </Detail>{user.email}</p>
                    <p><Detail>Idade: </Detail>{user.dob.age} anos</p>
                    <p><Detail>Username: </Detail>{user.login.username}</p>
                  </div>
                </Content>
              </Flex>
            ))
          )}
        </div>
      </div>
    </Card>
  )
}