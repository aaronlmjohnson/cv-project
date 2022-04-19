String.prototype.dashToCamelCase = function(){
    const that = this.toString();

    if(!that.toString().includes('-')) return that;
   
    return that.split('-').map((word, i)=> i > 0 ? word.capitalize() : word).join('');
}

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});
