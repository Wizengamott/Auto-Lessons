import chalk from 'chalk'

let divide = (numerator, denominator) => {
    
    if (denominator === 0) {
        return "Denominator can't be 0"
    }
        else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            return "values should be numbers"
        }
        else {
            return numerator / denominator
        }
}

try { console.log(divide(10, -2))
} catch (error) {
    console.log("some error")
} finally {
    console.log(chalk.rgb(197, 2, 240)("Work is done"))
}

try { console.log(divide(10, 0))
} catch (error) {
    console.log("some error")
} finally {
    console.log(chalk.rgb(78, 0, 223)("Work is done"))
}

try { console.log(divide('test', 11))
} catch (error) {
    console.log("some error")
} finally {
    console.log(chalk.rgb(197, 84, 3)("Work is done"))
}

try { console.log(divide(55, 'test'))
} catch (error) {
    console.log("some error")
} finally {
    console.log(chalk.rgb(26, 223, 0)("Work is done"))
}

// console.log(divide(10, 2))
// console.log(divide(10, 0))
// console.log(divide('test', 11))
// console.log(divide(55, 'test'))