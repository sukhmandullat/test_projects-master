async function fetchData(url){
    
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('There was a networkibng error')

    }
const data= await response.json();
return data;


} 

module.exports = fetchData;