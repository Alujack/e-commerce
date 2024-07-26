'use client';

import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/components/common';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, 'google-oauth2');

	const searchParams = useSearchParams();
	const paramValue = searchParams.get('paramName'); // Replace 'paramName' with the actual query parameter you need

	return (
		<Suspense fallback={<div className='flex justify-between items-center self-center'><Spinner lg /></div>}>
			<div className='flex justify-between items-center self-center'>
				{/* Your component logic that might use useSearchParams() here */}
				<Spinner lg />
			</div>
		</Suspense>
	);
}
