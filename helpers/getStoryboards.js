import axios from "axios";

export default async function getStoryboards() {
  const res = await axios.post("http://127.0.0.1:8000/test");

  return res;
}
