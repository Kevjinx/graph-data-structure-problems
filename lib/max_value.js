function maxValue(node, visited = new Set()) {
    let queue = [node]
    let max = node.val

    while (queue.length) {
        let curr = queue.shift()
        if (visited.has(curr)) continue
        visited.add(curr)

        queue.push(...curr.neighbors)
        if (curr.val >= max) max = curr.val
    }
    return max
}

module.exports = {
    maxValue
};
