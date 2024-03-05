import { params } from "@ampt/sdk";
const load = () => {
  return {
    url: params("AMPT_URL")
  };
};
export {
  load
};
