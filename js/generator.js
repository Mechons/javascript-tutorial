
function* getEmployee() {
    console.log('the function has started');
    const names = ['Subhash', 'Khalid', 'Ravi',
        'Dhanya', 'Prajila', 'Kavya', 'Vidya', 'Veena'];
    for (const name of names) {
        console.log(name)
        yield name;  //yeild cause the generator to pause
    }

    console.log('the function has ended');
}
getEmployee();
const generatorIterator = getEmployee();
let data = generatorIterator.next();
data.value;
generatorIterator.next().value; //repeat this line to get subsequent values
generatorIterator.next().value; //repeat this line to get subsequent values
