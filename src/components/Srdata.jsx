import { useEffect } from 'react';

const Srdata=()=>{
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res.data.name);
            setName(res.data.name);
            setMove(res.data.moves.length);
        }
        getData();
    })
}

export default Srdata;

// const Srdata = [{
//     imgsrc: 'https://wallpapercave.com/wp/wp5394420.jpg' ,
//     title: 'NetFlix Original Series' ,
//     sname: 'Dark' ,
//     link: 'https://www.netflix.com/in/title/80100172'
// }
//     ,

// {
//     imgsrc: 'https://wallpapercave.com/wp/wp7418550.jpg' ,
//     title: 'NetFlix Original Series' ,
//     sname: 'Extra cirricular' ,
//     link: 'https://www.netflix.com/in/title/80990668'
// }
//     ,

// {
//     imgsrc: 'https://wallpapercave.com/wp/wp5394420.jpg' ,
//     title: 'NetFlix Original Series' ,
//     sname: 'The Stranger' ,
//     link: 'https://www.netflix.com/in/title/81001209'
// },
// {
//     imgsrc: 'https://wallpapercave.com/wp/wp7418550.jpg' ,
//     title: 'NetFlix Original Series' ,
//     sname: 'Extra cirricular' ,
//     link: 'https://www.netflix.com/in/title/80990668'
// },
// {
//     imgsrc: 'https://wallpapercave.com/wp/wp5394420.jpg' ,
//     title: 'NetFlix Original Series' ,
//     sname: 'The Stranger' ,
//     link: 'https://www.netflix.com/in/title/81001209'
// },
// {
//     imgsrc: 'https://wallpapercave.com/wp/wp7418550.jpg' ,
//     title: 'NetFlix Original Series' ,
//     sname: 'Extra cirricular' ,
//     link: 'https://www.netflix.com/in/title/80990668'
// }

// ];
