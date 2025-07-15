import type { Context } from "@netlify/functions";
import { cdn } from "tencentcloud-sdk-nodejs-cdn";

export default async (request: Request, context: Context) => {
    const client = new cdn.v20180606.Client({
        credential: {
            secretId: process.env.SECRET_ID,
            secretKey: process.env.SECRET_KEY,
        },
        profile: {
            signMethod: "TC3-HMAC-SHA256",
            httpProfile: {
                reqMethod: "POST",
                reqTimeout: 120
            }
        }
    });
    await client.PurgePathCache({
        Paths: ["https://blog.yizhou.ac.cn"],
        FlushType: "delete",
        UrlEncode: true,
        Area: "mainland"
    });
    return new Response("Ok");
}