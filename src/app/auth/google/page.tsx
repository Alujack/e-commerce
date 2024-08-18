"use client";

import { Suspense } from 'react';
import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/components/common';

export default function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();	

	useSocialAuth(googleAuthenticate, 'google-oauth2');

	return (
		<Suspense fallback={<Spinner lg />}>
			<div className='flex justify-between items-center self-center'>
				<Spinner lg />
			</div>
		</Suspense>
	);
}
