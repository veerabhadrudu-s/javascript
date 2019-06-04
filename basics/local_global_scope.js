// This is a sample example about local and global scope of variables.

scope="Global Scope Variable";

function scopeFunction(){
    var scope="Local Scope Variable";
    var localScope="Another Local scope Variable";
    globalScopeVariableInFunction="Global Scope Variable Declared in Function";
    console.log(scope);
    console.log(localScope);
    console.log(global.scope);
}

//Below line will cause error as the global variable used before it's declared.
//console.log(globalScopeVariableInFunction);
scopeFunction();
console.log(scope);
console.log(globalScopeVariableInFunction);
//Below Line cause error as the scope of the variable is limited to the function only.
//console.log(localScope);