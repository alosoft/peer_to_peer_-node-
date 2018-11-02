fetch('http://rallycoding.herokuapp.com/api/music_albums')
  .then(response => response.json())
  .then(data => {
    data.map(album => console.log(album.title, 'by ', album.artist))
  })
  .catch(console.log);


const fetchAlbum = async () => {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();

  console.log(json);
}

fetchAlbum();