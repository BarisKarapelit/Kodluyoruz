const groups =['OrangeRed','AliceBlue','DeepPink'];
const fetchedData=fetch('./data.json').then((res)=>res.json().then(data=>data));

groups.forEach((color)=>{
    let group = fetchedData.filter(e => e.group == color)
    console.log(group)
})