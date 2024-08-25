'use client';

import { ImGoogle, ImFacebook } from 'react-icons/im';
import { SocialButton } from '@/components/common';
import { continueWithGoogle, continueWithFacebook } from '@/utils';

export default function SocialButtons() {
	return (
		<div className='flex flex-row justify-between items-center gap-2 mt-5'>
			<SocialButton provider='google' onClick={continueWithGoogle}>
				<ImGoogle className='mr-3 text-white-A700 text-center' /> Google
			</SocialButton>
			<SocialButton provider='facebook' onClick={continueWithFacebook}>
				<ImFacebook className='mr-3 text-white-A700 text-center' /> Facebook 
			</SocialButton>
		</div>
	);
}
