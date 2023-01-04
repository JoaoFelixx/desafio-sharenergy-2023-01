import { buildApisProvider, useSelectorApi } from './ApisContext';
import { toast } from 'react-toastify';

const ApisProvider = buildApisProvider({ toast });

export { ApisProvider, useSelectorApi };