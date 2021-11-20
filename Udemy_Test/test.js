// This is an example used in the coding test

const input = `Lead Chef, Chipotle, Denver, CO, 10, 15
Stunt Double, Equity, Los Angeles, CA, 15, 25
Manager of Fun, IBM, Albany, NY, 30, 40
Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200`;

// Create an object that stores the data
// Create key for each part of the line - Title, Organization, Location

// str = "Lead Chef, Chipotle, Denver, CO, 10, 15"
// return {
//     Title: "Lead Chef",
//     Organization: "Chipotle",
//     Location: "Denver, CO",
//     minPay: 1,
//     maxPay: 3
// }
function parseStr(str) {
  // let { Title, Organization, Location, } =  arrayValues;
  // {
  //     Title: Title,
  //     Organization: Organization,
  //     Location: Location,
  //     Pay: Pay,
  // }

  const jarynTest = "Lead Chef, Chipotle, Denver, CO, 10, 15".split(",");
  console.log(jarynTest);
  let arrayValues = [];
  // ["Hello", "Goodbye", "Thanks"] = "Hello|Goodbye|Thanks".function('|')
  // ["Lead Chef", "Chipotle", "Denver"] = "Lead Chef, Chipotle, Denver, CO, 10, 15".function(', ')

  // {
  //     Title: arrayValues[0],
  //     Organization: arrayValues[1],
  //     Location: arrayValues[2],
  //     MinPay: arrayValues[3],
  //     MaxPay: arrayValues[3]
  // }
}

parseStr();
const allOpp = {
  Title: "This is the title",
  Organization: "This is the org",
  Location: "This is the location",
  Pay: "min_num - max_num",
};
// "Title: This is the title, Organization: This is the org, Location: This is the location, Pay: min_num-max_num"

// const title = allOpp.Title
// console.log(title)

function printOpportunity(opp) {
  let { Title, Organization, Location, Pay } = opp;
  console.log(
    `Title: ${Title}, Organization: ${Organization}, Location: ${Location}, Pay: ${Pay} `
  );
}

printOpportunity(allOpp);

//const printOpportunity = (opp) => {}

// I will test this this week

// Continue testing JS in Exercism
// Working on Array Exercise

// export function removeItemFromTop(cards) {
//   cards.pop()
// return cards

// Completed arrays exercise moving on to conditionals exersize.

// Still working on Excecism exercises.

// stuck on exercism test
