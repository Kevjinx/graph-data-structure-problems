function breadthFirstSearch(startingNode, targetVal) {
    // console.log(startingNode)
    // console.log(targetVal)

    let queue = [startingNode]

    {
        startingNode.neighbors.forEach(neighbor => {
            if (neighbor.val === targetVal) return false
        })
    }

    while (queue.length) {
        let curr = queue.shift()
        if (visited.has(curr)) continue
        visited.add(curr)
        resultArr.push(curr)


    }


}


module.exports = {
    breadthFirstSearch
};
