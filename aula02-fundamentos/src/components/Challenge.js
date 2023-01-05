const Challenge = () => {
    let num1 = 5;
    let num2 = 9;

    return (
        <div>
            {console.log(num1 + " " + num2)}
            <button onClick={() => console.log(num1+num2)}>Somar</button>
        </div>
    );
};

export default Challenge;