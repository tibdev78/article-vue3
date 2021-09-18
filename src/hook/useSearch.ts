import { ArticleHttpData } from "@/models/Article";

export const useSearch = (
  dataState: Array<ArticleHttpData>,
  inputValue: string
): Array<ArticleHttpData> => {
  const matchedData = dataState.filter((data) => {
    return data.title.includes(inputValue);
  });
  return inputValue === "" ? dataState : matchedData;
};
