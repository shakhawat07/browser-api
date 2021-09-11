console.log('Alert');
// alert('Alert alert!!!');
const alertClick = () => {
    alert('Alert alert!!!');
}
const confirmClick = () => {
    const response = confirm('Are you confirm?')
    console.log(response);
    if (response === true) {
        alertClick();
    }
    else {
        console.log('You have clicked on cancel');
    }
}
const promptClick = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}