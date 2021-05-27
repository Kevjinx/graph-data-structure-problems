const names = require("../test/names")

/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */



// function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance = 0) {
//   if (currentDistance === maxDistance) return name;

//   //assume name = array of friends of name
//   name.foreach(friend =>  {
//     console.log(`looping through ${friend}`)

//     if (!visited.has.friend) {
//       visited.add(
//             friendsOfRecursion(
//               friend,
//               adjacencyList,
//               visited,
//               maxDistance,
//               currentDistance++)
//             )
//     }
//   })
// }

function friendsOfRecursion(name, adjacencyList, visited, maxDistance, currentDistance) {
  if (currentDistance >= maxDistance) return

  visited.add(name)

  if (!adjacencyList[name]) return

  adjacencyList[name].forEach(friend =>  {

    const distPlusOne = currentDistance + 1

    friendsOfRecursion(
                      friend,
                      adjacencyList,
                      visited,
                      maxDistance,
                      distPlusOne
                      )

  })
}

function friendsOf(adjacencyList, name, distance) {
  if (!adjacencyList[name]) return undefined
  console.log('list:');
  console.log(adjacencyList);
  console.log('name');
  console.log(name);
  const visited = new Set()
  let count = 0
  adjacencyList[name].forEach(friend =>{
    count++
    friendsOfRecursion(friend, adjacencyList, visited, distance, 0)
    console.log(`count:`)
    console.log(count);
    console.log(`visited:`)
    console.log(visited);
  })


  return Array.from(visited);
}

/******************************************************************************
* Do not change code beneath this line.
*/
try {
  exports.friendsOf = friendsOf;
} catch (e) {
  exports.friendsOf = () => { throw new Error('Cannot export friendsOf.') };
}
