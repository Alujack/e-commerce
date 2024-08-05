import Card from "./product-post-card"
export default function ProductPost() {
    return (
    <>
    <div className="scrollable-div bg-slate-100 p-10 rounded-[16px]">
         <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
                    Product Post
                </h1>
        <div className="grid grid-cols-4 gap-3 items-center p-4">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>

    </div>
    
    </>)
}