function solution(input) {
    const matrix = Array.from({length: 10}, () => Array(10).fill(0));
    const visited = Array.from({length: 10}, () => Array(10).fill(false));
    const arr = input.split(',').map(elem => elem.split(''));
    arr.forEach(elem => {
        if (elem.length !== 2 || elem.length === 0) return;
        const column = parseInt(elem[0]);
        const row = parseInt(elem[1]);
        if (isNaN(column) || isNaN(row)) return;
        matrix[column][row] = 1;
    })

    let maxSize = 0;
    for (let i = 0; i <= matrix.length - 1; i++) {
        for (let j = 0; j <= matrix[0].length - 1; j++) {
            if (visited[i][j] || matrix[i][j] !== 1) {
                continue;
            }
            visited[i][j] = true;

            const listToVisit = [];
            listToVisit.push([i, j]);
            let size = 0;

            while (listToVisit.length !== 0) {
                const coords = listToVisit.pop();
                const x = coords[0];
                const y = coords[1];
                size += 1;
                if (x + 1 < 10 && matrix[x + 1][y] === 1 && !visited[x + 1][y]) {
                    visited[x + 1][y] = true;
                    listToVisit.push([x + 1, y]);
                }
                if (x - 1 >= 0 && matrix[x - 1][y] === 1 && !visited[x - 1][y]) {
                    visited[x - 1][y] = true;
                    listToVisit.push([x - 1, y]);
                }
                if (y + 1 < 10 && matrix[x][y + 1] === 1 && !visited[x][y + 1]) {
                    visited[x][y + 1] = true;
                    listToVisit.push([x, y + 1]);
                }
                if (y - 1 >= 0 && matrix[x][y - 1] === 1 && !visited[x][y - 1]) {
                    visited[x][y - 1] = true;
                    listToVisit.push([x, y - 1]);
                }
            }
            maxSize = Math.max(maxSize, size);
        }
    }
    return maxSize;
}