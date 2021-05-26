function breadthFirstSearch(startingNode, targetVal) {
    // if ((() => {
    //     startingNode.neighbors.forEach(neighbor => {
    //         if (neighbor.val = targetVal) return true
    //     });
    //     return false
    // })()) return null
    let queue = [startingNode]

    let visited = new Set()
    while (queue.length) {
        let curr = queue.shift()
        if (curr.val === targetVal) return curr

        if (visited.has(curr.val)) continue
        visited.add(curr.val)
        queue.push(...curr.neighbors)
    }
    return null
}


module.exports = {
    breadthFirstSearch
};
