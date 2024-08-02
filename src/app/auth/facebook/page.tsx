'use client';

import { Suspense } from 'react';
import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/components/common';

export default function Page() {
	const [facebookAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(facebookAuthenticate, 'facebook');

	return (
		<Suspense fallback={<div className='my-8'><Spinner lg /></div>}>
			<div className='my-8'>
				{/* Your component logic here */}
				<Spinner lg />
			</div>
		</Suspense>
	);
}
