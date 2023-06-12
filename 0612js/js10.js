const capitals=`Prague,Czech Republic
Copengaen,Denmark
paris,France
Madrid,Spain,
Rome,Italy`


capitals.split('\n').forEach(s=>{
    const capital=s.split(',')[0];
    const country=s.split(',')[1];
    console.log(`${capital} is in ${country}`);
})