//https://developer.spotify.com/documentation/

//Url per mandare l'utente alla pagina di login di Spotify
const authEndpoint = "https://accounts.spotify.com/authorize";

//Url sul quale l'utente deve ritornare dopo il login
const redirectUri = "http://localhost:3000/";

//Client ID fornito da Spotify
const clientId = "a50db932c0724125bc2cfea929c4bf20";

//Scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//URL per fare accedere l'utente completo
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//Funzione per ottenere Token dall'URL
export const getTokenFromResponse = () => {
  //Trova la posizione del simbolo '#' nell'URL e estrae la stringa compresa tra '=' e '&'
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
