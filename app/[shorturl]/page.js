import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({params})
{
    const shorturl = (await params).shorturl
    const client = await clientPromise;

    const db = client.db("bitlink")
    const collection = db.collection("url")

    const short = await collection.findOne({shorturl:shorturl})
    if(short){
        redirect(short.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
    return(
        <>
        Hey
        </>
    )


}