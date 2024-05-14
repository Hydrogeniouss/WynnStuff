const axios = require("axios");

const getAllTerritory = async () => {
  const all = await axios.get(
    "https://api.wynncraft.com/v3/guild/list/territory"
  );
  return all.data;
};

const main = async () => {
  const territories = await getAllTerritory();
  console.clear();
  for (const territory of Object.keys(territories).filter(
    (x) => territories[x].guild.prefix === "ETKW"
  )) {
    const current = territories[territory];
    console.log(`${territory}`)
  }
};

main();
