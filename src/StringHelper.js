const StringHelper = (()=>{
  const dashToCamelCase = (str)=>{
    if(!str.includes('-')) return str;
   
    return str.split('-').map((word, i)=> i > 0 ? capitalize(word) : word).join('');
  }

  const capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return{
    dashToCamelCase,
    capitalize,
  }
})();

export default StringHelper;
