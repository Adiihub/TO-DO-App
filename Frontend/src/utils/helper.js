export const getInitials = (name) => {
    if(!name) return "";

    const words = name.split(" ");

    let initials = "";

    for(let i=0; i<Math.min(words.length, 2); i++){ // YH ONLY 2 WORDS TK HI CHALEGA QKI HMNE 2 LEN LE RAKHA HAI
        initials += words[i][0];
    }

    return initials.toUpperCase();
}


export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return regex.test(email);
}