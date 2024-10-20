export default function ForLoops() {
    let stringArray1 = ["string1", "string3"];
    let stringArray2 = [];

    // Using for loop to iterate through array
    for (let i = 0; i < stringArray1.length; i++) {
        const string1 = stringArray1[i];
        stringArray2.push(string1.toUpperCase()); // Convert string to uppercase and push into new array
    }

    return (
        <div id="wd-for-loops">
            <h4>Looping through arrays</h4>
            stringArray2 = {stringArray2} <hr />
        </div>
    );
}