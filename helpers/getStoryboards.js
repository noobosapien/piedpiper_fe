import axios from "axios";

export default async function getStoryboards() {
  const res = await axios.post("http://127.0.0.1:8000/test", {
    timeline: 0,
    words:
      "Couple of weeks ago, me and my boyfriend were with a group of our friends at a festival, I knew I didn't have anything with me, but then I got sniffed by police dogs, police found a bag in my jacket, I had no idea where it came from, police thought I was being evasive, and they threatend to take me to the station, they charged me with possesion, they gave a court attendance notice.",
  });

  return res;
}
