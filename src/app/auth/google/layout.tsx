import { Suspense } from "react";

export default function App({children}:{children:React.ReactNode}){
    return (
        <Suspense>
            {children}
        </Suspense>
    )
}