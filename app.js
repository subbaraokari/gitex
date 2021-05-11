const person = {
    pid: 1,
    name: 'Suresh',
    address: 'Chennai',
    company: {
        name: 'CTS',
        loc: 'OMR Road'
    }
};
console.log(person['pid'])
console.log(person['company']['name']);