let mySymbol =Symbol();
let person={
    name:'',
    age: 33,
    [mySymbol]:'secretInformation',
    showInfo: function()
    {
        showMessage(this.name + '' +realAge)
    }

};
