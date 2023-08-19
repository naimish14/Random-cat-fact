let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let ans = await getFact();
  console.log(ans);
  let p = document.querySelector(".para");
  p.innerText = ans;
});
async function getFact() {
  try {
    let ans = await axios.get(url);
    return ans.data.fact;
  } catch (err) {
    console.log(err);
  }
}
