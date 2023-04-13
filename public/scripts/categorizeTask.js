const WolframAlphaAPI = require('./WolframAlphaApi.js');
// const APPID = 'KWLEPU-R2Q3H7A2JW';
const envVariables = process.env;
const waApi = WolframAlphaAPI(envVariables.APPID);


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

  return (async () => {


    console.log(WolframAlphaAPI.WolframAlpha);



    console.log("going to search");

    console.log("\nget full\n");

    let result = await waApi.getFull(searchText)
      // .then(result => {
      //   console.log(result);

      //   if (result.success) {
      //     const datatypes = result.datatypes.split(',');

      //     datatypes.forEach((datatype) => {

      //       for (const value in keywords) {
      //         if (keywords[value].some((k) =>
      //           k.toLowerCase() === datatype.toLowerCase())) {
      //             console.log(datatypes)
      //             console.log("+++++value", value)
      //           return value;

      //         }
      //       }

      //     });

      //     return 1;
      //   }

      // })
      // .catch(error => console.error(error));
    console.log("-----------------------------");
    return result;
  })();

};

module.exports = { categorizeTask, categorizeTasksByAPI };
