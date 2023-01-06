import React from 'react';
import { Flex, Card, } from './style';

interface Provider {
	children: React.ReactNode;
}

export const CardLogin = ({ children }: Provider) => {

	return (
		<Flex>
			<Card>
				<div className="mt-10 sm:mt-0">
	        <div className="md:grid md:grid-cols-3 md:gap-6">
	          <div className="mt-5 md:col-span-2 md:mt-0">
	            {children}		
	          </div>
	        </div>
	      </div>
			</Card>
		</Flex>
	)
}