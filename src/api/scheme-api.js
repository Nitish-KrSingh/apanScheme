
import { MySchemeServerInstance } from "../utils/axios-config";



const getSchemeByIdentifier = async ({q,lang,keyword,sort,from,size}) =>  {
    let query = 'lang='+lang+'&q='+encodeURIComponent(JSON.stringify(q))+'&keyword='+keyword+'&sort='+sort+'&from='+from+'&size='+size;
   console.log(query);
   return await MySchemeServerInstance.get('/search/v2/schemes?'+query,{headers : {"x-api-key" :
	"tYTy5eEhlu9rFjyxuCr7ra7ACp4dv1RH8gWuHTDc"}});
}

export {getSchemeByIdentifier };