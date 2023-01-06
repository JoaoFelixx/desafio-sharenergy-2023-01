import { Jumbotron } from 'components';
import { StatusList, BackButton } from 'components';

export const StatusCat = () => {
  return (
    <div>
      <Jumbotron title="Status Cat" subTitle="Selecione um status e veja um gatinho" />
      <BackButton />
      <StatusList />
    </div>
  )
}