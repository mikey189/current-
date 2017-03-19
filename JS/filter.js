app.filter("ToInt", ()=> {
    return (value) => {
        var int = parseInt(value)
        return int;
    }
})