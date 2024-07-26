'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/components/common';

export default function Page() {
	const [facebookAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(facebookAuthenticate, 'facebook');

	// Example usage of useSearchParams
	const searchParams = useSearchParams();
	const paramValue = searchParams.get('paramName'); // Replace 'paramName' with the actual query parameter you need

	return (
		<Suspense fallback={<div className='my-8'><Spinner lg /></div>}>
			<div className='my-8'>
				{/* Your component logic here */}
				<Spinner lg />
			</div>
		</Suspense>
	);
}
