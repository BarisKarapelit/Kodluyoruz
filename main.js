const groups = ['OrangeRed', 'AliceBlue', 'DeepPink'];
//filtreleme  işlemi için grupları alıyoruz
const fetchedData = fetch('./data.json').then((res) => res.json().then(data => data));
//filtreleme işlemi için fetchedData ile data.json dosyasının verilerini alıyoruz
let group = {};
//group değişkeni için sutunlarını alıyoruz
let Assistant = true;
//filtreleme işlemi için assistant true olanları alıyoruz
groups.forEach(async (color) => {
    //filtreleme işlemi için grupların her birini alıyoruz
    group = await fetchedData.then(e => e.filter(x => x.group == color))
    //filtreleme işlemi için group değişkenine filtreleme işlemi yapıyoruz
    console.log(color, group)
    //console.log ile grupların her birini bastırıyoruz
    Assistant = await group.filter(x => x.assistant == Assistant)
    //filtreleme işlemi için assistant true olanları alıyoruz
    //ve Assistan değişkenine atıyoruz
    console.log(color, Assistant)
    //console.log ile grupların her birini bastırıyoruz
});