import {Img} from "../."
export default function Adsbanner({image}:{image:string}) {
    return (<>
    <Img src ={image} className ="w-full h-full round-[10px]"/>
    </>)
    }