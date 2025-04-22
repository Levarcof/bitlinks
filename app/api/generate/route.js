import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const client = await clientPromise
    const body = await req.json()
    const db = client.db("bitlink")
    const collection = db.collection("url")

    let short =  await collection.findOne({shorturl:body.shorturl})
    if(short)
    {
    return Response.json({success: false , message : "Shorturl is already exist"})
        
    }

    const result = await collection.insertOne({
        url : body.url,
        shorturl : body.shorturl
    })

    return Response.json({success: true , message : "Succesfully url shorted"})
    
}