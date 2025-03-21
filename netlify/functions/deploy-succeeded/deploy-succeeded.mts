import type {Context} from "@netlify/functions";
import {Client} from "tencentcloud-sdk-nodejs-cdn/tencentcloud/services/cdn/v20180606/cdn_client";
import type {PurgePathCacheRequest} from "tencentcloud-sdk-nodejs-cdn/tencentcloud/services/cdn/v20180606/cdn_models";

export default (request: Request, context: Context) => {
    const client = new Client({
        credential: {
            secretId: process.env.SECRET_ID,
            secretKey: process.env.SECRET_KEY,
        },
        profile: {
            httpProfile: {
                endpoint: "https://blog.yizhou.ac.cn/"
            }
        }
    })
    context.waitUntil(client.PurgePathCache({} as PurgePathCacheRequest));
    return new Response("Ok");
}
