import Albums from "./component/Albums";
import Artist from "./component/Artist";
import DeleteTweet from "./component/DeleteTweet";
import Photos from "./component/Photos";
import PostTweet from "./component/PostTweet";
import PutTweet from "./component/PutTweet";
import Tweets from "./component/Tweets";



function App() {
  return (
    <div className="App">
      <h1>New App</h1>
      <Artist/>
      <Albums />
      <Photos />
      <Tweets />
      <PostTweet />
      <PutTweet />
      <DeleteTweet />
    </div>
  );
}

export default App;
