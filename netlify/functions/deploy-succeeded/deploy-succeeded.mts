import type {Context} from "@netlify/functions";
import type {PurgePathCacheRequest} from "tencentcloud-sdk-nodejs-cdn/tencentcloud/services/cdn/v20180606/cdn_models";

const Client = require("tencentcloud-sdk-nodejs-cdn").cdn.v20180606.Client;

export default (request: Request, context: Context) => {
    const client = new Client({
        credential: {
            secretId: process.env.SECRET_ID,
            secretKey: process.env.SECRET_KEY,
        },
        profile: {
            httpProfile: {
                endpoint: "cdn.tencentcloudapi.com"
            }
        }
    })
    const params = {
        Paths: ["https://blog.yizhou.ac.cn/"],
        FlushType: "flush"
    };
    context.waitUntil(client.PurgePathCache(params as PurgePathCacheRequest));
    return new Response("Ok");
}
