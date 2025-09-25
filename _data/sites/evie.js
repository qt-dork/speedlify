module.exports = {
  name: "Evie Sites", // optional, falls back to object key
  description: "Sites I've built",
  // skip if localhost
  skip: !process.env.CONTEXT,
  options: {
    frequency: 60 * 23, // 23 hours
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site",
  },
  urls: [
    "https://www.ewie.online/",
    "https://www.eviefinch.com/",
    // Popular Posts
  ],
};
