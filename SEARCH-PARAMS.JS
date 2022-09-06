 const [searchParams, setSearchParams] = useSearchParams();
// react-router-dom hooks 
// getting params id
// In side useEffect 

categoryHandler(searchParams.get("cid"))  
