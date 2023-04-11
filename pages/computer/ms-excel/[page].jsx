import { useRouter } from "next/router"
import { useEffect } from "react"


const DynamicRoute = () => {

    const router = useRouter();
    const page = router.query.page;

    useEffect(() => {

        if(page){

            router.push(`/computer/ms-excel?page=${page}`);
        }

    }, [page])
    

}

export default DynamicRoute