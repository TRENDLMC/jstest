const album={
    name:'LOVE YOURSELF'
};

album.song="Euphoria";
//객체에추가
album.singer='RM';
//객체의 추가
console.log(album);

Object.seal(album);
//객체를 봉인

album.comment='Answer';
//봉인한것은 추가불가능

album.singer='JK';
//봉인된것에 변경은가능
delete album.name;
//봉인된것에 삭제도 불가능
console.log(album);
