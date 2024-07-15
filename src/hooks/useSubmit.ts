const useSubmit= ({url,data}:{url:string;data:any})=>{
    const handleSubmit = async (e:any) => {
    e.preventDefault();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  };
  return {handleSubmit}
    
}
export default useSubmit;
