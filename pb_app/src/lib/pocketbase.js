import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.REACT_APP_PB_URL);

export default pb;