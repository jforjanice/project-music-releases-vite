import data from "./data.json";
import "./style.css";
import { Header } from "./AlbumComp/Header";
import { Album } from "./Album";

//Checking all the locations of the required information
console.log(data);
// console.log("Artist Name=", data.albums.items[0].artists[0].name);
// console.log("Album Name=", data.albums.items[0].name);
// console.log("Album spotify link=", data.albums.items[0].external_urls.spotify);
// console.log("Album image link=", data.albums.items[0].images[1].url);

export const App = () => {
  const albums = data.albums.items;
  const renderAlbums = () => {
    return albums.map(
      (album) => (
        console.log(album),
        (
          <div className="album-wrapper">
            <Album
              key={album.id}
              artists={album.artists}
              albums={album.name}
              albumUrl={album.external_urls.spotify}
              images={album.images[1].url}
            />
          </div>
        )
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="container">{renderAlbums()} </div>
    </div>
  );
};
export default App;
