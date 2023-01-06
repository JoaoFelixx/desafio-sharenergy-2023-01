import Logo from 'assets/logo.jpeg'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<nav className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center">
							<img className="block h-8 w-auto lg:hidden" src={Logo} alt="Your Company" />
							<img className="hidden h-8 w-auto lg:block" src={Logo} alt="Your Company" />
						</div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<button onClick={() => navigate('/')} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">HOME</button>
								<button onClick={() => navigate('/random-dog')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RANDOM DOG</button>
								<button onClick={() => navigate('/status-cat')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">STATUS CAT</button>
								<button onClick={() => navigate('/clients')} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CLIENTES</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}