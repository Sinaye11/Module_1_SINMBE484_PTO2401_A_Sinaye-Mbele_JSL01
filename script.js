function validateSyntax() {
     let input = document.getElementById('petInput').value;
    // Validation logic goes here
     let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
            //Declaring what will be checked 
            let check = /^pet_[a-zA-Z0-9]+$/; 

            // If statement that  will check if the criteria is met
            if (check.test(input)){
                result = "Valid Syntax \u{1F7E2}"; //What will be printed if its met with a green circle
            }
            else {
                result = "Invalid Syntax \ud83d\udd34";  //What will be printed if its not met with a red circle
            }
            document.getElementById('result').innerText = result;

}


