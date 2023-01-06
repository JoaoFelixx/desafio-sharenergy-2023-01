import { Link } from 'react-router-dom';
import { Button } from './style';
import { localizedStrings } from 'constants/localizedStrings';

export function BackButton() {
  return (
    <Link to='/'>
      <Button>Voltar</Button>
    </Link>
  )
}