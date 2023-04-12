function categorizeTask(title) {
  const keywords = {
    1: ["movie", "series", "show", "watch", "screen", "TV"],
    2: ["restaurant", "cafe", "food", "eat"],
    3: ["book", "novel", "read"],
    4: ["product", "buy", "purchase"],
    5: ["recipe", "cook", "ingredients"],
  };

  // Loop through each category
  for (const category in keywords) {
    // Check if the title contains any of the keywords for this category
    if (
      keywords[category].some((keyword) =>
        title.toLowerCase().includes(keyword)
      )
    ) {
      // Return the ID of the first matching category
      return category;
    }
  }

  // If no matching category was found, return null

  return null;
}


// API call to categorize task by title
// Return the category ID received from API else null
const categorizeTasksByAPI = (title) => {
  console.log(title);
  const searchText = title;

  (async () => {
    const WolframAlphaAPI = require('./WolframAlphaApi.js');

    console.log(WolframAlphaAPI.WolframAlpha);

    const APPID = 'KWLEPU-R2Q3H7A2JW';
    const waApi = WolframAlphaAPI(APPID);

    console.log("going to search");

    console.log("\nget full\n");
    await waApi.getFull(searchText)
      .then(result => {console.log(result)

        if (result.success) {
          const datatypes = result.datatypes.split(',');
          datatypes.forEach((datatype) => {

            return categorizeTask(datatype);
            console.log(datatype);
          });
        }
      })
      .catch(error => console.error(error));
    console.log("-----------------------------");

  })();
  return null;
};

module.exports = { categorizeTask, categorizeTasksByAPI };
