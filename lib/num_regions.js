function numRegions(graph) {
    let count = 0
    let visited = new Set()

    for (node in graph) {
        if (visited.has(node)) {
            continue
        }

        let queue = [node]

        while (queue.length) {
            let curr = queue.shift()
            if (visited.has(curr)) continue
            visited.add(curr)
            if (graph[curr]) {
                queue.push(...graph[curr])
            }
        }
        count++
    }
    return count
}



module.exports = {
    numRegions
};
