const generatePass = (data) => {

    /**
     * all true functions are insert into an array
     */
    const fun = [];
    if (data.lower)
        fun.push('lowerRand');
    if (data.upper)
        fun.push('upperRand');
    if (data.number)
        fun.push('numberRand');
    if (data.symbols)
        fun.push('symbolRand');
    /**
     * genarating password if the length of array is grater than 0
     */
    if (fun.length > 0 && data.length > 0) {

        //  initialize password to string ''
        let pass = '';
        //  loop until data.length ( password length)
        for (let i = 0; i < data.length; i++) {
            //  generating a random number within range length of fun array
            let j = Math.floor(Math.random() * fun.length);
            //  selecting a random function from fun array
            let f = fun[j];
            //  calling the function
            if (f === 'lowerRand')
                pass += lowerRand()
            if (f === 'upperRand')
                pass += upperRand()
            if (f === 'numberRand')
                pass += numberRand()
            if (f === 'symbolRand')
                pass += symbolRand()

        }
        return pass;
    }
    /**
     * if the length of fun array is less than or equal to 0
     * that means user do not select any options like lower,upper,number and symbols
     * if the length of password that given by user is less than zero
     */
    return JSON.stringify({
        err: true,
        msg: "please check the password options"
    });
}

//  random small case letter

const lowerRand = () => String.fromCharCode(97 + Math.floor(Math.random() * 26));

//  random upper case letter

const upperRand = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

//  random number from 0 -9

const numberRand = () => Math.floor(Math.random() * 10);


//  random symbols

const symbolRand = () => {
    const symbols = ['+', '-', '*', '/', '#', '!', '$', '%', '&', '^', '_', '[', ']', '~'];
    return symbols[Math.floor(Math.random() * symbols.length)];
} 