import { useSocialAuthenticateMutation } from '@/redux/features/authApiSlice';
import { useSocialAuth } from '@/hooks';
import { Spinner } from '@/components/common';
import { Suspense } from 'react';

export default function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, 'google-oauth2');
	return (
		<Suspense fallback={<div className='flex justify-between items-center self-center'><Spinner lg /></div>}>
			<div className='flex justify-between items-center self-center'>
				{/* Your component logic that might use useSearchParams() here */}
				<Spinner lg />
			</div>
		</Suspense>
	);
}
