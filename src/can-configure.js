
// We're at the Santa Claus factory 🎅 creating gifts like there's no tomorrow.

// We thought we weren't going to make it, but Jelf Bezos has had a great idea to take advantage of the machines and optimize the creation of gifts as much as possible. 🎁

// The machines configuration is a string. We can reconfigure it to make another gift and, for this, we can change each character for another.

// But it has limitations: when replacing the character, the order must be maintained, the same character cannot be assigned to two different letters (but to itself) and, of course, the length of the string must be the same.

// We need a function that tells us if we can reconfigure a machine so that it can go from one gift to another according to the aforementioned rules.


export const canConfigure = (from, to) => {
    if (typeof from !== "string") throw new Error("from is not a string");
    if (typeof to !== "string") throw new Error("to is not a string");

    const isSameLenth=from.length !== to.length
    if (isSameLenth) return false
    
    
    const hasSameUniqueLetters=new Set(from).size !== new Set(to).size 
    if (hasSameUniqueLetters ) return false

    const transformations = {}
    for (let i = 0; i < from.length; i++){
        const fromLetter = from[i];
        const toLetter = to[i]
        const storedLetter = transformations[fromLetter]
        if (storedLetter && storedLetter !== toLetter) return false
        transformations[fromLetter] = toLetter
    }
    
    return true
}
