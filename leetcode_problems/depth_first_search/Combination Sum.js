var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(start, current, total) {
        if (total === target) {
            result.push([...current]);
            return;
        }

        if (total > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);

            backtrack(
                i,
                current,
                total + candidates[i]
            );

            current.pop();
        }
    }

    // Run the backtracking search
    backtrack(0, [], 0);

    // Return from combinationSum, not from backtrack
    return result;
};