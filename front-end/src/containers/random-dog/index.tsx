import { Iframe } from './style';
import { BackButton } from 'components';
import { environments } from 'constants/environments'

export const RandomDog = () => {

  return (
    <div>
      <BackButton />
      <Iframe src={environments.URL_RANDOM_DOG} title="Random Dog"></Iframe>
    </div>
  )
}