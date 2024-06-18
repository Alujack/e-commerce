import StepperComponent from "./step-menu";
export default function App({children}:{children:React.ReactNode}){
    return (
        <main className= "flex flex-col gap-[10px]">
            <StepperComponent />
            <div className= "w-full items-center">{children}</div>
        </main>)
}