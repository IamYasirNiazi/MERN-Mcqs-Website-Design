import { useRouter } from "next/router"
import { useEffect } from "react"


const DynamicRoute = () => {

    const router = useRouter();
    const page = router.query.page;

    useEffect(() => {

        if(page){

            router.push(`/english/idioms-and-phrases?page=${page}`);
        }

    }, [page])
    

}

export default DynamicRoute