const TemplateExpressions = () => {
    const name = "Juliana Maria de Sousa Mesquita";

    const data = {
        age: 27,
        job: "Programmer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{ 23 + 23 }</p>
            <p>{console.log(" Nome : " + name + " Atuação : " + data.job + " Idade : " + data.age)}</p>
        </div>
    );
};

export default TemplateExpressions;