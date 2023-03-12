function logTime(date: Date): void {
    console.log(`The time is ${date.toLocaleTimeString()}`)
}

logTime(new Date())