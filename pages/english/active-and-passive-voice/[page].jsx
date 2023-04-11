import { useRouter } from "next/router"
import { useEffect } from "react"


const DynamicRoute = () => {

    const router = useRouter();
    const page = router.query.page;

    useEffect(() => {

        if(page){

            router.push(`/english/active-and-passive-voice?page=${page}`);
        }

    }, [page])
    

}

export default DynamicRoute