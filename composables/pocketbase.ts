import PocketBase from "pocketbase";

export const usePocketbase = () => {
  const appConfig = useAppConfig();
  const pb = new PocketBase(appConfig.pocketbase.url);
  return pb;
};
