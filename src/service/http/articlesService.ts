import { ArticleHttpData } from "@/models/Article";
import axios from "axios";

const getArticles = async (): Promise<Array<ArticleHttpData> | undefined> => {
  try {
    console.log(process.env)
    const response = await axios.get<Array<ArticleHttpData>>(
      process.env.VUE_APP_API_URL
    );
    if (response.status === 200) return response.data;
    throw new Error(response.statusText);
  } catch (err) {
    console.error(err);
  }
};

export default { getArticles };
